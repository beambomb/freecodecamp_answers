export const inputCleaner = (req, res, next) => {
    if (req.body) {
        req.body.username = req.body.username ? req.body.username.toLowerCase() : req.body.username
        req.body.comment = req.body.comment ? req.body.comment.replace(/<[^>]*>/g, '') : req.body.comment;
    }
    next()
}

export const inputValidator = (req, res, next) => {
  if (req.body?.username && req.body.username.length >= 3) {
    return next();
  }

  res.redirect("/form?error=Username must be at least 3 characters.");
};