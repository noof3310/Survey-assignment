const db = require("../models");
const User = db.users;
const Question = db.questions;
const Answer = db.answers;

// Create and Save a User to db
exports.createUser = (req, res) => {

	const user = {
		name: req.body.name,
		rating: req.body.rating,
		comment: req.body.comment
	};

	User.create(user)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message
			});
		});

};

// Get all Users from db
exports.findAllUsers = (req, res) => {

  User.findAll()
    .then(data => {
      res.send(data);
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

  User.update(req.body, {
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

// Delete all Users and Answer
exports.deleteAllUsers = (req, res) => {

  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message: "err.message"
      });
    });

  // Answer.destroy({
  //   where: {},
  //   truncate: false
  // })
  //   .then(nums => {
  //     res.send({ message: `${nums} Answers were deleted successfully.` });
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "err.message"
  //     });
  //   });

};

// Create a Question
exports.createQuestion = (req, res) => {

  if (!req.body.question || !req.body.choices) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
	}

	const question = {
		question: req.body.question,
		choices: req.body.choices
	};

	Question.create(question)
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

  Question.findAll()
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

  Question.update(req.body, {
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

// Delete all Questions and Answer
exports.deleteAllQuestions = (req, res) => {

  Question.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Questions were deleted successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message: "err.message"
      });
    });

  // Answer.destroy({
  //   where: {},
  //   truncate: false
  // })
  //   .then(nums => {
  //     res.send({ message: `${nums} Answers were deleted successfully.` });
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "err.message"
  //     });
  //   });

};

// Create an Answer
exports.createAnswer = (req, res) => {

  if (!req.body.userid || !req.body.qid || !req.body.selectedChoices) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
	}

	const answer = {
		userid: req.body.userid,
		qid: req.body.qid,
		selectedChoices: req.body.selectedChoices
	};

	Answer.create(answer)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message
			});
		});

};

// Get all Answer
exports.findAllAnswers = (req, res) => {

  Answer.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });

};

// Delete all Answer
exports.deleteAllAnswers = (req, res) => {

  Answer.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Answers were deleted successfully.` });
    })
    .catch(err => {
      res.status(500).send({
        message: "err.message"
      });
    });

};
