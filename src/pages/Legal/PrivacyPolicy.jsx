import React from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import './Legal.css';

export default function PrivacyPolicy() {
  usePageMeta('Chính sách Bảo mật - Savina', 'Chính sách bảo mật dữ liệu của Công ty TNHH Đầu tư Quốc tế Savina');

  return (
    <>
      <section className="page-hero">
        <h1>Chính sách Bảo mật</h1>
        <p>Privacy Policy</p>
      </section>

      <section style={{ background: '#fff' }}>
        <FadeInSection>
          <div className="legal-container">
            <div className="legal-meta">
              <p><strong>Công ty TNHH Đầu tư Quốc tế Savina</strong></p>
              <p>Cập nhật lần cuối: 23 tháng 4, 2026 | Last updated: April 23, 2026</p>
            </div>

            {/* Vietnamese */}
            <div className="legal-section">
              <h2>1. Giới thiệu</h2>
              <p>Công ty TNHH Đầu tư Quốc tế Savina ("Savina", "chúng tôi") cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn. Chính sách Bảo mật này mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin của bạn khi bạn sử dụng nền tảng <strong>SAVINA AIOS</strong> (AI Operation System), tên ứng dụng đăng ký: <strong>savina-content-app</strong>, bao gồm các tính năng tích hợp với TikTok và các nền tảng mạng xã hội khác.</p>
              <p>Chính sách này được xây dựng tuân thủ <strong>Nghị định 13/2023/NĐ-CP về Bảo vệ Dữ liệu Cá nhân</strong> của Việt Nam và các quy định pháp luật liên quan.</p>
            </div>

            <div className="legal-section">
              <h2>2. Dữ liệu Chúng tôi Thu thập</h2>

              <h3>2.1 Thông tin bạn cung cấp trực tiếp</h3>
              <ul>
                <li><strong>Thông tin tài khoản:</strong> Họ tên, địa chỉ email, số điện thoại, mật khẩu đã mã hóa.</li>
                <li><strong>Thông tin hồ sơ:</strong> Ảnh đại diện, tên hiển thị, thông tin tổ chức (nếu có).</li>
                <li><strong>Nội dung:</strong> Hình ảnh, video, văn bản và các tài liệu bạn tải lên hoặc tạo trên nền tảng.</li>
                <li><strong>Thông tin liên lạc:</strong> Nội dung bạn gửi qua email, biểu mẫu hỗ trợ hoặc chat.</li>
              </ul>

              <h3>2.2 Dữ liệu từ TikTok (qua TikTok OAuth & API)</h3>
              <div className="legal-highlight">
                <p>Khi bạn liên kết tài khoản TikTok với AIOS, chúng tôi thu thập các dữ liệu sau thông qua TikTok API, với sự đồng ý rõ ràng của bạn:</p>
              </div>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Loại dữ liệu</th>
                      <th>Chi tiết</th>
                      <th>Mục đích</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hồ sơ TikTok</td>
                      <td>Tên hiển thị, ảnh đại diện, Open ID, Union ID</td>
                      <td>Xác thực và liên kết tài khoản</td>
                    </tr>
                    <tr>
                      <td>Danh sách video</td>
                      <td>Tiêu đề, mô tả, trạng thái đăng tải</td>
                      <td>Quản lý nội dung đã đăng</td>
                    </tr>
                    <tr>
                      <td>Dữ liệu phân tích</td>
                      <td>Lượt xem, lượt thích, bình luận, chia sẻ, tỷ lệ tương tác</td>
                      <td>Báo cáo hiệu suất nội dung</td>
                    </tr>
                    <tr>
                      <td>Thông tin khán giả</td>
                      <td>Dữ liệu nhân khẩu học tổng hợp (tuổi, giới tính, vị trí địa lý)</td>
                      <td>Tối ưu hóa chiến lược nội dung</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Lưu ý:</strong> Chúng tôi <u>không</u> thu thập mật khẩu TikTok của bạn. Xác thực được thực hiện thông qua giao thức OAuth 2.0 an toàn của TikTok.</p>

              <h3>2.3 Dữ liệu thu thập tự động</h3>
              <ul>
                <li><strong>Dữ liệu thiết bị:</strong> Loại thiết bị, hệ điều hành, trình duyệt, địa chỉ IP.</li>
                <li><strong>Dữ liệu sử dụng:</strong> Trang truy cập, thời gian sử dụng, tính năng được dùng, nhật ký hoạt động.</li>
                <li><strong>Cookies và công nghệ tương tự:</strong> Xem Mục 9 về Cookies.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>3. Mục đích Sử dụng Dữ liệu</h2>
              <p>Chúng tôi sử dụng dữ liệu của bạn cho các mục đích sau:</p>
              <ul>
                <li><strong>Cung cấp dịch vụ:</strong> Vận hành nền tảng AIOS, đăng tải nội dung lên TikTok và các nền tảng khác theo yêu cầu của bạn.</li>
                <li><strong>Phân tích và báo cáo:</strong> Tạo báo cáo hiệu suất nội dung từ dữ liệu TikTok Analytics và các nguồn khác.</li>
                <li><strong>Cải thiện dịch vụ:</strong> Nâng cao chất lượng nội dung AI, tối ưu hóa trải nghiệm người dùng.</li>
                <li><strong>Bảo mật:</strong> Phát hiện và ngăn chặn truy cập trái phép, gian lận và lạm dụng.</li>
                <li><strong>Liên lạc:</strong> Gửi thông báo dịch vụ, cập nhật và hỗ trợ kỹ thuật.</li>
                <li><strong>Tuân thủ pháp luật:</strong> Đáp ứng yêu cầu của cơ quan có thẩm quyền theo quy định pháp luật Việt Nam.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>4. Chia sẻ Dữ liệu</h2>
              <h3>4.1 Chia sẻ với TikTok</h3>
              <p>Khi bạn sử dụng tính năng đăng tải nội dung, AIOS gửi dữ liệu nội dung (video, hình ảnh, văn bản mô tả) tới TikTok thông qua TikTok API. Việc này được thực hiện theo yêu cầu trực tiếp của bạn và tuân thủ chính sách dữ liệu của TikTok.</p>

              <h3>4.2 Bên thứ ba khác</h3>
              <p>Chúng tôi <strong>không bán</strong> dữ liệu cá nhân của bạn. Chúng tôi chỉ chia sẻ dữ liệu trong các trường hợp sau:</p>
              <ul>
                <li><strong>Nhà cung cấp dịch vụ:</strong> Các đối tác kỹ thuật hỗ trợ vận hành (hosting, CDN, phân tích), được ràng buộc bởi hợp đồng bảo mật.</li>
                <li><strong>Đối tác giáo dục:</strong> Thông tin tuyển sinh được chia sẻ với các trường đại học đối tác (Đại học Thành Đông, Đại học Đồng Tháp) khi bạn đồng ý đăng ký chương trình học.</li>
                <li><strong>Yêu cầu pháp lý:</strong> Khi có yêu cầu hợp pháp từ cơ quan nhà nước có thẩm quyền.</li>
                <li><strong>Bảo vệ quyền lợi:</strong> Khi cần thiết để bảo vệ quyền, tài sản hoặc an toàn của Savina, người dùng hoặc công chúng.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>5. Lưu trữ và Bảo quản Dữ liệu</h2>
              <h3>5.1 Thời gian lưu trữ</h3>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Loại dữ liệu</th>
                      <th>Thời gian lưu trữ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Thông tin tài khoản</td><td>Suốt thời gian tài khoản hoạt động + 30 ngày sau khi xóa</td></tr>
                    <tr><td>Nội dung đã tạo</td><td>Suốt thời gian tài khoản hoạt động, xóa theo yêu cầu</td></tr>
                    <tr><td>Dữ liệu TikTok Analytics</td><td>Tối đa 24 tháng kể từ ngày thu thập</td></tr>
                    <tr><td>Token xác thực TikTok</td><td>Cho đến khi bạn hủy liên kết hoặc token hết hạn</td></tr>
                    <tr><td>Nhật ký hệ thống</td><td>Tối đa 12 tháng</td></tr>
                    <tr><td>Dữ liệu thanh toán</td><td>Theo quy định kế toán Việt Nam (tối thiểu 5 năm)</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>5.2 Vị trí lưu trữ</h3>
              <p>Dữ liệu được lưu trữ trên máy chủ tại Việt Nam. Trong trường hợp cần chuyển dữ liệu ra nước ngoài (ví dụ: gửi nội dung tới TikTok API), chúng tôi tuân thủ các quy định về chuyển dữ liệu xuyên biên giới theo Nghị định 13/2023/NĐ-CP.</p>
            </div>

            <div className="legal-section">
              <h2>6. Quyền của Bạn</h2>
              <p>Theo pháp luật Việt Nam, bạn có các quyền sau đối với dữ liệu cá nhân:</p>
              <ul>
                <li><strong>Quyền được biết:</strong> Biết dữ liệu nào được thu thập và cách sử dụng.</li>
                <li><strong>Quyền đồng ý:</strong> Cho phép hoặc từ chối xử lý dữ liệu cá nhân.</li>
                <li><strong>Quyền truy cập:</strong> Yêu cầu bản sao dữ liệu cá nhân chúng tôi lưu giữ.</li>
                <li><strong>Quyền chỉnh sửa:</strong> Yêu cầu sửa đổi thông tin không chính xác.</li>
                <li><strong>Quyền xóa:</strong> Yêu cầu xóa dữ liệu cá nhân (trừ trường hợp pháp luật yêu cầu giữ lại).</li>
                <li><strong>Quyền hạn chế xử lý:</strong> Yêu cầu hạn chế việc xử lý dữ liệu trong một số trường hợp.</li>
                <li><strong>Quyền phản đối:</strong> Phản đối việc xử lý dữ liệu cho một số mục đích nhất định.</li>
                <li><strong>Quyền di chuyển dữ liệu:</strong> Nhận dữ liệu ở định dạng có cấu trúc, phổ biến.</li>
                <li><strong>Quyền rút lại đồng ý:</strong> Rút lại sự đồng ý bất cứ lúc nào mà không ảnh hưởng đến tính hợp pháp của việc xử lý trước đó.</li>
              </ul>
              <p>Để thực hiện các quyền trên, vui lòng liên hệ <a href="mailto:info@savina.vn">info@savina.vn</a>. Chúng tôi sẽ phản hồi trong vòng 72 giờ.</p>

              <h3>6.1 Quyền liên quan đến TikTok</h3>
              <p>Ngoài các quyền trên, bạn có thể:</p>
              <ul>
                <li>Hủy liên kết tài khoản TikTok khỏi AIOS bất cứ lúc nào.</li>
                <li>Yêu cầu xóa toàn bộ dữ liệu TikTok đã được lưu trữ trong hệ thống AIOS.</li>
                <li>Thu hồi quyền truy cập OAuth trực tiếp từ cài đặt TikTok.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>7. Bảo mật Dữ liệu</h2>
              <p>Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức để bảo vệ dữ liệu của bạn:</p>
              <ul>
                <li><strong>Mã hóa:</strong> Dữ liệu được mã hóa trong quá trình truyền tải (TLS 1.2+) và lưu trữ (AES-256).</li>
                <li><strong>Xác thực:</strong> Hệ thống xác thực đa lớp, token OAuth được lưu trữ an toàn và mã hóa.</li>
                <li><strong>Kiểm soát truy cập:</strong> Phân quyền dựa trên vai trò (RBAC), nguyên tắc quyền tối thiểu.</li>
                <li><strong>Giám sát:</strong> Hệ thống giám sát an ninh 24/7, phát hiện xâm nhập.</li>
                <li><strong>Sao lưu:</strong> Sao lưu dữ liệu định kỳ với cơ chế khôi phục thảm họa.</li>
                <li><strong>Đào tạo:</strong> Nhân viên được đào tạo về bảo mật thông tin và quy trình xử lý dữ liệu.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>8. Bảo vệ Trẻ em</h2>
              <p>Dịch vụ AIOS không dành cho người dưới 18 tuổi. Chúng tôi không cố ý thu thập dữ liệu của trẻ em. Nếu phát hiện đã thu thập dữ liệu của người dưới 18 tuổi, chúng tôi sẽ xóa ngay lập tức.</p>
            </div>

            <div className="legal-section">
              <h2>9. Cookies và Công nghệ Theo dõi</h2>
              <h3>9.1 Cookies chúng tôi sử dụng</h3>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Loại Cookie</th>
                      <th>Mục đích</th>
                      <th>Thời hạn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Thiết yếu</td><td>Xác thực, bảo mật phiên, cài đặt ngôn ngữ</td><td>Phiên / 30 ngày</td></tr>
                    <tr><td>Chức năng</td><td>Ghi nhớ tùy chọn, giao diện người dùng</td><td>1 năm</td></tr>
                    <tr><td>Phân tích</td><td>Thống kê sử dụng, cải thiện dịch vụ</td><td>2 năm</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Chúng tôi <strong>không sử dụng</strong> cookies quảng cáo hoặc theo dõi bên thứ ba. Bạn có thể quản lý cookies trong cài đặt trình duyệt.</p>
            </div>

            <div className="legal-section">
              <h2>10. Thay đổi Chính sách</h2>
              <p>Chúng tôi có thể cập nhật Chính sách Bảo mật này theo định kỳ. Thay đổi quan trọng sẽ được thông báo qua email hoặc trên nền tảng ít nhất 15 ngày trước khi có hiệu lực. Phiên bản mới nhất luôn được đăng tại trang này.</p>
            </div>

            <div className="legal-section">
              <h2>11. Liên hệ</h2>
              <p>Mọi thắc mắc hoặc yêu cầu liên quan đến bảo mật dữ liệu, vui lòng liên hệ:</p>
              <div className="legal-highlight">
                <p><strong>Công ty TNHH Đầu tư Quốc tế Savina</strong></p>
                <p><strong>Bộ phận Bảo vệ Dữ liệu</strong></p>
                <p>Tầng 12, Tòa nhà Mipec, 229 Tây Sơn, Kim Liên, Đống Đa, Hà Nội, Việt Nam</p>
                <p>Email: <a href="mailto:info@savina.vn">info@savina.vn</a></p>
                <p>Điện thoại: 0979 286 220</p>
                <p>Website: <a href="https://savina.vn">savina.vn</a></p>
              </div>
              <p>Nếu bạn không hài lòng với cách chúng tôi xử lý khiếu nại, bạn có quyền khiếu nại đến Cục An ninh mạng và Phòng, chống tội phạm sử dụng công nghệ cao (Bộ Công an).</p>
            </div>

            {/* English */}
            <hr className="legal-divider" />

            <h2 className="legal-english-heading">Privacy Policy (English Translation)</h2>
            <p className="legal-english-note"><em>This English translation is provided for reference. In case of any discrepancy, the Vietnamese version shall prevail.</em></p>

            <div className="legal-section">
              <h2>1. Introduction</h2>
              <p>Savina International Investment Co., Ltd. ("Savina", "we", "us") is committed to protecting your privacy and personal data. This Privacy Policy describes how we collect, use, store, and protect your information when you use the <strong>SAVINA AIOS</strong> (AI Operation System) platform, registered app name: <strong>savina-content-app</strong>, including features integrated with TikTok and other social media platforms.</p>
              <p>This policy is developed in compliance with <strong>Vietnam's Decree 13/2023/ND-CP on Personal Data Protection</strong> and related regulations.</p>
            </div>

            <div className="legal-section">
              <h2>2. Data We Collect</h2>
              <p>We collect: account information (name, email, phone), profile information, content you upload, and communications. When you link your TikTok account, we collect TikTok profile data, video lists, analytics data, and aggregated audience insights through TikTok API with your explicit consent. We do not collect your TikTok password. We also automatically collect device information, usage data, and cookies.</p>
            </div>

            <div className="legal-section">
              <h2>3. How We Use Your Data</h2>
              <p>We use your data for: service delivery (publishing content to TikTok and other platforms), analytics and reporting, service improvement, security, communication, and legal compliance.</p>
            </div>

            <div className="legal-section">
              <h2>4. Data Sharing</h2>
              <p>We <strong>do not sell</strong> your personal data. We share data only with: TikTok (at your request when publishing content), service providers bound by confidentiality agreements, education partners (when you consent to program registration), and when required by law.</p>
            </div>

            <div className="legal-section">
              <h2>5. Data Retention</h2>
              <p>Account information is kept during active account + 30 days after deletion. TikTok Analytics data is kept up to 24 months. System logs up to 12 months. Data is stored on servers in Vietnam. Cross-border transfers comply with Decree 13/2023/ND-CP.</p>
            </div>

            <div className="legal-section">
              <h2>6. Your Rights</h2>
              <p>Under Vietnamese law, you have the right to: know, consent, access, correct, delete, restrict processing, object, data portability, and withdraw consent. Contact <a href="mailto:info@savina.vn">info@savina.vn</a> to exercise these rights. We respond within 72 hours. You may also unlink your TikTok account and request deletion of all stored TikTok data at any time.</p>
            </div>

            <div className="legal-section">
              <h2>7. Data Security</h2>
              <p>We implement: encryption (TLS 1.2+ in transit, AES-256 at rest), multi-layer authentication, role-based access control (RBAC), 24/7 security monitoring, regular backups, and staff training.</p>
            </div>

            <div className="legal-section">
              <h2>8. Children's Privacy</h2>
              <p>AIOS is not intended for individuals under 18. We do not knowingly collect data from minors.</p>
            </div>

            <div className="legal-section">
              <h2>9. Cookies</h2>
              <p>We use essential, functional, and analytics cookies. We do not use advertising or third-party tracking cookies.</p>
            </div>

            <div className="legal-section">
              <h2>10. Contact</h2>
              <div className="legal-highlight">
                <p><strong>Savina International Investment Co., Ltd.</strong></p>
                <p><strong>Data Protection Department</strong></p>
                <p>12th Floor, Mipec Building, 229 Tay Son, Kim Lien, Dong Da, Hanoi, Vietnam</p>
                <p>Email: <a href="mailto:info@savina.vn">info@savina.vn</a></p>
                <p>Phone: +84 979 286 220</p>
                <p>Website: <a href="https://savina.vn">savina.vn</a></p>
              </div>
            </div>

            <div className="legal-nav">
              <Link to="/terms-of-service">← Điều khoản Dịch vụ / Terms of Service</Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
