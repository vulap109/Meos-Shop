import { NavLink, Outlet } from "react-router-dom";

const AccountInfo = () => {
  return (
    <section className="bg-light my-5">
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
                <NavLink className="nav-link my-0 py-2 ps-3" to="/4" end>
                  Đăng xuất
                </NavLink>
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
