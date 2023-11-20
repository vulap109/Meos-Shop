import db from "../models";

const findInfoAccount = async (email) => {
  try {
    let data = [];
    data = await db.User.findOne({
      attributes: ["fullName", "email", "phone", "userName", "dateOfBirth"],
      where: { email: email },
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

module.exports = { findInfoAccount };
