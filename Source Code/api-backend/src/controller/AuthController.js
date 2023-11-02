import authService from "../service/AuthService";

const createUser = async (req, res) => {
  try {
    if (req.body.email && req.body.userName && req.body.password) {
      let save = await authService.createUserService(req.body);
      return res.status(200).json(save);
    }
    return res.status(200).json({
      result: false,
      message: "Can not sign up without information of user.",
    });
  } catch (error) {
    // return case error

    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};
// login user API
const loginAPI = async (req, res) => {
  try {
    // check data required
    if (!req.body.account || !req.body.password) {
      return res.status(200).json({
        result: false,
        message: "your email/phone or password is required!",
      });
    }

    // call service login
    let data = await authService.loginUser(req.body);
    res.cookie("access_token", data.access_token, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    });
    // return case success
    return res.status(200).json(data);
  } catch (error) {
    console.log(">>> error login API ", error);
    // return case error
    return res.status(500).json({
      result: false,
      message: "error form server",
    });
  }
};

module.exports = { createUser, loginAPI };
