import homeService from "../service/HomeService";

const testAPI = (req, res) => {
  return res.status(200).json({
    result: true,
    data: "data test",
  });
};

const dashboardAdmin = async (req, res) => {
  try {
    let dashboardData = {};
    dashboardData = await homeService.getDashboardData();
    if (dashboardData) {
      return res.status(200).json(dashboardData);
    } else {
      return res.status(200).json({
        result: false,
        message: "Some error occupied with server!",
      });
    }
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};

module.exports = {
  testAPI,
  dashboardAdmin,
};
