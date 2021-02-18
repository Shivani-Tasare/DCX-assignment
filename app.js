const express = require('express');
const http = require('http');
const app = express();

app.use(express.json());

let data = [
    { id: 1, name: 'Rachel Green',  location: 'New York' },
    { id: 2, name: 'Ross Geller',  location: 'Manahattan' },
    { id: 3, name: 'Monica Geller', location: 'New York' },
    { id: 4, name: 'Chandler Bing', location: 'Manahattan' },
    { id: 5, name: 'Joey Tribianni', location: 'Manahattan' },
    { id: 6, name: 'Phoebe Buffay', location: 'New York' }
];

app.get('/', function (req, res) {
    res.status(200).json(data);
});

app.post('/post', function(req,res){
    const newEntry = req.body;
        data.push(newEntry)
        res.status(201);
});

app.put('/:id', function (req, res) {

    const foundId = data.find(f=>f.id === parseInt(req.body.id));
    if(!foundId)
    {
        return res.status(400).sendStatus({error: true, msg : "id does not exist"})
    }else{
        let updated = {
                    id: foundId.id,
                    name: req.body.name, // set value of `title` get from req
                    location: req.body.location
                };
                let targetIndex = data.indexOf(foundId);
                data.splice(targetIndex, 1, updated);
                res.status(200);         
    }
});

app.delete('/:id', function(req,res){
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1);
    }
    res.sendStatus(204);
})
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
module.exports = app;