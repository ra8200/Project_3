const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("login please");
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
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
    addNotes: async (parent, { userId, note }, context) => {
      if (context.user) {
        return User.findByOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { notes: note },
          },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError("login please");
    },
    removeNotes: async (parent, { note }, context) => {
      if (context.user) {
        return User.findByOneAndUpdate(
          { _id: context.user._id },
          { $pull: { notes: note } },
          { new: true }
        );
      }
      throw new AuthenticationError("login please");
    },
  },
};

module.exports = resolvers;
