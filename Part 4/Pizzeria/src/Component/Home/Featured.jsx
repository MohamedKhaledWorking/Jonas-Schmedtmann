import React from "react";
import HeaderIcon from "../../UI/HeaderIcon.jsx";
import { Feather, MoveRight, Pizza } from "lucide-react";
import { useState } from "react";
import PizzaCard from "./PizzaCard.jsx";

export default function Featured() {
  const [Pizza, setPizza] = useState([
    {
      id: "1",
      name: "Margherita Classica",
      description:
        "San Marzano tomatoes, fresh mozzarella, basil, and olive oil.",
      ingredients: [
        "San Marzano Tomatoes",
        "Fresh Mozzarella",
        "Basil",
        "Extra Virgin Olive Oil",
      ],
      basePrice: 14.99,
      image:
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=1200&q=80",
        "https://images.unsplash.com/photo-1548365328-9f547d94b3a7?w=1200&q=80",
      ],
      category: "classic",
      rating: 4.9,
      reviewCount: 328,
      isAvailable: true,
      isPopular: true,
      isNew: false,
      isSpicy: false,
      cookingTime: {
        min: 12,
        max: 18,
      },
      sizes: [
        {
          size: "S",
          name: "Small",
          priceMultiplier: 0.8,
          diameter: '10"',
        },
        {
          size: "M",
          name: "Medium",
          priceMultiplier: 1,
          diameter: '12"',
        },
        {
          size: "L",
          name: "Large",
          priceMultiplier: 1.3,
          diameter: '14"',
        },
      ],
      reviews: [
        {
          id: "1-r1",
          customerName: "Sarah M.",
          rating: 5,
          comment: "Perfect classic. Fresh basil and amazing crust.",
          date: "2 days ago",
        },
        {
          id: "1-r2",
          customerName: "Luca P.",
          rating: 5,
          comment: "Simple, clean, and truly authentic.",
          date: "1 week ago",
        },
      ],
    },
    {
      id: "2",
      name: "Pepperoni Supreme",
      description: "Premium pepperoni, mozzarella, and signature tomato sauce.",
      ingredients: ["Pepperoni", "Mozzarella", "Tomato Sauce", "Oregano"],
      basePrice: 17.99,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=1200&q=80",
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a46?w=1200&q=80",
      ],
      category: "meat-lovers",
      rating: 4.8,
      reviewCount: 256,
      isAvailable: true,
      isPopular: true,
      isNew: false,
      isSpicy: false,
      cookingTime: {
        min: 14,
        max: 22,
      },
      sizes: [
        {
          size: "S",
          name: "Small",
          priceMultiplier: 0.8,
          diameter: '10"',
        },
        {
          size: "M",
          name: "Medium",
          priceMultiplier: 1,
          diameter: '12"',
        },
        {
          size: "L",
          name: "Large",
          priceMultiplier: 1.3,
          diameter: '14"',
        },
      ],
      reviews: [
        {
          id: "2-r1",
          customerName: "James K.",
          rating: 5,
          comment: "Cheese pull is insane. Pepperoni is premium.",
          date: "3 days ago",
        },
        {
          id: "2-r2",
          customerName: "Mona S.",
          rating: 4,
          comment: "Great flavor, would love a spicier option.",
          date: "2 weeks ago",
        },
      ],
    },
    {
      id: "3",
      name: "Quattro Formaggi",
      description:
        "Mozzarella, gorgonzola, parmesan, and fontina for cheese lovers.",
      ingredients: [
        "Mozzarella",
        "Gorgonzola",
        "Parmesan",
        "Fontina",
        "Truffle Oil",
      ],
      basePrice: 19.99,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=1200&q=80",
      ],
      category: "specialty",
      rating: 4.7,
      reviewCount: 189,
      isAvailable: true,
      isPopular: false,
      isNew: true,
      isSpicy: false,
      cookingTime: {
        min: 15,
        max: 20,
      },
      sizes: [
        {
          size: "S",
          name: "Small",
          priceMultiplier: 0.8,
          diameter: '10"',
        },
        {
          size: "M",
          name: "Medium",
          priceMultiplier: 1,
          diameter: '12"',
        },
        {
          size: "L",
          name: "Large",
          priceMultiplier: 1.3,
          diameter: '14"',
        },
      ],
      reviews: [
        {
          id: "3-r1",
          customerName: "Emily R.",
          rating: 5,
          comment: "Cheese heaven. Rich but balanced.",
          date: "5 days ago",
        },
        {
          id: "3-r2",
          customerName: "Hassan A.",
          rating: 4,
          comment: "Loved it. A bit heavy but delicious.",
          date: "2 weeks ago",
        },
      ],
    },
    {
      id: "4",
      name: "Garden Delight",
      description: "Seasonal veggies, pesto, and creamy ricotta.",
      ingredients: [
        "Bell Peppers",
        "Mushrooms",
        "Olives",
        "Artichokes",
        "Pesto",
        "Ricotta",
      ],
      basePrice: 16.99,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&q=80",
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=1200&q=80",
      ],
      category: "vegetarian",
      rating: 4.6,
      reviewCount: 142,
      isAvailable: true,
      isPopular: false,
      isNew: false,
      isSpicy: false,
      cookingTime: {
        min: 13,
        max: 19,
      },
      sizes: [
        {
          size: "S",
          name: "Small",
          priceMultiplier: 0.8,
          diameter: '10"',
        },
        {
          size: "M",
          name: "Medium",
          priceMultiplier: 1,
          diameter: '12"',
        },
        {
          size: "L",
          name: "Large",
          priceMultiplier: 1.3,
          diameter: '14"',
        },
      ],
      reviews: [
        {
          id: "4-r1",
          customerName: "Nina S.",
          rating: 5,
          comment: "Fresh and light. Pesto + ricotta is perfect.",
          date: "1 week ago",
        },
        {
          id: "4-r2",
          customerName: "Kareem M.",
          rating: 4,
          comment: "Great veggie mix. Would reorder.",
          date: "3 weeks ago",
        },
      ],
    },
  ]);

  return (
    <section className="bg-secBgc dark:bg-secBgcDark text-center text-textClr dark:text-textClrDark py-10">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <HeaderIcon
            bgColor={"purple-600/20"}
            textColor={"purple-600"}
            icon={<Feather />}
            text={"Limited Time"}
          />
        </div>
        <p className="text-4xl font-bold my-6 font-main">Featured Pizzas</p>
        <p className="text-textSecClr dark:text-textSecClrDark">
          Crowd favorites and chef's specials you don't want to miss
        </p>
        <div className="text-end hover:text-orange-500 duration-300 cursor-pointer hover:scale-105 mt-8 md:mt-0">
          <span>View All Menu</span>
          <span>
            <MoveRight className="inline mx-4 " />
          </span>
        </div>
        <div className="flex flex-wrap ">
          {Pizza?.map((pizza) => {
            return (
              <div className="md:w-1/2 lg:w-1/4 ">
                <PizzaCard pizza={pizza} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
