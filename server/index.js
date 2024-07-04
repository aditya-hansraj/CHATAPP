const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json())
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const {username} = req.body;
    try {
        console.log(process.env.PRIVATE_KEY);
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: username,
                first_name: username,
            },
            {
                headers: {"private-key": process.env.PRIVATE_KEY}
            }
        );
        return res.status(response.status).json(response.data);
    } catch(err) {
        return res.status(err.response.status).json(err.response.data);
    } 
    return res.json({username: username, secret: "sha256..."});
});

app.listen(3000);      
console.log(`Server running at http://localhost:3000`); 
