'use strict';

var path = process.cwd();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
// var UploadHandler = require(path + '/app/controllers/uploadHandler.server.js');


// var uploadHandler = new UploadHandler();

module.exports = function (app) {

	// function isLoggedIn (req, res, next) {
	// 	if (req.isAuthenticated()) {
	// 		return next();
	// 	} else {
	// 		res.redirect('/login');
	// 	}
	// }


	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/get-file-size')
		.post(upload.single('avatar'), function (req, res, next) {
			var returnData = {};
			if (req.url === '/favicon.ico') {
			    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
			    res.end();
			    console.log('favicon requested');
			    return;
			}
			returnData = {size: req.file.size};
			res.json(returnData);
		  // req.file is the `avatar` file 
		  // req.body will hold the text fields, if there were any 
		});

	// app.route('/login')
	// 	.get(function (req, res) {
	// 		res.sendFile(path + '/public/login.html');
	// 	});

	// app.route('/logout')
	// 	.get(function (req, res) {
	// 		req.logout();
	// 		res.redirect('/login');
	// 	});

	// app.route('/profile')
	// 	.get(isLoggedIn, function (req, res) {
	// 		res.sendFile(path + '/public/profile.html');
	// 	});

	// app.route('/api/:id')
	// 	.get(isLoggedIn, function (req, res) {
	// 		res.json(req.user.github);
	// 	});

	// app.route('/auth/github')
	// 	.get(passport.authenticate('github'));

	// app.route('/auth/github/callback')
	// 	.get(passport.authenticate('github', {
	// 		successRedirect: '/',
	// 		failureRedirect: '/login'
	// 	}));

	// app.route('/api/:id/clicks')
	// 	.get(isLoggedIn, clickHandler.getClicks)
	// 	.post(isLoggedIn, clickHandler.addClick)
	// 	.delete(isLoggedIn, clickHandler.resetClicks);
};
