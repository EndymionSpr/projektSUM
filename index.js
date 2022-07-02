const express = require('express');
const app = express();
const PORT = 5555;


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