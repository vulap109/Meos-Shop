import { NavLink, Outlet } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import {
  closeModalAction,
  openModalAction,
} from "../../redux/modal/modalAction";
import { signOutAction } from "../../redux/auth/authAction";

const AccountInfo = () => {
  const dispatch: Dispatch<any> = useDispatch();
  // const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  const handleConfirmSignout = () => {
    // open the modal
    dispatch(
      openModalAction(
        "Are you sure to sign out?",
        closeMsg,
        true,
        handleSignout
      )
    );
  };
  const closeMsg = () => {
    // close the modal
    dispatch(closeModalAction());
  };
  const handleSignout = () => {
    // close the modal
    dispatch(closeModalAction());
    // sign out user
    dispatch(signOutAction());
  };

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
                  onClick={handleConfirmSignout}
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
    </section>
  );
};

export default AccountInfo;
