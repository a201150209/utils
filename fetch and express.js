  //Клиент
  
  const send = async () => {
    const errorData = {
      type: `critical`,
      url: window.location.href
    };
    const res = await fetch(`https://localhost:3000/api/error/`, {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(errorData),
    });
    const jsonf = await res.json();
    console.log(jsonf);
  }
  send();


//Сервер

const express = require('express');

const router = express.Router();
router.post('/', async (req, res) => {
    console.log(req.body);
    return res.send(req.body);
});

module.exports = router;
