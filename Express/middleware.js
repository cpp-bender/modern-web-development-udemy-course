const control = (req, res, next) => {
  const access = false;
  if (!access) {
    res.status(401).json({
      success: false,
      mess: "You are unauthorized",
    });
  }
  console.log("Middleware control");
  next();
};

const def = (req, res, next) => {
  console.log("default middleware");
  next();
};

module.exports = {
  control,
  def
};
