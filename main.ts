import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as ejs from 'ejs';
import * as path from 'path';
import * as morgan from 'morgan';
import * as http from 'http';
import * as mongoose from 'mongoose';

// API ROUTES
import * as ping from './api/ping';
import * as rabbit from './api/rabbit';

// SEEDS
import RabbitSeed from './models/seeds/RabbitSeed';
import {Rabbit} from './models/Rabbit';

let app = express();

app.use(morgan('dev'));

app.use(helmet());

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('mongoose listening');
  Rabbit.count('*', (err, count) => {
    if (count === 0) {
      Rabbit.create(RabbitSeed);
    }
  });
});

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/app', express.static(path.join(__dirname, 'app')));

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
