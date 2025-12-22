import React, { useState } from "react";
import HeaderIcon from "../../UI/HeaderIcon.jsx";
import { MoveRight, Star, Trophy } from "lucide-react";
import img from "../../assets/photo-1590947132387-155cc02f3212.jfif";

export default function TopRated() {
  const [topRated, setTopRate] = useState([
    {
      id: "21",
      name: "Classic Tuna & Onion",
      description: "Tuna, red onion, olives, and mozzarella.",
      ingredients: [
        "Tuna",
        "Red Onion",
        "Olives",
        "Mozzarella",
        "Tomato Sauce",
      ],
      basePrice: 18.75,
      image:
        "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=1200&q=80",
        "https://images.unsplash.com/photo-1544982503-7b5f03d9aafe?w=1200&q=80",
      ],
      category: "classic",
      rating: 4.3,
      reviewCount: 77,
      isAvailable: true,
      isPopular: false,
      isNew: false,
      isSpicy: false,
      cookingTime: { min: 13, max: 20 },
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
          priceMultiplier: 1.0,
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
          id: "21-r1",
          customerName: "Ramy",
          rating: 4,
          comment: "Surprisingly good, very savory.",
          date: "2 weeks ago",
        },
        {
          id: "21-r2",
          customerName: "Heba",
          rating: 4,
          comment: "Olives make it even better.",
          date: "1 month ago",
        },
      ],
    },

    {
      id: "22",
      name: "Philly Steak",
      description: "Steak strips, peppers, onions, and a creamy cheese sauce.",
      ingredients: [
        "Steak",
        "Bell Peppers",
        "Onion",
        "Cheese Sauce",
        "Mozzarella",
      ],
      basePrice: 23.25,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=1200&q=80",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
      ],
      category: "meat-lovers",
      rating: 4.6,
      reviewCount: 112,
      isAvailable: true,
      isPopular: true,
      isNew: false,
      isSpicy: false,
      cookingTime: { min: 18, max: 26 },
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
          priceMultiplier: 1.0,
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
          id: "22-r1",
          customerName: "Tamer",
          rating: 5,
          comment: "Steak is tender, sauce is perfect.",
          date: "5 days ago",
        },
        {
          id: "22-r2",
          customerName: "Dalia",
          rating: 4,
          comment: "Very filling and tasty.",
          date: "2 weeks ago",
        },
      ],
    },

    {
      id: "20",
      name: "Pesto Shrimp",
      description: "Pesto base, shrimp, cherry tomatoes, and mozzarella.",
      ingredients: [
        "Pesto",
        "Shrimp",
        "Cherry Tomatoes",
        "Mozzarella",
        "Lemon Zest",
      ],
      basePrice: 24.5,
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=1200&q=80",
        "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=1200&q=80",
      ],
      category: "specialty",
      rating: 4.6,
      reviewCount: 61,
      isAvailable: true,
      isPopular: false,
      isNew: true,
      isSpicy: false,
      cookingTime: { min: 14, max: 21 },
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
          priceMultiplier: 1.0,
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
          id: "20-r1",
          customerName: "Mai",
          rating: 5,
          comment: "Shrimp + pesto is a crazy good combo.",
          date: "1 week ago",
        },
        {
          id: "20-r2",
          customerName: "Hossam",
          rating: 4,
          comment: "Unique and tasty.",
          date: "3 weeks ago",
        },
      ],
    },

    {
      id: "25",
      name: "Basil Chicken Alfredo",
      description: "Alfredo base, chicken, basil, and parmesan.",
      ingredients: [
        "Alfredo Sauce",
        "Chicken",
        "Basil",
        "Parmesan",
        "Mozzarella",
      ],
      basePrice: 21.0,
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=1200&q=80",
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a46?w=1200&q=80",
      ],
      category: "chicken",
      rating: 4.6,
      reviewCount: 88,
      isAvailable: true,
      isPopular: false,
      isNew: true,
      isSpicy: false,
      cookingTime: { min: 15, max: 23 },
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
          priceMultiplier: 1.0,
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
          id: "25-r1",
          customerName: "Hagar",
          rating: 5,
          comment: "Creamy and delicious.",
          date: "6 days ago",
        },
        {
          id: "25-r2",
          customerName: "Ziad",
          rating: 4,
          comment: "Great flavor, very filling.",
          date: "2 weeks ago",
        },
      ],
    },
  ]);
  return (
    <>
      <section className="my-30 bg-secBgc dark:bg-secBgcDark py-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col">
            <HeaderIcon
              icon={<Trophy />}
              bgColor={"yellow-500/20"}
              textColor={"yellow-500"}
              text={"Customer Favorites"}
            />
            <p className="text-4xl font-bold my-8 font-main">Top Rated</p>
            <p className="text-textSecClr dark:text-textSecClrDark text-center">
              Highest rated by our customers. These pizzas never disappoint!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row my-12 space-y-8">
            <div className="px-4 w-full lg:w-1/2 ">
              <div className="w-full rounded-3xl overflow-hidden relative border border-textSecClr/20 dark:border-textSecClrDark/20">
                <img src={img} alt=" top rated pizza image" />
                <div className="absolute inset-0 bg-linear-to-b from-black/10 to-secBgc to-65% dark:to-secBgcDark px-10 flex justify-end flex-col md:pb-5 ">
                  <p className="text-lg md:text-3xl font-bold font-main ">
                    Margherita Classica
                  </p>
                  <p className="text-textSecClr dark:text-textSecClrDark my-2 md:max-w-11/12 text-xs md:text-lg">
                    The timeless classic with San Marzano tomatoes, fresh
                    mozzarella, and fragrant basil
                  </p>
                  <div className="flex space-x-4  ">
                    <p className="text-bold text-sm md:text-lg ">4.9</p>
                    <p className="text-bold text-sm md:text-lg text-textSecClr dark:text-textSecClrDark">
                      (328 reviews)
                    </p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-lg md:text-2xl font-bold text-orange-500">
                      $14.99
                    </p>
                    <button className="px-4 md:px-16 py-2.5 bg-orange-500 text-white rounded-xl cursor-pointer">
                      order now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 w-full lg:w-1/2 flex flex-col">
              {topRated?.map((pizza, idx) => (
                <div className="w-full  mb-4 rounded-3xl overflow-hidden px-4 py-3 flex items-center border border-textSecClr/20 dark:border-textSecClrDark/20 hover:border-orange-500 duration-300 group space-x-4">
                  <div className="w-6/12 md:w-2/12 ">
                    <img
                      src={pizza?.image}
                      alt={pizza?.name + " image"}
                      className="w-full object-cover h-25  rounded-2xl group-hover:scale-110 duration-300 "
                    />
                  </div>
                  <div className="w-8/12">
                    <p className="font-bold font-main text-base md:text-2xl line-clamp-1 group-hover:text-orange-500 duration-300 cursor-pointer">
                      {pizza?.name}
                    </p>
                    <div className="flex space-x-2 my-2 text-xs md:text-base">
                      <span className="font-bold">#{idx + 2}</span>
                      <Star className="text-yellow-500 fill-yellow-500  w-4 h-4 md:w-6 md:h-6" />
                      <span className="font-bold">{pizza?.rating}</span>
                      <span className="text-textSecClr dark:text-textSecClrDark">
                        ({pizza?.reviewCount} )
                      </span>
                    </div>

                    <p className="text-textSecClr dark:text-textSecClrDark line-clamp-1 text-xs md:text-sm">
                      {pizza?.description}
                    </p>
                  </div>
                  <div className="w-2/12 flex flex-col items-center justify-center space-y-2 ">
                    <div className="text-sm md:text-2xl font-bold text-orange-500">
                      ${pizza?.basePrice}
                    </div>
                    <MoveRight className="group-hover:text-orange-500 duration-300 cursor-pointer w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
