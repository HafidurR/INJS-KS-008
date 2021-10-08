module.exports = (sequelize, Datatypes) => {
    const Admin = sequelize.define('Admin', {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          name: {
            type: Datatypes.STRING,
            allowNull: false
          },
          gender: {
            type: Datatypes.ENUM,
            values: ['male','female'],
            allowNull: false
          },
          age: {
            type: Datatypes.INTEGER,
            allowNull: false
          },
          birthdate: {
            type: Datatypes.DATE,
            allowNull: false
          },
          createdAt: {
            field: 'created_at',
            type: Datatypes.DATE,
            allowNull: false
          },
          updatedAt: {
            field: 'updated_at',
            type: Datatypes.DATE,
            allowNull: false
          }
    }, {
      tableName: 'Admin'
    })
    return Admin;
}