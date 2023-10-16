import React, { useState } from "react";

const InfoComponent = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState<string>();
  const [monthOfBirth, setMonthOfBirth] = useState<string>();
  const [yearOfBirth, setYearOfBirth] = useState<string>();

  const setlectedGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
    console.log("gender: ", e.target.value);
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
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex flex-row">
        <p className="mb-2 col-sm-4 col-5 col-lg-2 col-md-3 fw-bold">
          Giới tính:
        </p>
        <div onChange={setlectedGender}>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="male"
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
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              setDayOfBirth(e.target.value)
            }
            value={dayOfBirth}
          >
            <option selected>Ngày</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          {/* month */}
          <select
            className="form-select ms-3 col"
            aria-label="Default select example"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setMonthOfBirth(e.target.value)
            }
            value={monthOfBirth}
          >
            <option selected>Tháng</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          {/* year */}
          <select
            className="form-select ms-3 col"
            aria-label="Default select example"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setYearOfBirth(e.target.value)
            }
            value={yearOfBirth}
          >
            <option selected>Năm</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default InfoComponent;
