const Photo = require("../models").Photo;
const User = require("../models").User;
const Comments = require("../models").Comments;
const Tags = require("../models").Tags;


module.exports = {
  // Add your routes here
  uploadPhoto (req, res) {

    Photo.create({
     title: req.body.title,
     photoUrl: req.body.photoUrl,
     userId: req.user.id,
 })
    .then(console.log(Tags.text))
     .then(photo => res.status(201).send(photo))
     .catch(error => res.status(400).send(error));
  },

  listPhotos (req, res) {
       Photo.findAll({
           order: [ [ 'createdAt', 'DESC' ]]
       })
       .then(photo => res.status(201).send(photo))
       .catch(error => res.status(400).send(error));
  },

  listOnePhoto (req, res) {
       Photo.findOne({
           where: {
             id: req.params.id
           }
        })
       .then(photo => res.status(201).send(photo))
       .catch(error => res.status(400).send(error));
  },

  listTagsOnPhoto (req, res) {
      Photo.findAll({
          include: [ {
              model: PhotoTags,
              include: [ {
                  model: Tags,
                  where: { text: req.body.text }
              }]
          }]
      })
      .then(photo => res.status(201).send(photo))
      .catch(error => res.status(400).send(error));
  },

  likesPhoto (req, res) {
      Photo.update(req.body, {
          fields: ['likes'],
          where: { id: req.params.id }
      })
      .then(photo => res.status(201).send(photo))
      .catch(error => res.status(400).send(error));
  },

  allPhotoLikes (req, res) {
      Photo.findAll({})
      .then(photo => res.status(201).send(photo))
      .catch(error => res.status(400).send(error));
  },

  getPhotoLikes (req, res) {
       Photo.findById( req.params.id )
       .then(photo => res.status(201).send(photo))
       .catch(error => res.status(400).send(error));
  }
}
