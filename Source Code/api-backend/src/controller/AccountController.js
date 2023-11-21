import accountService from "../service/AccountService";

const getInfoAccount = async (req, res) => {
  try {
    if (!req.body.userName) {
      return res.status(200).json({
        result: false,
        message: "User Name is empty!",
      });
    }
    let userInfo = {};
    userInfo = await accountService.findInfoAccount(req.body.userName);
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
const updateInfoAccount = async (req, res) => {
  try {
    if (!req.body.userName) {
      return res.status(200).json({
        result: false,
        message: "User Name is empty!",
      });
    }
    let update = await accountService.updateAccountService(req.body);
    if (update) {
      return res.status(200).json(update);
    }
    return res.status(200).json({
      result: false,
      message: "Can not save category without name and price.",
    });
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};

module.exports = { getInfoAccount, updateInfoAccount };
