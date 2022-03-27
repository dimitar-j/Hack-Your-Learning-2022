var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/image-checker', function(req, res, next) {
  const Clarifai = require('clarifai');

  const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");

  const stub = ClarifaiStub.grpc();

  const metadata = new grpc.Metadata();
  metadata.set("authorization", "Key b4b64b81530d4b369ff7e893082923c1");

  stub.PostModelOutputs(
    {
        model_id: "bd367be194cf45149e75f01d59f77ba7",
        inputs: [
            {data: {image: {url: req.body.imageURL}}}
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model outputs failed, status: " + response.status.description);
        }

        // Since we have one input, one output will exist here.
        const output = response.outputs[0];
        let words = req.body.words;
        console.log(words);
        console.log("Predicted concepts:");
        for (var word of words) {
          for (const concept of output.data.concepts) {
            if (concept.name.toLowerCase().includes(word.toLowerCase())) {
              if (concept.value > 0.8) {
                res.send({ "match": "True" });
                return;
              }
            }
            console.log(concept.name.toLowerCase() + " " + word.toLowerCase());
          }
        }
        res.send({"match": "False"})
    }
  );
});

module.exports = router;