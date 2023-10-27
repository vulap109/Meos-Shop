import db from "../models";

const getDashboardData = async () => {
  try {
    let data = [
      {
        todayOrder: "10",
        monthOrder: "10",
        yearOrder: "10",
      },
    ];
    let test = await db.User.findAll();
    console.log("test api: ", test);
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
  getDashboardData,
};
