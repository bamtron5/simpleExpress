export const isLoggedIn = function isLoggedIn (req, res, next) {
  return {} ? next() : res.status(401).json({message: 'You are not authorized'});
};

export const hasName = function hasName (req, res, next) {
  return req.body && req.body['name'] ? next() : res.status(422).json({message: 'Please include a name field.'});
};
