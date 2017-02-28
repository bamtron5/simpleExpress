import * as express from 'express';
import {hasName} from '../lib/isLoggedIn';
let router = express.Router();

router.post('/rabbit', hasName, (req, res, next) => {
  // next({message:'A fake error'});
  return res.json(req.body);
});

router.put('/rabbit/:id', (req, res, next) => {
  // next({message:'A fake error'});
  // console.log(req.query);
  console.log(req.params);
  return res.json(req.body);
});

export = router;
