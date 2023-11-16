import React, { useEffect, useState } from "react";
import {
  fetchAllGroups,
  fetchAllRoles,
  getGroupRole,
  saveGroupRole,
} from "../../service/userService";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import {
  closeModalAction,
  openModalAction,
} from "../../redux/modal/modalAction";

const GroupRole = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const [listGroup, setListGroup] = useState<listGroup[] | null>();
  const [listRole, setListRole] = useState<role[] | null>();
  const [originRole, setOriginRole] = useState<role[]>();
  const [selectedGroup, setSelectedGroup] = useState("");
  const [isShowBtnSave, setIsShowBtnSave] = useState(false);

  useEffect(() => {
    fetchListGroup();
    fetchListRole();
  }, []);
  // get list group from DB
  const fetchListGroup = async () => {
    let { data } = await fetchAllGroups();
    if (data && data.result) {
      setListGroup(data.data);
    } else {
      setListGroup(null);
    }
  };
  // get list role from DB
  const fetchListRole = async () => {
    let { data } = await fetchAllRoles();
    if (data && data.result) {
      setListRole(data.data);
    } else {
      setListRole(null);
    }
  };
  // select group then show role has assign
  const handleSelectedGroup = async (id: string) => {
    setSelectedGroup(id);
    setIsShowBtnSave(false);
    if (!id) {
      return;
    }
    let { data } = await getGroupRole(id);
    if (data && data.result) {
      let groupRole = [...data.data?.Roles];
      configListRole(groupRole);
    } else {
      console.log("handle get role selected error: ", data.message);
      dispatch(openModalAction(data.message, closeMsg));
    }
  };
  // show role by group
  const configListRole = (groupRoles: role[]) => {
    let allRoles = JSON.parse(JSON.stringify(listRole));
    if (allRoles && allRoles.length > 0) {
      allRoles.map((el: role) => {
        el.active = false;
        if (groupRoles && groupRoles.length > 0) {
          el.active = groupRoles.some((item) => item.id === el.id);
        }
        return el;
      });
      setListRole(allRoles);
      setOriginRole(JSON.parse(JSON.stringify(allRoles)));
    }
  };
  // process uncheck or check role
  const handleChangeRole = (value: string) => {
    let allRoles = JSON.parse(JSON.stringify(listRole));
    let orgRole = JSON.parse(JSON.stringify(originRole));
    let foundIndex = allRoles.findIndex((item: role) => item.id === +value);
    let changeFlg = false;

    // set active status
    if (foundIndex > -1) {
      allRoles[foundIndex].active = !allRoles[foundIndex].active;
    }

    // check role is update or not
    allRoles.forEach((r: role) => {
      let change = orgRole.find((org: role) => org.id === r.id);
      if (!(r.active === change.active)) changeFlg = true;
    });

    setIsShowBtnSave(changeFlg);
    setListRole(allRoles);
  };
  // save role assign to group
  const handleSave = async () => {
    let allRoles = JSON.parse(JSON.stringify(listRole));
    let groupRoles = allRoles.filter((item: role) => item.active === true);
    let finalData = groupRoles.map((gr: role) => {
      return {
        groupId: +selectedGroup,
        roleId: gr.id,
      };
    });
    let dataSend = {
      groupId: +selectedGroup,
      groupRoles: finalData,
    };

    let { data } = await saveGroupRole(dataSend);
    if (data && data.result) {
      handleSelectedGroup(selectedGroup);
      dispatch(openModalAction(data.message, closeMsg));
    } else {
      dispatch(openModalAction(data.message, closeMsg));
    }
  };
  // close modal message
  const closeMsg = () => {
    dispatch(closeModalAction());
  };

  return (
    <>
      <div className="d-flex flex-column text-dark">
        <h3 className="text-dark">Group role</h3>
        <div className="mb-3">
          <label htmlFor="groupName" className="form-label">
            Select group: <span className="text-danger">*</span>
          </label>
          <div className="col-sm-6 mb-sm-0 mb-2">
            <select
              className="form-select text-dark col-sm-6"
              aria-label="Default select example"
              value={selectedGroup}
              onChange={(e) => handleSelectedGroup(e.target.value)}
              defaultValue=""
            >
              <option value="">Select group</option>
              {listGroup &&
                listGroup.map((gn) => (
                  <option value={gn.id} key={`op${gn.id}`}>
                    {gn.groupName}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <hr />
        <div>
          {selectedGroup &&
            listRole &&
            listRole.map((role: role) => (
              <div className="form-check mt-2" key={`role${role.id}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={role.id}
                  id={`role-label${role.id}`}
                  checked={role.active}
                  onChange={(e) => handleChangeRole(e.target.value)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`role-label${role.id}`}
                >
                  {role.roleName + "  ( " + role.description + " )"}
                </label>
              </div>
            ))}
        </div>
        {isShowBtnSave && (
          <div className="mt-3">
            <button className="btn btn-info" onClick={handleSave}>
              Save
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GroupRole;
