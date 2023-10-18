import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import questionIcon from "../../assets/icons/question-mark.png";

const AccountInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleSignout = () => setShowModal(true);

  return (
    <section className="bg-light my-3" style={{ minHeight: "545px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="card border p-3">
              <nav className="nav flex-column nav-pills mb-md-2">
                <NavLink className="nav-link py-2 ps-3 my-0" to="/account" end>
                  Thông tin tài khoản
                </NavLink>
                <NavLink
                  className="nav-link my-0 py-2 ps-3"
                  to="/account/address"
                  end
                >
                  Địa chỉ
                </NavLink>
                <NavLink
                  className="nav-link my-0 py-2 ps-3"
                  to="/account/order"
                  end
                >
                  Quản lý đơn hàng
                </NavLink>
                <NavLink
                  className="nav-link my-0 py-2 ps-3"
                  to="/account/wishlist"
                  end
                >
                  Sản phẩm đã thích
                </NavLink>
                <button
                  className="nav-link my-0 py-2 ps-3 text-start"
                  onClick={handleSignout}
                >
                  Đăng xuất
                </button>
              </nav>
            </div>
          </div>
          <div className="col-lg-9 mt-3 mt-lg-0">
            <div className="card border p-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body className="justify-content-center d-flex">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center pb-3">
              <img
                src={questionIcon}
                alt="questionIcon"
                height={100}
                width={100}
              />
            </div>
            <h4>Bạn có muốn đăng xuất?</h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="col" onClick={handleClose}>
            Không
          </Button>
          <Button variant="danger" className="col" onClick={handleClose}>
            <i className="fa-solid fa-arrow-right-from-bracket pe-3"></i>Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default AccountInfo;
