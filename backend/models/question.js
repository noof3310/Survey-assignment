module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
      question: {
        type: Sequelize.STRING,
        allowNull: false
      },
      choices: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Question;
  };