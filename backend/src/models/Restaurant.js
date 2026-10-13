const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    cuisine: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    deliveryTime: {
      type: String,
      default: "30-40 mins",
    },

    priceForTwo: {
      type: Number,
      default: 300,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);