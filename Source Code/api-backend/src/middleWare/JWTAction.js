import jwt from "jsonwebtoken";
require("dotenv").config();

const nonSecurePath = ["/admin/login", "/admin/register-user"];
const createJWT = (data) => {
  let token = null;
  try {
    token = jwt.sign(data, process.env.JWT_SECRET_KEY);
  } catch (error) {
    console.log("Error createJWT: ", error);
  }
  return token;
};

const verifyToken = (token) => {
  let verify = null;
  try {
    // verify a token symmetric
    verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    console.log("Error verifyToken: ", error);
  }
  return verify;
};

const checkUserJWT = (req, res, next) => {
  if (nonSecurePath.includes(req.path)) return next();

  let cookies = req.cookies;
  if (cookies && cookies.access_token) {
    let decode = verifyToken(cookies.access_token);
    if (decode) {
      // set user for next function
      req.user = decode;
      next();
    }
  }
  return res.status(401).json({
    result: false,
    message: "Unauthoried",
  });
};

const checkPermission = async (req, res, next) => {
  if (nonSecurePath.includes(req.path)) return next();

  if (req.user) {
    let email = req.user.email;
    let userName = req.user.userName;
    let currentURL = req.path;
    let roles = await getRoles(email, userName);
    if (roles.result) {
      let access = roles.some((item) => item.url === currentURL);
      if (access) next();
    }
    return res.status(403).json({
      result: false,
      message: "you don't have permission to access!",
    });
  }
  return res.status(401).json({
    result: false,
    message: "Unauthoried",
  });
};

module.exports = {
  createJWT,
  checkUserJWT,
  checkPermission,
};
