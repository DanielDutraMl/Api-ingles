module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pessoas', [{
      nome: 'John Doe',
      ativo: true,
      email: "jhon@hotmail.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Marcos',
      ativo: false,
      email: "marcos@hotmail.com",
      role: "docente",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Maria',
      ativo: true,
      email: "maria@hotmail.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'John',
      ativo: true,
      email: "jhon@hotmail.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Joh',
      ativo: true,
      email: "jho@hotmail.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Doe',
      ativo: true,
      email: "doe@hotmail.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Karina',
      ativo: true,
      email: "karina@hotmail.com",
      role: "docente",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Daniel',
      ativo: true,
      email: "danield@hotmail.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
