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

module.exports = { findInfoAccount, updateAccountService };
