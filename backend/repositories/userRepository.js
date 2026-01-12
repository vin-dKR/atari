const prisma = require('../config/prisma');

const userRepository = {
  findAll: async () => {
    return await prisma.user.findMany({
      orderBy: { id: 'asc' },
    });
  },

  findById: async (id) => {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
  },

  findByEmail: async (email) => {
    return await prisma.user.findUnique({
      where: { email },
    });
  },

  create: async (userData) => {
    return await prisma.user.create({
      data: userData,
    });
  },

  update: async (id, userData) => {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data: userData,
    });
  },

  delete: async (id) => {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    return true;
  },
};

module.exports = userRepository;
