import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [
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
      selectedSize: "m",
      isSpicy: true,
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
      selectedSize: "l",
      isSpicy: false,
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
      selectedSize: "s",
      isSpicy: false,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    deleteFromCart(state, action) {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const items = state.items.map((item) => {
        return item.id == id ? { ...item, quantity } : item;
      });
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, deleteFromCart, updateQuantity, clearItems } =
  cartSlice.actions;
