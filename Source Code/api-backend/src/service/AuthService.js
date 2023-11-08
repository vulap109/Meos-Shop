import bcrypt from "bcryptjs";
import { Op } from "sequelize";
import db from "../models";
import { createJWT } from "../middleWare/JWTAction";

// encode password
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const createUserService = async (rawData) => {
  try {
    let chkEmail = await checkEmail(rawData.email);
    let chkUserName = await checkUserName(rawData.userName);
    // return to user if email is registed
    if (chkEmail) {
      return {
        result: false,
        message: "This email is already exist.",
      };
    }
    // return to user if username is registed
    if (chkUserName) {
      return {
        result: false,
        message: "This user name is already exist.",
      };
    }
    // check lenght of password
    if (rawData.password.length < 4) {
      return {
        result: false,
        message: "Password must have more than 3 letter",
      };
    }
    const hashpass = hashPassword(rawData.password);

    // ORM create user
    let data = [];
    data = await db.User.create({
      email: rawData.email,
      userName: rawData.userName,
      password: hashpass,
    });
    // check status of user after create
    if (data.id) {
      return {
        result: true,
        message: `Save user success with id: ${data.id}`,
      };
    } else {
      return {
        result: false,
        message: "Some error occupied with service. Can not create user.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};
// check email is exits on DB?
const checkEmail = async (email) => {
  let user = await db.User.findOne({
    where: { email: email },
  });
  if (user) {
    // if has one return true
    return true;
  }
  return false;
};
// check userName is exits on DB?
const checkUserName = async (userName) => {
  let user = await db.User.findOne({
    where: { userName: userName },
  });
  if (user) {
    // if has one return true
    return true;
  }
  return false;
};
// compare password with hash password
const checkHashPassword = (inputPass, hashPass) => {
  return bcrypt.compareSync(inputPass, hashPass);
};
// login user service
const loginUser = async (rawData) => {
  try {
    let user = await db.User.findOne({
      where: {
        [Op.or]: [{ email: rawData.account }, { userName: rawData.account }],
      },
    });

    if (user) {
      // check hash password
      const checkPassword = checkHashPassword(rawData.password, user.password);
      if (checkPassword) {
        let payload = { email: user.email, userName: user.userName };
        let token = createJWT(payload);
        // return when login success
        return {
          result: true,
          message: "Login success!",
          access_token: token,
          email: user.email,
          userName: user.userName,
        };
      }
      console.log(">>> check login user:", user.get({ plain: true }));
    }
    // default return falled
    return {
      result: false,
      message: "your Email/Username or Password is incorrect!",
    };
  } catch (error) {
    // return error
    console.log("error service login", error);
    return {
      result: false,
      message: "something wrong in service ...",
    };
  }
};

// get url user have permission to access
const getRoles = async (email, userName) => {
  try {
    let group = await db.User.findOne({
      include: {
        attribute: ["groupName"],
        model: db.Group,
      },
      where: {
        [Op.or]: [{ email: email }, { userName: userName }],
      },
    });
    let roles = await db.Group.findOne({
      include: {
        model: db.Role,
      },
      where: {
        id: group.groupId,
      },
    });

    if (roles) {
      return {
        result: true,
        roles: roles.Roles,
      };
    }
    // default return falled
    return {
      result: false,
      message: "your Email/Username or Password is incorrect!",
    };
  } catch (error) {
    // return error
    console.log("error service get roles ", error);
    return {
      result: false,
      message: "something wrong in service ...",
    };
  }
};

export { createUserService, loginUser, getRoles };
