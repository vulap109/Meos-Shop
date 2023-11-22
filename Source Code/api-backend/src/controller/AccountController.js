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
const createAddress = async (req, res) => {
  try {
    if (
      !req.body.fullName ||
      !req.body.phone ||
      !req.body.detailAddress ||
      !req.body.address ||
      !req.body.userName
    ) {
      return res.status(200).json({
        result: false,
        message: "Missing an information to save!",
      });
    }
    let save = await accountService.createAddressService(req.body);
    if (save) {
      return res.status(200).json(save);
    }
    return res.status(200).json({
      result: false,
      message: "Can not save product without name and price.",
    });
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};
const getAddress = async (req, res) => {
  try {
    if (!req.params.username) {
      return res.status(200).json({
        result: false,
        message: "User Name is empty!",
      });
    }
    let addr = {};
    addr = await accountService.getAllAddress(req.params.username);
    if (addr) {
      return res.status(200).json(addr);
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

module.exports = {
  getInfoAccount,
  updateInfoAccount,
  createAddress,
  getAddress,
};
