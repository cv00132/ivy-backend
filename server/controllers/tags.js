const Photo = require("../models").Photo;
const Tags = require("../models").Tags;
const PhotoTags = require("../models").PhotoTags;


module.exports = {
//Add your routes here

    list (req, res) {
        Tags.findById(req.params.id, {
            text: req.body.text,
       })
       .then(tag => res.status(201).send(tag))
       .catch(error => res.status(400).send(error));
   },

   listAll (req, res) {
        Tags.findAll({
            order: [ [ 'createdAt', 'DESC' ]]
        })
        .then(tag => res.status(201).send(tag))
        .catch(error => res.status(400).send(error));
   }

}
