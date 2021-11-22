console.log('Server-side code running');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/game/game.html');
});

app.listen(8000, () => {
  console.log('listening on 8000');
});
