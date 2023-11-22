import db from "../models";

const findInfoAccount = async (userName) => {
  try {
    let data = [];
    data = await db.User.findOne({
      attributes: [
        "fullName",
        "email",
        "phone",
        "userName",
        "dateOfBirth",
        "note",
      ],
      where: { userName: userName },
    });
    if (data) {
      return {
        result: true,
        data: data,
      };
    } else {
      return {
        result: false,
        message: "No data to return.",
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
const updateAccountService = async (rawData) => {
  try {
    let data = [];
    data = await db.User.update(
      {
        dateOfBirth: rawData.dateOfBirth,
        email: rawData.email,
        fullName: rawData.fullName,
        description: rawData.description,
        phone: rawData.phone,
        note: rawData.note,
      },
      {
        where: {
          userName: rawData.userName,
        },
      }
    );
    if (data) {
      return {
        result: true,
        message: `Update Account successfully.`,
      };
    } else {
      return {
        result: false,
        message: "Update Account faild.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service update account", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};
const createAddressService = async (rawData) => {
  try {
    let data = [];
    let userId = await getUserId(rawData.userName);
    data = await db.Address.create({
      fullName: rawData.fullName,
      phone: rawData.phone,
      detailAddress: rawData.detailAddress,
      address: rawData.address,
      isDefault: rawData.isDefault,
      userId,
    });
    if (data) {
      return {
        result: true,
        message: `Create Address successfully.`,
      };
    } else {
      return {
        result: false,
        message: "Create Address faild.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service Create Address", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};
const getUserId = async (userName) => {
  let user = await db.User.findOne({
    where: { userName: userName },
  });
  if (user) {
    // if has one return true
    return user.id;
  }
  return null;
};
const getAllAddress = async (userName) => {
  try {
    let data = [];
    let userId = await getUserId(userName);
    if (!userId) {
      return {
        result: false,
        message: "User is not exits.",
      };
    }
    data = await db.Address.findAll({
      attributes: [
        "fullName",
        "address",
        "phone",
        "detailAddress",
        "isDefault",
      ],
      where: { userId: userId },
    });
    if (data) {
      return {
        result: true,
        data: data,
      };
    } else {
      return {
        result: false,
        message: "No data to return.",
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

module.exports = {
  findInfoAccount,
  updateAccountService,
  createAddressService,
  getAllAddress,
};
