import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoUser, updateInfoUser } from "../../service/userService";
import {
  closeModalAction,
  openModalAction,
} from "../../redux/modal/modalAction";
import { Dispatch } from "redux";

type InfoAccount = {
  email: string;
  fullName: string;
  phone: string;
  userName: string;
  dateOfBirth: string;
  note: string;
};
const InfoComponent = () => {
  const { userName } = useSelector((state: state) => state.authState.user);
  const dispatch: Dispatch<any> = useDispatch();
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [emailTxt, setEmailTxt] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState<string>();
  const [monthOfBirth, setMonthOfBirth] = useState<string>();
  const [yearOfBirth, setYearOfBirth] = useState<string>();
  const [dateOption, setDateOption] = useState<number[]>();
  const [monthOption, setMonthOption] = useState<number[]>();
  const [yearOption, setYearOption] = useState<number[]>();
  const [dataOrigin, setDataOrigin] = useState<InfoAccount>();
  const [showSaveBtn, setShowSaveBtn] = useState(true);

  useEffect(() => {
    // generate date, month, year options
    const genYearOptions = () => {
      const datetime = new Date().getFullYear();
      const years = Array.from(new Array(50), (val, index) => datetime - index);
      const months = Array.from(new Array(12), (val, index) => 12 - index);
      const dates = Array.from(new Array(31), (val, index) => 31 - index);
      setYearOption(years);
      setMonthOption(months);
      setDateOption(dates);
    };

    getUserInfo();
    genYearOptions();
  }, []);

  const getUserInfo = async () => {
    if (userName) {
      let { data } = await getInfoUser(userName);
      if (data && data.result) {
        setShowSaveBtn(true);
        console.log("chech data user ", data.data);
        setDataOrigin(data.data);
        setEmailTxt(data.data.email);
        setFullName(data.data.fullName);
        setPhone(data.data.phone);
        setGender(data.data.note);
        if (data.data.dateOfBirth) {
          const [day, month, year] = data.data.dateOfBirth.split("/");
          setDayOfBirth(day);
          setMonthOfBirth(month);
          setYearOfBirth(year);
        } else {
          setDayOfBirth("");
          setMonthOfBirth("");
          setYearOfBirth("");
        }
      } else {
        dispatch(openModalAction(data.message, closeMsg));
      }
    }
  };
  const closeMsg = () => {
    // close the modal
    dispatch(closeModalAction());
  };
  const changeFullName = (value: string) => {
    setFullName(value);
    setShowSaveBtn(value === dataOrigin?.fullName);
  };
  const changeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
    setShowSaveBtn(e.target.value === dataOrigin?.note);
  };
  const changePhone = (value: string) => {
    setPhone(value);
    setShowSaveBtn(value === dataOrigin?.phone);
  };
  const changeEmail = (value: string) => {
    setEmailTxt(value);
    setShowSaveBtn(value === dataOrigin?.email);
  };
  const changeDate = (value: string) => {
    setDayOfBirth(value);
    if (dataOrigin) {
      const arrayDate = dataOrigin.dateOfBirth.split("/");
      setShowSaveBtn(value === arrayDate[0]);
    }
  };
  const changeMonth = (value: string) => {
    setMonthOfBirth(value);
    if (dataOrigin) {
      const arrayDate = dataOrigin.dateOfBirth.split("/");
      setShowSaveBtn(value === arrayDate[1]);
    }
  };
  const changeYear = (value: string) => {
    setYearOfBirth(value);
    if (dataOrigin) {
      const arrayDate = dataOrigin.dateOfBirth.split("/");
      setShowSaveBtn(value === arrayDate[2]);
    }
  };
  const handleUpdateInfo = async () => {
    let dataSend = {
      email: emailTxt,
      fullName: fullName,
      phone: phone,
      userName: dataOrigin?.userName,
      dateOfBirth: dayOfBirth + "/" + monthOfBirth + "/" + yearOfBirth,
      note: gender,
    };
    console.log("check data ", dataSend);
    let { data } = await updateInfoUser(dataSend);
    if (data && data.result) {
      getUserInfo();
      dispatch(openModalAction(data.message, closeMsg));
    } else {
      dispatch(openModalAction(data.message, closeMsg));
    }
  };
  return (
    <>
      <h4>Thông tin tài khoản</h4>
      <div className="d-flex flex-row">
        <p className="mb-2 col-sm-4 col-5 col-lg-2 col-md-3 fw-bold">Họ tên:</p>
        <div className="col-lg-5 col-7">
          <input
            type="text"
            className="form-control mb-2"
            value={fullName}
            onChange={(e) => changeFullName(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex flex-row">
        <p className="mb-2 col-sm-4 col-5 col-lg-2 col-md-3 fw-bold">
          Giới tính:
        </p>
        <div onChange={changeGender}>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="male"
              checked={gender === "male"}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Nam
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="female"
              checked={gender === "female"}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Nữ
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="orther"
              checked={gender === "orther"}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Khác
            </label>
          </div>
        </div>
      </div>
      {/* phone number */}
      <div className="d-flex flex-row">
        <p className="mb-2 col-sm-4 col-5 col-lg-2 col-md-3 fw-bold">
          Số điện thoại:
        </p>
        <div className="col-lg-5 col-7">
          <input
            type="text"
            className="form-control mb-2 col-5"
            value={phone}
            onChange={(e) => changePhone(e.target.value)}
          />
        </div>
      </div>
      {/* email */}
      <div className="d-flex flex-row">
        <p className="mb-2 col-sm-4 col-5 col-lg-2 col-md-3 fw-bold">Email:</p>
        <div className="col-lg-5 col-7">
          <input
            type="text"
            className="form-control mb-2 col-5"
            value={emailTxt}
            onChange={(e) => changeEmail(e.target.value)}
          />
        </div>
      </div>
      {/*  date of birth */}
      <div className="d-flex flex-row">
        <p className="mb-2 col-sm-4 col-5 col-lg-2 col-md-3 fw-bold">
          Ngày sinh:
        </p>
        <div className="col-lg-5 col-7 row m-0">
          <select
            className="form-select col"
            aria-label="Default select example"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              changeDate(e.target.value)
            }
            value={dayOfBirth}
            defaultValue=""
          >
            <option value="">Ngày</option>
            {dateOption &&
              dateOption.map((value) => (
                <option value={value} key={`op-date${value}`}>
                  {value}
                </option>
              ))}
          </select>

          {/* month */}
          <select
            className="form-select ms-3 col"
            aria-label="Default select example"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              changeMonth(e.target.value)
            }
            value={monthOfBirth}
            defaultValue=""
          >
            <option value="">Tháng</option>
            {monthOption &&
              monthOption.map((value) => (
                <option value={value} key={`op-month${value}`}>
                  {value}
                </option>
              ))}
          </select>

          {/* year */}
          <select
            className="form-select ms-3 col"
            aria-label="Default select example"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              changeYear(e.target.value)
            }
            value={yearOfBirth}
            defaultValue=""
          >
            <option value="">Năm</option>
            {yearOption &&
              yearOption.map((value) => (
                <option value={value} key={`op-year${value}`}>
                  {value}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="mt-3">
        <button
          className="btn btn-warning"
          disabled={showSaveBtn}
          onClick={handleUpdateInfo}
        >
          Lưu thông tin
        </button>
      </div>
    </>
  );
};

export default InfoComponent;
