const { AuthenticationError } = require("apollo-server-express");
const { User, Notes } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, variables, context) => {
      return User.findOne(context.user._id).populate("notes");
    },
    notes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Notes.find(params).sort({ createdAt: -1 });
    },
    note: async (parent, { notesId }) => {
      return Notes.findOne({ _id: notesId });
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
    addNotes: async (parent, { text }, context) => {
      const note = await Notes.create({ text });
      await User.findOneAndUpdate(
        {
          _id: context.user._id,
        },
        { $addToSet: { notes: note._id } }
      );
      return note;
    },
    removeNotes: async (parent, { notesId }, context) => {
      const note = await Notes.findOneAndDelete({ _id: notesId });
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { notes: note._id } }
      );
      return note;
    },
  },
};

module.exports = resolvers;
