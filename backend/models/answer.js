module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
      uid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      },
      qid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "questions",
          key: "id"
        }
      },
      choice: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      }
    });
  
    return Answer;
  };