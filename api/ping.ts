import * as express from 'express';
import {isLoggedIn} from '../lib/isLoggedIn';
let router = express.Router();

router.get('/ping', isLoggedIn, (req, res, next) => {
  // next({message:'A fake error'});
  console.log(req.method);
  return res.json({message: 'pong'});
});

export = router;
