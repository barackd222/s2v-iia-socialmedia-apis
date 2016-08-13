

var routes = function (app, config, http, https) {

  app.post('/social/google/calendar/event', function (req, res) {
		res.header("Access-Control-Allow-Origin", "*");



    res.status(202).end();
  });

};

module.exports = routes;  