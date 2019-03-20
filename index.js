var restify = require('restify');
let jwt_decode = require('jwt-decode')

const server = restify.createServer({
  name: 'tellsell',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/echo', function (req, res, next) {
  res.redirect(AUTHORIZE_URL, next);
  return next();
});

server.post('/echo', function (req, res, next) {
  let decodedToken = jwt_decode(req.body.id_token);
  console.log(decodedToken);
  res.send("Login successful");
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});