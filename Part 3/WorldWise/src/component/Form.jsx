// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import btnStyles from "./Button.module.css";
import axios from "axios";
import { useUrlPosition } from "../../hooks/useUrlPosition.jsx";
import { Bounce, toast } from "react-toastify";
import Message from "./Message.jsx";
import { useCities } from "../../Context/CitiesContext.jsx";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("PT");
  const [date, setDate] = useState(new Date());
  const [emoji, setEmoji] = useState("");
  const [notes, setNotes] = useState("");
  const { lat, lng } = useUrlPosition();
  const [error, setError] = useState("");
  const { addNewCity } = useCities();

  function getCity(lat, lng) {
    axios
      .get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      )
      .then((res) => {
        if (!res?.data.city)
          return setError(
            "it seems to me that you selected a wrong city please click on the map again"
          );

        setCityName(res?.data?.city);
        setCountryName(res?.data?.countryName);
        setCountryCode(res?.data?.countryCode);
        setEmoji(convertToEmoji(res?.data?.countryCode));
        setError("");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date || !countryName || !lat || !lng)
      return toast.error(" Please fill in all the fields ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

    const newCity = {
      id: String(Date.now()),
      cityName,
      country: countryName,
      emoji: convertToEmoji(countryCode),
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };

    addNewCity(newCity);
  }

  useEffect(() => {
    getCity(lat, lng);
  }, [lat, lng]);

  if (error) return <Message message={error} />;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          type="datetime-local"
          className="input"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <button
          className={btnStyles.primary + " " + btnStyles.btn}
          type="submit"
        >
          Add
        </button>
        <button
          className={btnStyles.btn + " " + btnStyles.back}
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
}

export default Form;
