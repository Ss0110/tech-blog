const { Post } = require("../models");

const postData = [
  {
    title: "The Power of JavaScript",
    description:
      "JavaScript is a versatile programming language that powers interactive web experiences. It allows developers to create dynamic and responsive websites with ease.",
    user_id: 1,
  },
  {
    title: "Exploring Data Structures in Python",
    description:
      "Data structures are fundamental components in computer science. Python provides a rich set of built-in data structures such as lists, dictionaries, and sets that enable efficient data manipulation and organization.",
    user_id: 2,
  },
  {
    title: "The Future of Artificial Intelligence",
    description:
      "Artificial intelligence (AI) is revolutionizing various industries, from healthcare to finance. As AI continues to advance, it holds the potential to reshape our world and bring about significant technological advancements.",
    user_id: 3,
  },
];

const seedPosts = async () => {
  try {
    await Post.bulkCreate(postData);
    console.log("Posts seeded successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedPosts;
