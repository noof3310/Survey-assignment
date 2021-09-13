const db = require("../models");
const Users = db.users;
const Questions = db.questions;
const Answers = db.answers;
const sequelize = db.sequelize;

// Create a User
exports.createUser = (req, res) => {

	const user = {
		name: req.body.name,
		rating: req.body.rating,
		comment: req.body.comment
	};

	Users.create(user)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message
			});
		});

};

// Get all Users
exports.findAllUsers = (req, res) => {

  Users.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });

};

// Get all counted ratings
exports.getCountedRatings = (req, res) => {

  let ratings = [0, 0, 0, 0, 0, 0];

  Users.findAll()
    .then(users => {
      users.forEach(user => {
        if (user.rating != null) ratings[user.rating] += 1;
      });
      res.send(ratings);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });

};

// Update a User
exports.updateUser = (req, res) => {

  const id = req.params.id;

  Users.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });

};

// Delete all Users and Answers
exports.deleteAllUsers = (req, res) => {

  Users.destroy({
    where: {},
    truncate: false
  })
    .then(userNums => {
      
      Answer.destroy({
        where: {},
        truncate: false
      })
        .then(answerNums => {
          res.send({
            message: `${userNums} Users and ${answerNums} Answers were deleted successfully.`
          });
        })
        .catch(err => {
          res.status(500).send({
            message: `${userNums} Users were deleted successfully but errored deleting Answers`
          });
        });
    
    })
    .catch(err => {
      res.status(500).send({
        message: "Errored deleting Users"
      });
    });

};

// Create a Question
exports.createQuestion = (req, res) => {

  if (!req.body.question || !req.body.choices) {
    res.status(400).send({
      message: "Question and Choices cannot be empty!"
    });
    return;
	}

	const question = {
		question: req.body.question,
		choices: req.body.choices
	};

	Questions.create(question)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message
			});
		});

};

// Get all Questions
exports.findAllQuestions = (req, res) => {

  Questions.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });

};

// Update a Question
exports.updateQuestion = (req, res) => {

  const id = req.params.id;

  Questions.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Question was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Question with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Question with id=" + id
      });
    });

};

// Delete all Questions and Answers
exports.deleteAllQuestions = (req, res) => {
  
  Questions.destroy({
    where: {},
    truncate: false
  })
    .then(questionNums => {
      
      Answers.destroy({
        where: {},
        truncate: false
      })
        .then(answerNums => {
          res.send({
            message: `${questionNums} Questions and ${answerNums} Answers were deleted successfully.`
          });
        })
        .catch(err => {
          res.status(500).send({
            message: `${questionNums} Questions were deleted successfully but errored deleting Answers`
          });
        });
    
    })
    .catch(err => {
      res.status(500).send({
        message: "Errored deleting Questions"
      });
    });

};

// Create Answers
exports.createAnswers = (req, res) => {

  const answers = req.body;
  let num = 0;

  answers.forEach(question => {

    question.choices.split(";").forEach(choice => {
      let answer = {
        uid: question.uid,
        qid: question.qid,
        choice: choice
      }
      Answers.create(answer)
        .catch(err => {
          res.status(500).send({
            message: err.message
          });
        });
      num += 1;
    });

  });

  res.send({
    message: `${num} choices selected were added succesfully`
  });

};

// Get all Answers
exports.findAllAnswers = (req, res) => {

  Answers.findAll({
    attributes: ["qid", "choice", [sequelize.fn("COUNT", sequelize.col("choice")), "count"]],
    group: ["qid", "choice"]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });

};

// Delete an Answer
exports.deleteAnswer = (req, res) => {

  const qid = req.params.qid;
  const uid = req.params.uid;
  const choice = req.params.choice;

  Answers.destroy({
    where: {
      qid: qid,
      uid: uid,
      choice: choice
    },
    truncate: false
  })
    .then(nums => {
      res.send({
        message: `Answer was deleted successfully.`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });

};

// Delete all Answers
exports.deleteAllAnswers = (req, res) => {

  Answers.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Answers were deleted successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });

};
