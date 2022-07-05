require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.use("/posts", require("./routes/postRoutes"));

app.get('/users_normal',(req,res) => {
    res.status(200).send({ response: 
        [ {user_id : 1},
          {user_id : 2}
        ]
         })
});

 app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);