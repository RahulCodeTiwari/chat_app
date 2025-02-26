import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // male users
    {
        email: "rohit@gmail.com",
        fullName: "rohit tiwari",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/man/1.jpg",
    },
    {
        email: "rohan@gmail.com",
        fullName: "rohan mishra",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/man/2.jpg",
    },
    //female users
    {
        email: "emma.thompson@example.com",
        fullName: "Emma Thompson",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        email: "olivia.miller@example.com",
        fullName: "Olivia Miller",
        password: "123456",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      },
];

const seedDatabase = async () => {
    try{
        await connectDB();

        await User.insertMany(seedUsers);
        console.log("Database seeded successfully");
    } catch (error){
        console.log("Error seeding database:", error);
    }
};

// call the function
seedDatabase();