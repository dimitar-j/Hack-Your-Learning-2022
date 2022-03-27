const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use((req, res, next) => {
  console.log("asd");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});

/* GET home page. */
app.post('/image-checker', (req, res, next) => {
  console.log("here");
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
            console.log(word.toLowerCase(), concept.name.toLowerCase());
            console.log(word.toLowerCase().includes(concept.name.toLowerCase()));
            if (concept.name.toLowerCase().includes(word.toLowerCase()) || word.toLowerCase().includes(concept.name.toLowerCase())) {
              if (concept.value > 0.8) {
                res.send({ "match": true });
                return;
              }
            }
            console.log(concept.name + " " + concept.value);
          }
        }
        res.send({"match": false})
    }
  );
});

module.exports = app;