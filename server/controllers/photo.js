const Photo = require("../models").Photo;
const User = require("../models").User;
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");


module.exports = {
  // Add your routes here
  create (req, res) {
    // var token = req.headers['access-token'];
    // var decoded = jwt.decode(token, appSecrets.jwtSecret);
    // var userId = decoded.id;

    Photo.create({
    //console.log(req.user);
    title: req.body.title,
    photoUrl: req.body.photoUrl,
    userId: req.user.id,
    })
    .then(photo => res.status(201).send(photo))
    .catch(error => res.status(400).send(error));
 },

  list (req, res) {
       Photo.findAll({
           order: [ [ 'createdAt', 'DESC' ]]
       })
       .then(photo => res.status(201).send(photo))
       .catch(error => res.status(400).send(error));
  }
}


// const Photo = require("../models").Photo;
//
// module.exports = {
//   // Add your routes here
//   create (req, res) {
//       Photo.create({
//         userId: req.body.userId,
//         title: req.body.title,
//         photoUrl: req.body.photoUrl
//      })
//      .then(user => res.status(201).send(user))
//      .catch(error => res.status(400).send(error));
//  },
//
//   list (req, res) {
//       Photo.findAll({
//         order: [[ 'createdAt', 'DESC' ]]
//      })
//      .then(photo => res.status(201).send(photo))
//      .catch(error => res.status(400).send(error))
//  }
// }
