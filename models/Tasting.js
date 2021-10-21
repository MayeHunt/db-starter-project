const mongoose = require("mongoose");
const { Schema } = mongoose;

const tastingSchema = new Schema(
  {
    points: Number,
    title: String,
    description: String,
    taster_name: String,
    taster_twitter_handle: String,
    price: Number,
    designation: String,
    variety: String,
    province: String,
    country: String,
    winery: String,
    regions: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasting", tastingSchema);
