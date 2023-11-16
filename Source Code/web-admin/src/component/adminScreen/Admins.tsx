import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  closeModalAction,
  openModalAction,
} from "../../redux/modal/modalAction";
import {
  createGroup,
  fetchAllGroups,
  fetchAllUsers,
  updateUser,
} from "../../service/userService";

const Admins = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [listUser, setListUser] = useState<listUser[]>();
  const [listGroup, setListGroup] = useState<listGroup[] | null>();

  useEffect(() => {
    fetchListUser();
    fetchListGroup();
  }, []);
  // create group then save to DB
  const handleCreateGroup = async () => {
    if (groupName && description) {
      let dataGroup = {
        groupName,
        description,
      };
      let { data } = await createGroup(dataGroup);
      if (data && data.result) {
        dispatch(openModalAction("Create group successfully!", closeMsg));
      } else {
        dispatch(openModalAction(data.message, closeMsg));
      }
    } else {
      dispatch(
        openModalAction("Group name and description is required!", closeMsg)
      );
    }
  };
  const closeMsg = () => {
    dispatch(closeModalAction());
  };
  // get list user display to table
  const fetchListUser = async () => {
    let { data } = await fetchAllUsers();
    if (data && data.result) {
      let userTmp: listUser[] = [...data.data];
      userTmp.map((item: any) => {
        item.groupId = item.Group ? item.Group.id : null;
        item.changeFlg = false;
        return item;
      });
      console.log("userTmp ", userTmp);
      setListUser(userTmp);
    } else {
      dispatch(openModalAction(data.message, closeMsg));
    }
  };
  // get list group
  const fetchListGroup = async () => {
    let { data } = await fetchAllGroups();
    if (data && data.result) {
      setListGroup(data.data);
    } else {
      setListGroup(null);
    }
  };
  const handleDeleteUser = (id: number) => {};
  const handleSelectedGroup = (index: number, value: number) => {
    let lstUserTmp: listUser[] = Object.assign([], listUser);

    lstUserTmp[index].groupId = value;
    if (lstUserTmp[index].groupId !== lstUserTmp[index].Group?.id) {
      lstUserTmp[index].changeFlg = true;
    } else {
      lstUserTmp[index].changeFlg = false;
    }
    console.log("check select group ", lstUserTmp);
    setListUser(lstUserTmp);
  };
  const handleEditUser = async (id: number) => {
    const userTmp = listUser?.find((element) => element.id === id);
    const dataEdit = {
      id,
      groupId: userTmp?.groupId,
    };
    const { data } = await updateUser(dataEdit);
    console.log("check edit user ", data);
    if (data && data.result) {
      fetchListUser();
    } else {
      dispatch(openModalAction(data.message, closeMsg));
    }
  };

  return (
    <>
      <div className="d-flex flex-column text-dark">
        <h3 className="text-dark">Admins</h3>

        <div className="mb-3">
          <label htmlFor="groupName" className="form-label">
            Create group
          </label>
          <div className="row">
            <div className="col-sm-6 mb-sm-0 mb-2">
              <input
                type="text"
                className="form-control text-dark"
                id="groupName"
                placeholder="Group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
              <input
                type="text"
                className="form-control text-dark mt-3"
                id="description"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-sm-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCreateGroup}
              >
                <i className="fa-solid fa-plus"></i> Add group
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-dark fs-6">
                  User list
                </th>
              </tr>
            </thead>
            <tbody>
              {listUser &&
                listUser.map((ad, index) => (
                  <tr key={`admin${index}`}>
                    <td>{ad.id}</td>
                    <td>{ad.email}</td>
                    <td>{ad.userName}</td>
                    <td>
                      <select
                        className="form-select text-dark col-sm-6"
                        aria-label="Default select example"
                        onChange={(e) =>
                          handleSelectedGroup(index, +e.target.value)
                        }
                        value={ad.groupId}
                      >
                        {listGroup &&
                          listGroup.map((gn) => (
                            <option value={gn.id} key={`op${gn.id}`}>
                              {gn.groupName}
                            </option>
                          ))}
                      </select>
                    </td>
                    <td style={{ maxWidth: "162px" }}>
                      <button
                        type="button"
                        className="btn btn-danger me-3"
                        onClick={() => handleDeleteUser(ad.id)}
                      >
                        <i className="fa-solid fa-trash-can pe-2"></i>Delete
                      </button>
                      {ad.changeFlg && (
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => handleEditUser(ad.id)}
                        >
                          <i className="fa-solid fa-trash-can pe-2"></i>Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admins;
