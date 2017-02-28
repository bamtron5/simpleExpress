import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as ejs from 'ejs';
import * as path from 'path';
import * as morgan from 'morgan';
import * as http from 'http';

// API ROUTES
import * as ping from './api/ping';
import * as rabbit from './api/rabbit';


let app = express();

app.use(morgan('dev'));

app.use(helmet());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.render('index');
});

// BOOTSTRAP YOUR APIS
app.use('/api', ping);
app.use('/api', rabbit);

let server = http.createServer(app);

server.listen(3000);

server.on('error', onError);
server.on('listening', onListen);

function onError (error) {
  throw error;
}

function onListen () {
  console.log('Listening on port: 3000');
}
