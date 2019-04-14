const Cat = require("../model/Cat");
const User = require("../model/User");

module.exports = resolvers = {
  Query: {
    hello: () => "Hello World",
    cats: () => Cat.find(),
    allUsers: () => User.find()
  },
  Mutation: {
    createCat: (_, { name }) => {
      const kitty = new Cat({ name });
      return kitty.save();
    },
    updateCat: async (_, { id, name }) => {
      const kitty = await Cat.findById(id);
      if (!kitty) throw new Error("Cat not found!");

      kitty.name = name;
      return kitty.save();
    },
    deleteCat: async (_, { id }) => {
      const kitty = await Cat.findById(id);
      if (!kitty) throw new Error("Cat not found!");

      return kitty.remove();
    },

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
