import db from "../models";

const findAllUsers = async () => {
  try {
    let data = [];
    data = await db.User.findAll({
      attributes: ["id", "fullName", "email", "phone", "userName"],
      include: {
        attributes: ["id", "groupName"],
        model: db.Group,
      },
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
const findAllGroups = async () => {
  try {
    let data = [];
    data = await db.Group.findAll({
      attributes: ["id", "groupName"],
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
const findAllRoles = async () => {
  try {
    let data = [];
    data = await db.Role.findAll({
      attributes: ["id", "roleName", "description"],
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
const createGroupService = async (rawData) => {
  try {
    let checkGroup = await checkGroupName(rawData.groupName);
    if (checkGroup) {
      return {
        result: false,
        message: "Group name is already exits!",
      };
    }
    let data = [];
    data = await db.Group.create({
      groupName: rawData.groupName,
      description: rawData.description,
    });
    if (data.id) {
      return {
        result: true,
        message: `Create group success with id: ${data.id}`,
      };
    } else {
      return {
        result: false,
        message: "Save group faild.",
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
// check group name is exits
const checkGroupName = async (gName) => {
  let group = await db.Group.findOne({
    where: { groupName: gName },
  });
  if (group) {
    // if has one return true
    return true;
  }
  return false;
};
const updateUserService = async (rawData) => {
  try {
    let data = [];
    data = await db.User.update(
      {
        groupId: rawData.groupId,
      },
      {
        where: {
          id: rawData.id,
        },
      }
    );
    if (data) {
      return {
        result: true,
        message: `Update user successfully.`,
      };
    } else {
      return {
        result: false,
        message: "Update user faild.",
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
const findGroupRole = async (id) => {
  try {
    let data = [];
    data = await db.Group.findOne({
      attributes: ["id", "groupName", "description"],
      include: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
        model: db.Role,
      },
      where: { id: id },
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
    console.log("error group role service", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};

module.exports = {
  findAllUsers,
  findAllGroups,
  findAllRoles,
  createGroupService,
  updateUserService,
  findGroupRole,
};
