const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },

    userData: async (parent, args, context) => {
      return User.find().populate("matches");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    updateProfile: async (parent, args, context) => {
      return await User.findOneAndUpdate(
        { _id: context.user._id },
        args.userData,
        { new: true, runValidators: true }
      );
    },

    removeProfile: async (parent, args, context) => {
      return await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: args.userData  },
        { new: true, runValidators: true }
      );
    },
  },
};

module.exports = resolvers;
