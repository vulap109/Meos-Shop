import React from "react";

const Order = () => {
  const listOrders = [
    {
      date: "26/10/2023",
      payment: "Banking",
      total: "500.000",
      recipient: "Lap VQ \n 096 165 8797 28 \n pham hung, nam tu liem, hn",
      products: "ao thun co co x1, ao khoac blue x2",
      note: "khong",
    },
    {
      date: "26/10/2023",
      payment: "Banking",
      total: "500.000",
      recipient: "Lap VQ \n 096 165 8797 28 \n pham hung, nam tu liem, hn",
      products: "ao thun co co x1, ao khoac blue x2",
      note: "khong",
    },
    {
      date: "26/10/2023",
      payment: "Banking",
      total: "500.000",
      recipient: "Lap VQ \n 096 165 8797 28 \n pham hung, nam tu liem, hn",
      products: "ao thun co co x1, ao khoac blue x2",
      note: "khong",
    },
    {
      date: "26/10/2023",
      payment: "Banking",
      total: "500.000",
      recipient: "Lap VQ \n 096 165 8797 28 \n pham hung, nam tu liem, hn",
      products: "ao thun co co x1, ao khoac blue x2",
      note: "khong",
    },
  ];
  return (
    <>
      <div className="d-flex flex-column text-dark">
        <h3 className="text-dark">Orders</h3>
        <div className="mt-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-dark fs-6">
                  Ngày
                </th>
                <th scope="col" className="text-dark fs-6">
                  Thanh toán
                </th>
                <th scope="col" className="text-dark fs-6">
                  Tổng tiền
                </th>
                <th scope="col" className="text-dark fs-6">
                  Người nhận
                </th>
                <th scope="col" className="text-dark fs-6">
                  Sản phẩm
                </th>
                <th scope="col" className="text-dark fs-6">
                  Ghi chú
                </th>
              </tr>
            </thead>
            <tbody>
              {listOrders &&
                listOrders.map((od, index) => (
                  <tr key={`product${index}`}>
                    <td>{od.date}</td>
                    <td>{od.payment}</td>
                    <td>{od.total}</td>
                    <td>
                      <span style={{ whiteSpace: "pre-line" }}>
                        {od.recipient}
                      </span>
                    </td>
                    <td>{od.products}</td>
                    <td>{od.note}</td>
                    <td>
                      <button type="button" className="btn btn-link">
                        <i className="fa-solid fa-circle-info pe-2"></i>Chi tiết
                      </button>
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

export default Order;
