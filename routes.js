var passport = require('passport');
var Account = require('./models/account');
var Pet = require('./models/pet');

module.exports = function (app) {

  app.get('/', function (req, res) {
      if (req.user) {
        res.redirect('/pets');
      } else {
        res.render('index', { user : req.user });
      }
  });

  app.get('/register', function(req, res) {
      res.render('register', { });
  });

  app.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { info: "Sorry. That username already exists." });
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
  });

  app.get('/login', function(req, res) {
      res.render('login', { user : req.user });
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/pets');
  });

  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

  app.get('/pets', function(req, res) {
    if (req.user) {
      Pet.find({ owner: req.user.username }, function (err, pets) {
        if (err) return console.error(err);
        if (!pets) {
          res.render('add-pet', { user : req.user });
        } else {
          res.render('pets', { user : req.user, pets : pets });
        }
      });
    } else {
      res.redirect('/login');
    }
  });

  app.post('/add-pet', function(req, res) {
    var url_name = req.body.name.toLowerCase();
    var pet = new Pet({
      name : req.body.name,
      owner : req.body.owner,
      url_name : url_name,
      birthday : Date.now(),
      fed_at : Date.now(),
      slept_at : Date.now(),
      played_at : Date.now()
  });
    pet.save(function(err, pet) {
      if (err) return console.error(err);
    });

    res.redirect('/pets');
  });

  app.get('/add-pet', function(req, res) {
    if (req.user) {
      res.render('add-pet', { user : req.user });
    } else {
      res.redirect('/login');
    }
  });

  app.get('/pet/*', function(req, res) {
    if (req.user) {
      var action = req.body.action;
      Pet.findOne({
        owner: req.user.username,
        url_name: req.params[0]
      }, function(err, pet) {
        if (err) return console.error(err);
        if (req.param('json')) {
          res.json({pet : pet});
        } else {
          res.render('pet', { user : req.user, pet : pet });
        }
      });
    }
  });

  app.post('/pet/*', function(req, res) {
    if (req.user) {
      if ( req.body.action == 'feed' ) {
        var conditions = {
          owner : req.user.username,
          url_name : req.params[0]
        },
        update = {
          fed_at : Date.now()
        }
        Pet.update(conditions, update, function(){
          Pet.findOne({
            owner: req.user.username,
            url_name: req.params[0]
          }, function(err, pet) {
            if (err) return console.error(err);

            res.json({pet : pet});
            /*if (req.param('json')) {
            } else {
              res.render('pet', { user : req.user, pet : pet });
            }*/
          });
        });

      }
    }
  });

  app.get('/pet/:url_name(*)/play', function(req, res) {
    if (req.user) {
      Pet.findOne({
        owner: req.user.username,
        url_name: req.params.url_name
      }, function(err, pet) {
        if (err) return console.error(err);

        res.render('play', { user : req.user, pet : pet, url_name : url_name });
      });
    }
  });
};
