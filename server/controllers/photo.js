const Photo = require("../models").Photo;
const User = require("../models").User;
const Comments = require("../models").Comments;
const Tags = require("../models").Tags;


module.exports = {
  // Add your routes here
  create (req, res) {

    Photo.create({
     title: req.body.title,
     photoUrl: req.body.photoUrl,
     userId: req.user.id
     //text: req.body.text
    }
    //  { include: [{
    //       model: Tags,
    //       as: 'tags'
    //  }]
    )
    .then(console.log(Tags.text))
     .then(photo => res.status(201).send(photo))
     .catch(error => res.status(400).send(error));
  },

  list (req, res) {
       Photo.findAll({
           order: [ [ 'createdAt', 'DESC' ]]
       })
       .then(photo => res.status(201).send(photo))
       .catch(error => res.status(400).send(error));
  },

  listOne (req, res) {
       Photo.findOne({
           where: {
             id: req.params.id
           }
        })
       .then(photo => res.status(201).send(photo))
       .catch(error => res.status(400).send(error));
  },

  listComments (req, res) {
      Photo.findById( req.params.id , {
          include: {
              model: Comments
          }
      })
      .then(photo => res.status(201).send(photo))
      .catch(error => res.status(400).send(error));
  },

  listTags (req, res) {
      Photo.findById( req.params.id , {
          include: {
              model: Tags
          }
      })
      .then(photo => res.status(201).send(photo))
      .catch(error => res.status(400).send(error));
  },

  likes (req, res) {
      Photo.update(req.body, {
          fields: ['likes'],
          where: { id: req.params.id }
      })
      .then(photo => res.status(201).send(photo))
      .catch(error => res.status(400).send(error));
  },

  getLikes (req, res) {
      Photo.findAll()
      .then(photo => res.status(201).send(photo))
      .catch(error => res.status(400).send(error));
  },

  allLikes (req, res) {
       Photo.findById( req.params.id )
       .then(photo => res.status(201).send(photo))
       .catch(error => res.status(400).send(error));
  }
}
