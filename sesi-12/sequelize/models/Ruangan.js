module.exports = (sequelize, DataTypes) => {
    const Ruangan = sequelize.define('Ruangan', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull: false
        },
        adminId: {
            field: 'admin_id',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nama_ruangan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'tb_ruangan'
    })

    // Ruangan.associate = models => {
    //     Ruangan.belongsTo(models.Admin);
    // }

    return Ruangan;
}