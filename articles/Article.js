const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category")

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING, 
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article);// hasMany - Uma categoria tem muitos artigos - 1 P N
Article.belongsTo(Category);//belongsTo - Um artigo pertence a uma categoria - Relacionamentos - 1 P 1


//Article.sync();


module.exports = Article;