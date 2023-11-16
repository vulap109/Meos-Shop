import userService from "../service/UserService";

const getAllUsers = async (req, res) => {
  try {
    let userList = {};
    userList = await userService.findAllUsers();
    if (userList) {
      return res.status(200).json(userList);
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
const getAllGroups = async (req, res) => {
  try {
    let groupList = {};
    groupList = await userService.findAllGroups();
    if (groupList) {
      return res.status(200).json(groupList);
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
const getAllRoles = async (req, res) => {
  try {
    let roleList = {};
    roleList = await userService.findAllRoles();
    if (roleList) {
      return res.status(200).json(roleList);
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
const createGroup = async (req, res) => {
  try {
    if (req.body.groupName && req.body.description) {
      let save = await userService.createGroupService(req.body);
      return res.status(200).json(save);
    }
    return res.status(200).json({
      result: false,
      message: "Can not create group without group name and description.",
    });
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};
const updateUser = async (req, res) => {
  try {
    if (req.body.id && req.body.groupId) {
      let save = await userService.updateUserService(req.body);
      return res.status(200).json(save);
    }
    return res.status(200).json({
      result: false,
      message: "Can not edit user without id and group id.",
    });
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};
const getGroupRole = async (req, res) => {
  try {
    if (req.params && req.params.groupid) {
      let listGR = {};
      listGR = await userService.findGroupRole(req.params.groupid);
      if (listGR) {
        return res.status(200).json(listGR);
      }
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
const saveGroupRole = async (req, res) => {
  try {
    let save = await userService.saveGroupRoleService(req.body);
    return res.status(200).json(save);
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};

module.exports = {
  getAllUsers,
  getAllGroups,
  getAllRoles,
  createGroup,
  updateUser,
  getGroupRole,
  saveGroupRole,
};
