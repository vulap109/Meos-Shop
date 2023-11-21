import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

interface citiesType {
  id: string;
  name: string;
  districts: districtsType;
}
interface districtsType {
  id: string;
  name: string;
  wards: wardsType;
}
interface wardsType {
  id: string;
  name: string;
}

const AddressComponent = () => {
  const { userName } = useSelector((state: state) => state.authState.user);

  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddres] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [citiesData, setCitiesData] = useState<citiesType[]>();
  const [districtsData, setDistrictsData] = useState<districtsType[]>();
  const [wardsData, setWardsData] = useState<wardsType[]>();
  const [defaultAddress, setDefaultAddress] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getAddressData = async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      );
      console.log(res);
      getCitiesData(res.data);
    };
    getAddressData();
  }, []);

  const getCitiesData = (data: any) => {
    let dataTmp: citiesType[] = [];
    data.map((c: any) =>
      dataTmp.push({
        id: c.Id,
        name: c.Name,
        districts: c.Districts,
      })
    );
    console.log("cities: ", dataTmp);
    setCitiesData(dataTmp);
  };
  const getDistrictsData = (data: any) => {
    let dataTmp: districtsType[] = [];
    if (data) {
      data.map((c: any) =>
        dataTmp.push({
          id: c.Id,
          name: c.Name,
          wards: c.Wards,
        })
      );
    }
    console.log("districts: ", dataTmp);
    setDistrictsData(dataTmp);
  };
  const getWardsData = (data: any) => {
    let dataTmp: wardsType[] = [];
    if (data) {
      data.map((c: any) =>
        dataTmp.push({
          id: c.Id,
          name: c.Name,
        })
      );
    }
    console.log("get wards: ", dataTmp);
    setWardsData(dataTmp);
  };

  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
    console.log("selected city: ", e.target.value);

    const result = citiesData?.filter((n) => n.name === e.target.value);
    if (result && result[0]) {
      console.log("selected city: ", result[0].districts);
      getDistrictsData(result[0].districts);
    } else {
      getDistrictsData(null);
      getWardsData(null);
    }
  };
  const handleSelectDistrict = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(e.target.value);
    console.log("selected district: ", e.target.value);

    const result = districtsData?.filter((n) => n.name === e.target.value);
    if (result && result[0]) {
      console.log("selected district: ", result[0].wards);
      getWardsData(result[0].wards);
    } else {
      getWardsData(null);
    }
  };
  const handleSelectWard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWard(e.target.value);
    console.log("selected district: ", e.target.value);
  };
  const handleSaveAddress = () => {
    let dataSend = {
      userName,
      fullName,
      phone,
      detailAddress: address,
      address: selectedWard + ", " + selectedDistrict + ", " + selectedCity,
      isDefault: defaultAddress ? 1 : 0,
    };
    console.log("check data send ", dataSend);
  };

  return (
    <>
      <h4>Thông tin địa chỉ</h4>
      <hr />
      <div className="row">
        {/* address 1 */}
        <div className="col-md-6 pt-2">
          <button className="btn p-0 w-100" onClick={handleShow}>
            <div className="card p-2">
              <div className="d-flex flex-row align-items-center">
                <span className="fw-bold">Vũ Lập</span>
                <span className="text-mute ps-2">| 0961658797</span>
              </div>
              <div className="d-flex flex-row align-items-center">
                <i className="fa-solid fa-location-dot"></i>{" "}
                <span className="text-mute ps-2">
                  Tòa nhà Simco, 28 Phạm Hùng
                </span>
              </div>
              <div className="d-flex">
                <span className="text-mute text-start">
                  Phường Mỹ Đình 1, Quận Nam Từ Liêm, Hà nội
                </span>
              </div>
              <div className="d-flex pt-1">
                <span className="border border-primary text-primary rounded-1 px-1">
                  Mặc định
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* address 2 */}
        <div className="col-md-6 pt-2">
          <button className="btn p-0 w-100" onClick={handleShow}>
            <div className="card p-2">
              <div className="d-flex flex-row align-items-center">
                <span className="fw-bold">Vũ Lập</span>
                <span className="text-mute ps-2">| 0961658797</span>
              </div>
              <div className="d-flex flex-row align-items-center">
                <i className="fa-solid fa-location-dot"></i>{" "}
                <span className="text-mute ps-2">
                  Tòa nhà Simco, 28 Phạm Hùng
                </span>
              </div>
              <div className="d-flex">
                <span className="text-mute text-start">
                  Phường Mỹ Đình 1, Quận Nam Từ Liêm, Hà nội
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* add new address */}
        <div className="col-md-6 pt-2">
          <div className="d-flex">
            <button
              className="d-flex flex-row card align-items-center p-2 btn btn-secondary"
              onClick={handleShow}
            >
              <i className="fa-solid fa-plus"></i>{" "}
              <span className="text-mute ps-2">Thêm địa chỉ mới</span>
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm địa chỉ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Thông tin khách hàng</h6>
          <input
            type="text"
            className="form-control mb-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Họ và tên"
          />
          <input
            type="text"
            className="form-control mb-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Số điện thoại"
          />
          <h6 className="mt-3 mb-0">Địa chỉ</h6>
          <div className="row">
            <div className="col-6 pt-2">
              <select
                className="form-select col"
                aria-label="Default select example"
                onChange={handleChangeCity}
                value={selectedCity}
              >
                <option selected>Thành phố/Tỉnh</option>
                {citiesData &&
                  citiesData.map((city, index) => (
                    <option value={city.name} key={`op${index}`}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-6 pt-2">
              <select
                className="form-select col"
                aria-label="Default select example"
                onChange={handleSelectDistrict}
                value={selectedDistrict}
              >
                <option selected>Quận/Huyện</option>
                {districtsData &&
                  districtsData.map((dis, index) => (
                    <option value={dis.name} key={`district${index}`}>
                      {dis.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-6 pt-2">
              <select
                className="form-select col"
                aria-label="Default select example"
                onChange={handleSelectWard}
                value={selectedWard}
              >
                <option selected>Phường/Xã</option>
                {wardsData &&
                  wardsData.map((ward, index) => (
                    <option value={ward.name} key={`ward${index}`}>
                      {ward.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-6 pt-2">
              <input
                type="text"
                className="form-control mb-2"
                value={address}
                onChange={(e) => setAddres(e.target.value)}
                placeholder="Số nhà, đường, ..."
              />
            </div>
          </div>
          <div className="d-flex mt-3">
            <button
              className="btn btn-primary"
              onClick={() => setDefaultAddress(true)}
            >
              đặt mặc định
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="w-100"
            onClick={handleSaveAddress}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddressComponent;
