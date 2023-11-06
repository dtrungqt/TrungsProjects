import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="page-footer bg-white w-full border-t-2 border-solid border-light-orange ">
      <section className="container page-footer__first pb-8">
        <h2 className="page-footer__header font-semibold text-strong-grey my-8 relative">
          Thông tin và chính sách
        </h2>
        <div className="page-footer__body flex justify-between">
          <div>
            <div className="">
              <img src="./images/logo_.jpg" className="w-[150px]" />
            </div>
            <h6>Văn phòng : Số 40 Mỹ Khê 7, Phước Mỹ, Sơn Trà, Đà Nẵng</h6>
            <h6>Email : idbaydidau@gmail.com</h6>
            <h6>HotLine : 0935 699 815</h6>
            <h6>Địa chỉ tên miền: baydidau.vn</h6>
          </div>
          <div className="">
            <h2 className="page-footer__title mb-5">QUY ĐỊNH</h2>
            <div className="h-[20px]">
              <a className="page-footer__link" href="#" target="_blank">
                Chính sách và quy định chung
              </a>
            </div>
            <div className="h-[20px]">
              <a className="page-footer__link" href="#" target="_blank">
                Chính sách cộng tác viên
              </a>
            </div>
            <div className="h-[20px]">
              <a className="page-footer__link" href="#" target="_blank">
                Quy định thanh toán
              </a>
            </div>
            <div className="h-[20px]">
              <a className="page-footer__link" href="#" target="_blank">
                Quy định về xác định thông tin đặt vé
              </a>
            </div>
            <div className="h-[20px]">
              <a className="page-footer__link" href="#" target="_blank">
                Chính sách về hủy đặt vé và hoàn trả tiền
              </a>
            </div>
            <div className="h-[20px]">
              <a className="page-footer__link" href="#" target="_blank">
                Chính sách bảo mật thông tin
              </a>
            </div>
          </div>
          <div>
            <h2 className="page-footer__title">ĐĂNG KÝ CỘNG TÁC VIÊN NGAY</h2>
            <a href="#" target="_blank">
              <img src="./images/chart.png" className="w-[200px]" />
            </a>
          </div>
        </div>
      </section>
      <section className=" bg-orange text-white text-lg">
        <div className="container flex items-center justify-start gap-32 pt-4 pb-1">
          <h2> 2020 © Baydidau.vn</h2>
          <a
            href="#"
            target="_blank"
            className="flex justify-between items-center gap-2"
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
            <h2>Facebook</h2>
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
