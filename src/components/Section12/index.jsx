import React from "react";
import PropTypes from "prop-types";
import Tabs from "./Tabs";

Section12.propTypes = {};

function Section12(props) {
  const tabs = [
    {
      id: 1,
      title: "Câu 1",
      question: "Khi truy cập một trang web trình duyệt sẽ làm gì?",
      answer:
        'Khi truy cập trang web, trình duyệt sẽ gọi tới máy chủ DNS để biên dịch URL trang web thành một địa chỉ IP, mỗi trang web có địa chỉ IP riêng biệt. Khi tìm thấy địa chỉ IP của trang web chúng ta đang vào, địa chỉ IP đó sẽ được trả về cho trình duyệt. Trình duyệt sẽ sử dụng địa chi IP đó để yêu cầu HTTP gọi tới Server lưu trữ trang web đó. Nó sẽ kết nối cổng số 80 trên Server bằng giao thức TCP/IP. Nếu Server chấp nhận thì sẽ gửi lại thông báo "200 OK". Và sau đó trình duyệt sẽ truy xuất mã HTML của trang web cụ thể được yêu cầu. Khi trình duyệt của bạn nhận được mã HTML đó từ Server thì nó sẽ hiển thị ra cửa sổ của trình duyệt một trang web hoàn chỉnh - awesome!. Khi chúng ta đóng trình duyệt thì quá trình kết nối với Server sẽ kết thúc',
    },
    {
      id: 2,
      title: "Câu 2",
      question:
        "Nếu có 2 CSS Selectors cùng ứng với một element thì style của element sẽ thể hiện như thế nào?",
      answer:
        "Nếu có 2 CSS Selectors cùng ứng với một element thì style của element sẽ thể hiện theo độ ưu tiên. Cao nhất là 1. !important, 2. #id (#app, #header,....), 3. .class (.app, .footer, ....), 4. tag(p, div, ul,...)",
    },
    {
      id: 3,
      title: "Câu 3",
      question: "Callback và Promise trong Javascript dùng để làm gì?",
      answer:
        "Callback là một hàm được sẽ được gọi để thực thi bên trong một hàm khác. Điều này giúp chúng ta thực hiện một chuỗi các hành động (hàm) liên tiếp nhau .Callback rất hữu dụng khi xử lý sự kiện (event). Tức là chức năng đó sẽ được gọi ở một thời điểm nào đó khi event được kích hoạt. VD: click cái button thì hiển thị modal. Khái niệm Promise ra đời để giải quyết vấn đề Callback hell (Đây là hiện tượng một chuỗi các callback được lồng vào nhau liên tiếp, dẫn đến việc khó theo dõi và debug code), nó giúp việc xử lý bất đồng độ trở nên dễ dàng, dễ code và dễ debug hơn khi chỉ sử dụng callback",
    },
  ];
  return (
    <>
      <p style={{fontWeight: '600', marginBottom: '20px'}}>Section 1 2</p>
      <Tabs tabs={tabs}></Tabs>
    </>
  );
}

export default Section12;
