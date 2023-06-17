const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
  {
    username: "jsmith",
    email: "jsmith@example.com",
    password: "password123",
  },
  {
    username: "kjohnson",
    email: "kjohnson@example.com",
    password: "password456",
  },
  {
    username: "amiller",
    email: "amiller@example.com",
    password: "password789",
  },
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(userData, { individualHooks: true });
    console.log("Users seeded successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedUsers;
