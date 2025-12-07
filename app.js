const express = require('express');   //Express keretrendszer betöltés
const app = express();                //Példány létrehozás
const port = 3000;                    //Port dedikálás 

app.get('/', (req, res) => {          //elérés kezelés 
  res.send('Hello DevOps!');          //visszadott szöveg
});

app.listen(port, () => {              //port meghatárosás
  console.log(`App is running on http://localhost:${port}`);
});