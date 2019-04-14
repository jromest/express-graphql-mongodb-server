const User = require("../model/User");

module.exports = resolvers = {
  Query: {
    hello: () => "Hello World",
    allUsers: () => User.find()
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = new User({ name, email });
      return newUser.save();
    },
    updateUser: async (_, { id, name, email }) => {
      const updatedUser = await User.findById(id);
      if (!updatedUser) throw new Error("User not found!");

      updatedUser.name = name;
      updatedUser.email = email;
      return updatedUser.save();
    },
    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findById(id);
      if (!deletedUser) throw new Error("User not found!");

      return deletedUser.remove();
    }
  }
};
