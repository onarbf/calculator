const express = require('express');
var router = express.Router();


router.get('/',(req,res)=>{
  res.render('index',{
    title: 'Use it!'
  });
});

router.post('/',(req,res)=>{
  console.log(req.body.numero);

  res.render('index',{
    title: 'Use it!',
    number: req.body.numero
  })
});

module.exports = router;
