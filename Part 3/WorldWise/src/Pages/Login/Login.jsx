import { useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login } = useAuth();
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password)
      return toast.error("Please fill in all the fields");
    login({ email, password });
    navigate("/app" , { replace: true });
  }

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button type="submit" className="btn  bg-green-700 w-full ">
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
