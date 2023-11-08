require("dotenv").config();
import jwt from "jsonwebtoken";
import { getRoles } from "../service/AuthService";

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

// check user is logedin
const checkUserJWT = (req, res, next) => {
  if (nonSecurePath.includes(req.path)) return next();

  try {
    let cookies = req.cookies;
    if (cookies && cookies.access_token) {
      let decode = verifyToken(cookies.access_token);
      if (decode) {
        // set user for next function
        req.user = decode;
        next();
      }
    } else {
      return res.status(401).json({
        result: false,
        message: "Unauthoried",
      });
    }
  } catch (error) {
    console.log("Error checkUserJWT: ", error);
    return res.status(401).json({
      result: false,
      message: "Unauthoried",
    });
  }
};

// check permission of user
const checkPermission = async (req, res, next) => {
  if (nonSecurePath.includes(req.path)) return next();

  try {
    if (req.user) {
      let email = req.user.email;
      let userName = req.user.userName;
      let currentURL = req.path;
      let roles = await getRoles(email, userName);

      if (roles.result) {
        let access = roles.roles.some((item) => {
          return item.description == currentURL;
        });
        if (access) return next();
      }
    }
    return res.status(403).json({
      result: false,
      message: "you don't have permission to access!",
    });
  } catch (error) {
    console.log("Error checkPermission: ", error);
    return res.status(403).json({
      result: false,
      message: "you don't have permission to access!",
    });
  }
};

module.exports = {
  createJWT,
  checkUserJWT,
  checkPermission,
};