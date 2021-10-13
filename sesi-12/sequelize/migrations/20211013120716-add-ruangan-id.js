'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.addColumn("Admins", "ruangan_id", { type: Sequelize.INTEGER }),
      queryInterface.addConstraint("Admins", {
        fields: ["ruangan_id"],
        type: "foreign key",
        name: "admin_ruangan",
        references: {
          table: "Ruangans",
          field: "id"
        },
      })
    ])

    // await Promise.all([promise1, promise2, ...])
  },

  down: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.removeConstraint("Admins", "admin_ruangan", {}),
      queryInterface.removeColumn("Admins", "ruangan_id", {}),
    ])
  }
};
