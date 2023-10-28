const express = require('express');
const app = express();
const PORT  = 3001;


const json = {
    "name": "amir",
    "ftwr": "ke",
    "favorite_colors": [
        {
            "my_favorite_color": "blue",
            "his_favorite_color": "red"
        }
    ]
};

app.get('/costumers/data',(req, res)=>{
    res.send({"my data" : json});
})
app.post('/api/costumers', (req, res)=>{
    console.log(req.body);
    res.send(req.body);
});

app.post('/api/costumers', (req, res)=>{
    res.send('thos is a post request');
});
app.listen(PORT, ()=>{
    console.log('App listening on port '+ PORT);

});
