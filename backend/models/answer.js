module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
      userid: {
        type: Sequelize.INTEGER
      },
      qid: {
        type: Sequelize.INTEGER
      },
      selectedChoices: {
        type: Sequelize.STRING
      }
    });
  
    return Answer;
  };