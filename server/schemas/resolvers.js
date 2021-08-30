const { AuthenticationError } = require("apollo-server-express");

const { User, Notes } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("login please");
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    notes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Notes.find(params).sort({ createdAt: -1 });
    },
    note: async (parent, { noteId }) => {
      return Notes.findOne({ _id: noteId });
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
    addNotes: async (parent, { noteText }, context) => {
      if (context.user) {
        const noteEl = await Notes.create({
          noteText,
        });
        await Notes.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { notes: noteEl._id },
          },
          { new: true, runValidators: true }
        );
        return noteEl;
      }
      throw new AuthenticationError("login please");
    },
    removeNotes: async (parent, { noteId }, context) => {
      if (context.user) {
        const noteEl = await Notes.findOneAndDelete({
          _id: noteId,
        });
        await Notes.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { notes: noteEl.note } },
          { new: true }
        );
        return noteEl;
      }
      throw new AuthenticationError("login please");
    },
  },
};

module.exports = resolvers;
