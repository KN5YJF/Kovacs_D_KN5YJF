const express = require('express');   //Express keretrendszer betöltés
const app = express();                //Példány létrehozás
const port = 3000;                    //Port dedikálás

app.get('/', (req, res) => {          //elérés kezelés
  res.send('Hello DevOps world! CHG');    //visszadott szöveg
});

app.listen(port, () => {               //Server start, a meghatározott porton
  console.log(`Server running at http://localhost:${port}`);
});