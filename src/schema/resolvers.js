const Cat = require("../model/Cat");

module.exports = resolvers = {
  Query: {
    hello: () => "Hello World",
    cats: () => Cat.find()
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
    }
  }
};
