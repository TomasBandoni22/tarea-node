var express = require('express');
const { route } = require('.');
var router = express.Router( );

router.get('/', function(req, res , next) {
    res.send('¡Hola, esta es la página de inicio!');
  });
  
  router.get('/about', function(req, res , next) {
    res.send('Esta es la página "Acerca de nosotros".');
  });
  
  router.get('/contact', function(req, res, next)  {
    res.send('Puedes contactarnos en contact@example.com.');
  
});

module.exports = router;