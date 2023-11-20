import accountService from "../service/AccountService";

const getInfoAccount = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(200).json({
        result: false,
        message: "Email is empty!",
      });
    }
    let userInfo = {};
    userInfo = await accountService.findInfoAccount(req.body.email);
    if (userInfo) {
      return res.status(200).json(userInfo);
    }
    return res.status(200).json({
      result: false,
      message: "Some error occupied with server!",
    });
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};

module.exports = { getInfoAccount };
