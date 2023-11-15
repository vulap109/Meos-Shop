import React, { useEffect, useState } from "react";
import {
  fetchAllGroups,
  fetchAllRoles,
  getGroupRole,
} from "../../service/userService";

const GroupRole = () => {
  const [listGroup, setListGroup] = useState<listGroup[] | null>();
  const [listRole, setListRole] = useState<role[] | null>();
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    fetchListGroup();
    fetchListRole();
  }, []);
  const fetchListGroup = async () => {
    let { data } = await fetchAllGroups();
    if (data && data.result) {
      setListGroup(data.data);
    } else {
      setListGroup(null);
    }
  };
  const fetchListRole = async () => {
    let { data } = await fetchAllRoles();
    if (data && data.result) {
      setListRole(data.data);
    } else {
      setListRole(null);
    }
  };
  const handleSelectedGroup = async (id: string) => {
    setSelectedGroup(id);
    let { data } = await getGroupRole(id);
    if (data && data.result) {
      console.log("check get group with role ", data.data);
    }
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
              onChange={(e) => handleSelectedGroup(e.target.value)}
              value={selectedGroup}
              defaultValue={""}
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
          {listRole &&
            listRole.map((role) => (
              <div className="form-check" key={`role${role.id}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={`roleLabel${role.id}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`roleLabel${role.id}`}
                >
                  {role.roleName + "  ( " + role.description + " )"}
                </label>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default GroupRole;
