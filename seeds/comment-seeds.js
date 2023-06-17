const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "This is a great post! I learned a lot from it.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "I have a question regarding the code example. Can you explain it further?",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text:
      "Nice job on the article! It was well-written and easy to follow.",
    user_id: 3,
    post_id: 2,
  },
];

const seedComments = async () => {
  try {
    await Comment.bulkCreate(commentData);
    console.log("Comments seeded successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedComments;
