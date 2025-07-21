const express = require('express');
const app = express();
const PORT = 7000;

app.get('/',(req,res) => {
    res.send('This is home');
});


app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})