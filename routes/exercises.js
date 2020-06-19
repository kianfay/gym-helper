var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    fs.readFile('data/exercises.json', (err, data) => {
        if(err){
            throw err;
        }
        console.log(JSON.parse(data));
        res.send(JSON.parse(data))
    })
});

router.post('/', (req, res) => {
    console.log(req.body);
    let reqJSONID = req.body.id;
    let curJSON;

    fs.readFile('data/exercises.json', (err, data) => {
        if(err){
            console.log('error');
            throw err;
        }
        curJSON = JSON.parse(data).results;
        console.log('no error');
        console.log(curJSON);
        curJSON.map( (e) => {
            if(e.id == reqJSONID){
                e.date = Date.now();
            }
        })

        let toWrite = {
            results: curJSON
        }
    
        fs.writeFile('data/exercises.json', JSON.stringify(toWrite) , (err, data) => {
            if(err){
                throw err;
            }
        })
    })

});

module.exports = router;