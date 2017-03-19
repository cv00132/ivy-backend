const Photo = require("../models").Photo;
const Tags = require("../models").Tags;
const PhotoTags = require("../models").PhotoTags;


module.exports = {
//Add your routes here

    createPhotoTag (req, res) {

    PhotoTags.create({
        photoId: req.body.photoId,
        tagId: req.body.tagId
    })
    .then(function() {
        PhotoTags.findOrCreate({
            where: {
                photoId: req.body.photoId
            }})
            .spread(function(tags, created) {
                tags.get({
                    plain: true
                })
            })
        })
        .then(phototag => res.status(201).send(phototag))
        .catch(error => res.status(400).send(error));
    },

    listPhotoTags (req, res) {
        PhotoTags.findById(req.params.id, {
            text: req.body.text,
       })
       .then(phototag => res.status(201).send(phototag))
       .catch(error => res.status(400).send(error));
   },

   listAllPhotoTags (req, res) {
        PhotoTags.findAll({
            order: [ [ 'createdAt', 'DESC' ]]
        })
        .then(phototag => res.status(201).send(phototag))
        .catch(error => res.status(400).send(error));
   }

}
