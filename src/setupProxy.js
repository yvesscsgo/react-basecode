const proxy = require('http-proxy-middleware')
    
module.exports = function(app) {
  app.use(proxy('/auth/login', { 
  	target: 'http://localhost:3000/',
  	secure: false,
  	changeOrigin: true
  }));

  app.use(proxy('/auth/logout', { 
  	target: 'http://localhost:3000/',
  	secure: false,
  	changeOrigin: true
  }));
}
