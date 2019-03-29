var restify = require('restify');
let jwt_decode = require('jwt-decode')
let Constants = require('./constants.js');
let authorizationURL = `https://login.microsoftonline.com/${Constants.TENANT_ID}/oauth2/authorize?client_id=${Constants.APPLICATION_ID}&response_type=id_token&redirect_uri=http://localhost:8080/login&response_mode=form_post&scope=openid&state=gustav&nonce=tesla`;

const server = restify.createServer({
  name: 'tellsell',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', function (req, res, next) {
  res.redirect(authorizationURL, next);
  return next();
});

server.post('/login', function (req, res, next) {
  let decodedToken = jwt_decode(req.body.id_token);
  console.log(decodedToken);
  res.send("Login successful");
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});