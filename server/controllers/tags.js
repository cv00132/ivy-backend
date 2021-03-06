const Photo = require("../models").Photo;
const Tags = require("../models").Tags;
const PhotoTags = require("../models").PhotoTags;


module.exports = {
//Add your routes here

    createTag (req, res) {

    Tags.create({ text: req.body.text })
        .then(Tags.findOrCreate({
                where: {
                    text: Tags.text
                }
            })
            .spread(function(tags, created) {
                tags.get({
                    plain: true
                })
            })
        )
        .then(created => res.status(201).send(created))
        .catch(error => res.status(400).send(error));
    },

    listTags (req, res) {
        Tags.findById(req.params.id, {
            text: req.body.text,
       })
       .then(tag => res.status(201).send(tag))
       .catch(error => res.status(400).send(error));
   },

   listAllTags (req, res) {
        Tags.findAll({
            order: [ [ 'createdAt', 'DESC' ]]
        })
        .then(tag => res.status(201).send(tag))
        .catch(error => res.status(400).send(error));
   }

}
