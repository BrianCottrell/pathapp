var Highscore = require('../app/models/highscore');

module.exports = function(app, passport) {
    /*HOME*/
	//Navigate to the homepage
    app.get('/', function(req, res) {
        Highscore.find().exec(function(error, data){
            console.log(data);
            //Display the index as the homepage
            res.render('index.ejs', {
                loggedIn: req.isAuthenticated(),
                message: 'hello',
                scores: data
            });
        });
    });
    /*LOGIN*/
    //Navigate to the login page
    app.get('/login', function(req, res) {
        //Display the login page
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });
    //Gets called when a user logs in
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile',
        failureRedirect : '/login',
        failureFlash : true
    }));
    /*SIGNUP*/
    //Gets Called when a user signs up
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect : '/signup',
        failureFlash : true
    }));
    //Navigate to the signup page
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });
    /*PROFILE*/
    //Navigate to the user profile page
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
    /*LOGOUT*/
    //Allow a uer to log out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    /*SUBMIT PATH*/
    app.post('/highscore', function(req, res){
        var score = new Highscore();
        score.path = req.body.path;
        score.save(function(error){
            if(error) console.log(error);
            res.status(201).json({message: 'planet seuccessfully created'});
        });
        res.redirect('/');
    });
};

//Route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    //If user is authenticated in the session
    if (req.isAuthenticated())
        return next();
    //If they aren't redirect them to the home page
    res.redirect('/');
}
