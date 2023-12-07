//https://blog.chatengine.io/fullstack-chat/nodejs-reactjs



//import express to run http server
//cors to call server to any origin

const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  //get username in reg.body and getting user in link
     try {
          const r = await axios.put(
               'https://api.chatengine.io/users/',
               {username: username, secret: username, first_name: username},
               {headers: {"private-key": "61e6732e-73e8-4c37-b968-d25789dee9ee"}}
          )
          //return data
          return res.status(r.status).json(r.data)
     } catch (error) {
          return res.status(error.response.status).json(error.response.data)
          //return error
     }
});

app.listen(3001);