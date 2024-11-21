import { Container } from '@mui/material';

const CommitPage = () => {
  return (
    <Container maxWidth="lg">
      <section className="commit py-10">
        <div className="commit__content">
          <h1>Chính Sách Bảo Hành và Hoàn Tiền - Homie</h1>

          <div className="section">
            <h2>I. CHÍNH SÁCH BẢO HÀNH</h2>
            <p>
              Cam kết tất cả các đơn hàng giúp việc theo giờ được cung cấp bởi
              Homie là đơn hàng được đảm bảo về chất lượng.
            </p>

            <h3>1. Chính sách bảo hành chất lượng dịch vụ</h3>
            <p>
              Khi Quý khách không hài lòng về chất lượng ca làm việc của nhân
              viên giúp việc, Homie sẽ bảo hành toàn bộ ca làm. Homie sẵn sàng
              làm sạch lại các khu vực Quý khách chưa hài lòng và không tính
              thêm phí.
            </p>
            <p>
              <strong className="condition">Điều kiện bảo hành:</strong> Khách
              hàng phản hồi dịch vụ trong vòng 24h, kể từ thời điểm kết thúc ca
              làm và đánh giá 1 sao hoặc 2 sao về ca làm đó trên ứng dụng.
            </p>

            <h3>2. Chính sách hỗ trợ đền bù tổn thất tài sản</h3>
            <p>
              <strong>Về tổn thất do hư hỏng và đổ vỡ:</strong> Trong trường hợp
              nhân viên thực hiện dịch vụ của Homie làm hư hỏng hoặc đổ vỡ tài
              sản của Khách hàng, Homie sẽ xác định trách nhiệm đền bù theo các
              thông tin được xác thực.
            </p>
            <p>
              <strong>Về tổn thất do mất trộm, mất cắp:</strong> Trường hợp có
              xác nhận bằng văn bản của cơ quan chức năng về việc nhân viên thực
              hiện dịch vụ lấy trộm đồ của Khách hàng. Nhân viên giúp việc có
              trách nhiệm đền bù tổn thất theo Quy định của Pháp luật. Homie cam
              kết cung cấp đầy đủ thông tin và các trách nhiệm liên quan theo
              yêu cầu của Cơ quan chức năng.
            </p>
          </div>

          <div className="section">
            <h2>II. CHÍNH SÁCH ĐỔI NHÂN VIÊN VÀ HOÀN TIỀN</h2>

            <h3>1. Chính sách đổi nhân viên giúp việc</h3>
            <p>
              Khách hàng được đổi Nhân viên trong gói Giúp việc Định kỳ khi
              không hài lòng với chất lượng của Nhân viên, dù đã thực hiện bảo
              hành.
            </p>
            <p>
              <strong className="condition">Điều kiện đổi nhân viên:</strong>
            </p>
            <ul>
              <li>
                Khách hàng phản hồi dịch vụ và đánh giá 1 sao hoặc 2 sao trên
                ứng dụng Homie sau khi kết thúc ca làm của nhân viên muốn đổi.
              </li>
              <li>
                Thời gian tuyển và đào tạo nhân viên thay thế để đổi Nhân viên
                từ 7-10 ngày. Trong thời gian này, Homie sẽ sắp xếp Nhân viên lẻ
                đến làm việc tại nhà Khách hàng.
              </li>
              <li>
                Số lần đổi Nhân viên: Không quá 02 lần với hợp đồng 6 tháng, quá
                03 lần với hợp đồng 12 tháng.
              </li>
            </ul>

            <h3>2. Chính sách hoàn tiền</h3>
            <p>
              Tất cả các đơn hàng của bạn là đơn hàng không hoàn tiền. Đơn hàng
              được hoàn lại toàn bộ hoặc một phần số tiền đã thanh toán trong
              các trường hợp:
            </p>
            <ul>
              <li>
                Không thể cung cấp nhân viên theo thời gian Quý khách yêu cầu
                (nằm trong khung giờ quy định của Homie: 8h-12h; 13-17h; 17h-
                21h hàng ngày).
              </li>
              <li>
                Khách hàng sử dụng dịch vụ bị đổi Nhân viên cố định quá số lần
                quy định theo cam kết chất lượng của Homie (quá 02 lần với hợp
                đồng 6 tháng, quá 03 lần với hợp đồng 12 tháng).
              </li>
            </ul>

            <h4>Thời gian hoàn tiền:</h4>
            <p>
              Thời gian hoàn tiền phụ thuộc vào phương thức thanh toán của Khách
              hàng (tính từ thời điểm Homie xác nhận đơn hàng đủ điều kiện hoàn
              tiền):
            </p>
            <ul>
              <li>Chuyển khoản: 1-3 ngày làm việc</li>
              <li>
                Thanh toán online qua ứng dụng ví điện tử MoMo: 3-5 ngày làm
                việc
              </li>
              <li>Thanh toán online qua MOMO & VNPay: 9-12 ngày làm việc</li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CommitPage;
