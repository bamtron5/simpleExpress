import * as express from 'express';
import {hasName} from '../lib/isLoggedIn';
import {Rabbit} from '../models/Rabbit';
let router = express.Router();

router.get('/rabbit', (req, res, next) => {
  Rabbit.find()
    .then((result) => {
      return res.json(result);
    }).catch((e) => {
      next({message: 'Failed to fetch rabbits', status: 500, error: e});
    });
});

router.post('/rabbit', hasName, (req, res, next) => {
  Rabbit.create(req.body)
    .then((result) => {
      return res.json({message: `New rabbit created, ${result['_id']}`});
    }).catch((e) => {
      return res.status(500).json({message: `Rabbit creator failed`});
    });
});

router.put('/rabbit/:id', (req, res, next) => {
  // next({message:'A fake error'});
  // console.log(req.query);
  console.log(req.params);
  return res.json(req.body);
});

export = router;
