import { ChartColumnStacked } from "lucide-react";
import React, { useState } from "react";
import HeaderIcon from "../../UI/HeaderIcon.jsx";
import CategoryCard from "./CategoryCard.jsx";

export default function Category() {
  const [category, setCategory] = useState([
    {
      id: "1",
      description:
        "San Marzano tomatoes, fresh mozzarella, basil, and olive oil.",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
      category: "classic",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-pizza-icon lucide-pizza"
        >
          <path d="m12 14-1 1" />
          <path d="m13.75 18.25-1.25 1.42" />
          <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
          <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
          <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
        </svg>
      ),
    },
    {
      id: "2",
      description:
        "San Marzano tomatoes, fresh mozzarella, basil, and olive oil.",
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800&q=80",

      category: "Meat Lovers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-beef-icon lucide-beef"
        >
          <path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" />
          <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
          <circle cx="12.5" cy="8.5" r="2.5" />
        </svg>
      ),
    },
    {
      id: "3",
      description:
        "San Marzano tomatoes, fresh mozzarella, basil, and olive oil.",
      image:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&q=80",
      category: "Vegetarian",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-vegan-icon lucide-vegan"
        >
          <path d="M16 8q6 0 6-6-6 0-6 6" />
          <path d="M17.41 3.59a10 10 0 1 0 3 3" />
          <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
        </svg>
      ),
    },
    {
      id: "4",
      description:
        "San Marzano tomatoes, fresh mozzarella, basil, and olive oil.",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&q=80",

      category: "Specialty",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-gem-icon lucide-gem"
        >
          <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
          <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
          <path d="M2 9h20" />
        </svg>
      ),
    },
  ]);
  return (
    <>
      <section className="bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark py-12 my-20 ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col ">
            <HeaderIcon
              text={"Browse By Category"}
              icon={<ChartColumnStacked />}
              bgColor={"emerald-500/20"}
              textColor={"emerald-500"}
            />
            <p className="text-4xl text-textClr dark:text-textClrDark font-bold font-main my-6 text-center">
              Find Your Perfect Match
            </p>
            <p className="text-textSecClr dark:text-textSecClrDark text-lg md:w-full w-4/5 text-center">
              Whether you're a meat lover or veggie enthusiast, we have
              something delicious for everyone
            </p>
          </div>
          <div className="flex my-8 flex-wrap  w-full">
            {category?.map((category, i) => {
              return <CategoryCard category={category} key={category?.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
