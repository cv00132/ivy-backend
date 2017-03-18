const Photo = require("../models").Photo;
const Tags = require("../models").Tags;
const PhotoTags = require("../models").PhotoTags;


module.exports = {
//Add your routes here

    create (req, res) {
        PhotoTags.create({
            photoId: req.params.id,
            tagId: req.params.tagId,
       })
       .then(user => res.status(201).send(user))
       .catch(error => res.status(400).send(error));
    }

}
