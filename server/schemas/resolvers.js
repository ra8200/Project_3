const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, variables, context) => {
      return User.findById(context.user._id).populate("saveRhythms");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No User found");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Wrong Password");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    saveRhythms: async (parent, { input }, context) => {
      return User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { saveRhythms: input } },
        { new: true, runValidators: true }
      );
    },
  },
};

module.exports = resolvers;
