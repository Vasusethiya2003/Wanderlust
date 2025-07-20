const mongoose = require("mongoose");
const sampleData = require("./data.js"); // This should match your export
const Listing = require("../models/listing.js"); // Mongoose model

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
  console.log("✅ MongoDB Connected");

  await initDB();
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    const listingsWithOwner = sampleData.data.map((obj) => ({
      ...obj,
      owner: "68789cf31df2c9880058cb14", // 👤 Replace with your actual user ObjectId
    }));
    await Listing.insertMany(listingsWithOwner);
    console.log("✅ Database initialized with sample listings");
  } catch (err) {
    console.error("❌ Error inserting data:", err);
  }
};
