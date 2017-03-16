const Photo = require("../models").Photo;

module.exports = {
  // Add your routes here
  create (req, res) {
      Photo.create({
          where: {
              userId: req.params.userId
          },
          title: req.body.title,
          photoUrl: req.body.photoUrl
     })
     .then(user => res.status(201).send(user))
     .catch(error => res.status(400).send(error));
 }

 list (req, res) {
     Photo.findAll({
        where: {
            userId: req.params.userId
        },
        order: [ 'createdAt', 'DESC' ]
     })
     .then(photo => res.status(201).send(photo))
     .catch(error => res.status(400).send(error))
 }
}
