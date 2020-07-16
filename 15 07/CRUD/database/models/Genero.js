module.exports = function (sequelize, dataTypes) {
    let alias = 'Genero';
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    }

    let Genero = sequelize.define(alias, columnas, config);

    Genero.associate = function (models) {
        Genero.hasMany(models.Pelicula, {

            as: "peliculas",
            foreignKey: 'genre_id'
        })
    }

    return Genero;
}