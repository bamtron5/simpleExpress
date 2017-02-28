import * as express from 'express';
import isLoggedIn from '../lib/isLoggedIn';
let router = express.Router();

router.get('/ping', isLoggedIn, (req, res, next) => {
  // next({message:'A fake error'});
  return res.json({message: 'pong'});
});

export = router;
