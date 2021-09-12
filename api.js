var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var users = [{ id: '1', name: 'Ahsen Göçer', tc: '12345678901', birthday: '01.01.2000', isDisabled: 'yes', disable: 'blind', phone: '5000000000', province: 'İstanbul', email: 'ahsengocer@example.com', password: 'saf2-d12f-12fs-dsaf', closePerson: 'Ali Göçer', closePersonPhone: '5000000001' },
{ id: '2', name: 'Mert Doğru', tc: '12345678902', birthday: '01.01.2001', isDisabled: 'no', disable: '', phone: '5000000002', province: 'Erzincan', email: 'mertdogru@example.com', password: 'sajl-98ng-g84d-s651', closePerson: 'Ali Gökmen', closePersonPhone: '5000000003' }];

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(1923, function () {
    console.log("Port dinleniyor 1923...");
});

app.get('/api/users/', function (request, response) {
    response.send(users);
});

app.post('/api/register', function (request, response) {
    var user = request.body;
    console.log(user);
    for (var index = 0; index < users.length; index++) {
        if (users[index].tc === city.tc) {
            response.status(500).send({ error: "Bu e-postaya sahip bir hesap ." });
            return;
        }
    }

    users.push(city);
    response.send(users);
});

app.post('/api/users/login', function(request, response) {
	 const{email, password} = request.body;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
			} else {
				response.send('E-posta veya şifre alanı boş bırakılamaz!');
			}			
			response.end();
		});
	} else {
		response.send('E-posta ve şifrenizi boş bırakmayınız!');
		response.end();
	}
});

app.put('/api/users/:tc', function (request, response) {
    var city = request.body;
    console.log(city);
    for (var index = 0; index < users.length; index++) {
        if (users[index].tc === request.params.tc) {
            users[index].country = city.country;
            response.send(users);
            return;
        }
    }

    response.status(500).send({ error: 'Kullanıcı bulunamadı...' });
});