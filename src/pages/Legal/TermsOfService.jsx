import React from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import './Legal.css';

export default function TermsOfService() {
  usePageMeta('Điều khoản Dịch vụ - Savina', 'Điều khoản dịch vụ của Công ty TNHH Đầu tư Quốc tế Savina');

  return (
    <>
      <section className="page-hero">
        <h1>Điều khoản Dịch vụ</h1>
        <p>Terms of Service</p>
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
              <p>Chào mừng bạn đến với nền tảng <strong>SAVINA AIOS</strong> (AI Operation System), tên ứng dụng đăng ký: <strong>savina-content-app</strong>, được vận hành bởi Công ty TNHH Đầu tư Quốc tế Savina ("Savina", "chúng tôi"). SAVINA AIOS (savina-content-app) là nền tảng quản lý nội dung đa nền tảng phục vụ các tổ chức giáo dục và doanh nghiệp trong việc sản xuất, đăng tải và phân tích hiệu quả nội dung trên các mạng xã hội, bao gồm TikTok.</p>
              <p>Bằng việc truy cập hoặc sử dụng dịch vụ của chúng tôi, bạn đồng ý chịu ràng buộc bởi các Điều khoản Dịch vụ này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng dịch vụ.</p>
            </div>

            <div className="legal-section">
              <h2>2. Mô tả Dịch vụ</h2>
              <p>Savina cung cấp nền tảng SAVINA AIOS (savina-content-app) với các tính năng chính, phục vụ người dùng là các tổ chức giáo dục, doanh nghiệp và nhà sáng tạo nội dung:</p>
              <ul>
                <li><strong>Sản xuất nội dung tự động:</strong> Tạo nội dung hình ảnh, video và văn bản bằng công nghệ AI phục vụ hoạt động tuyển sinh giáo dục.</li>
                <li><strong>Đăng tải và quản lý nội dung đa nền tảng:</strong> Tự động đăng bài, lên lịch và quản lý nội dung trên các nền tảng mạng xã hội bao gồm TikTok, Facebook, YouTube và các kênh khác.</li>
                <li><strong>Tích hợp TikTok:</strong> Thông qua TikTok API, AIOS cho phép người dùng đăng tải video, quản lý nội dung, truy cập phân tích dữ liệu và tương tác với khán giả trên TikTok.</li>
                <li><strong>Phân tích hiệu suất:</strong> Thu thập và phân tích dữ liệu hiệu quả nội dung trên các nền tảng, bao gồm số liệu từ TikTok Analytics.</li>
                <li><strong>Hỗ trợ tuyển sinh:</strong> Phục vụ hoạt động tuyển sinh cho các trường đại học đối tác (Đại học Thành Đông, Đại học Đồng Tháp) nhắm đến học viên Việt Nam tại Việt Nam, Nhật Bản, Hàn Quốc và Đài Loan.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>3. Tài khoản Người dùng</h2>
              <h3>3.1 Đăng ký tài khoản</h3>
              <p>Để sử dụng dịch vụ, bạn phải tạo tài khoản và cung cấp thông tin chính xác, đầy đủ. Bạn phải đủ 18 tuổi hoặc có sự đồng ý của người giám hộ hợp pháp.</p>
              <h3>3.2 Bảo mật tài khoản</h3>
              <p>Bạn chịu trách nhiệm bảo mật thông tin đăng nhập và tất cả hoạt động diễn ra dưới tài khoản của bạn. Thông báo cho chúng tôi ngay lập tức nếu phát hiện truy cập trái phép.</p>
              <h3>3.3 Liên kết tài khoản TikTok</h3>
              <p>Khi liên kết tài khoản TikTok với AIOS, bạn ủy quyền cho chúng tôi thay mặt bạn thực hiện các thao tác được phép trên TikTok thông qua TikTok API, bao gồm đăng tải nội dung, truy cập phân tích và quản lý tương tác. Bạn có thể hủy liên kết bất cứ lúc nào.</p>
            </div>

            <div className="legal-section">
              <h2>4. Tích hợp TikTok và Sử dụng API</h2>
              <div className="legal-highlight">
                <p>Việc sử dụng tính năng tích hợp TikTok của AIOS phải tuân thủ <strong>Điều khoản Dịch vụ của TikTok</strong> và <strong>Chính sách Nhà phát triển TikTok</strong>. Trong trường hợp có xung đột, các điều khoản của TikTok sẽ được ưu tiên áp dụng cho phần liên quan đến TikTok.</p>
              </div>
              <h3>4.1 Nội dung đăng tải qua TikTok</h3>
              <ul>
                <li>Bạn chịu trách nhiệm hoàn toàn về nội dung được đăng lên TikTok thông qua AIOS.</li>
                <li>Nội dung phải tuân thủ Nguyên tắc Cộng đồng TikTok và pháp luật Việt Nam.</li>
                <li>Savina không chịu trách nhiệm nếu TikTok gỡ bỏ, hạn chế hoặc xử phạt nội dung do vi phạm chính sách.</li>
              </ul>
              <h3>4.2 Dữ liệu TikTok Analytics</h3>
              <ul>
                <li>AIOS thu thập dữ liệu phân tích từ TikTok API để cung cấp báo cáo hiệu suất cho bạn.</li>
                <li>Dữ liệu này được xử lý theo Chính sách Bảo mật của chúng tôi và chính sách dữ liệu của TikTok.</li>
                <li>Chúng tôi không bán hoặc chia sẻ dữ liệu TikTok của bạn cho bên thứ ba ngoài mục đích cung cấp dịch vụ.</li>
              </ul>
              <h3>4.3 Quyền truy cập TikTok</h3>
              <p>Bạn có thể thu hồi quyền truy cập TikTok của AIOS bất cứ lúc nào bằng cách:</p>
              <ul>
                <li>Hủy liên kết tài khoản TikTok trong cài đặt AIOS.</li>
                <li>Thu hồi quyền truy cập trực tiếp từ cài đặt bảo mật TikTok.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>5. Nội dung và Sở hữu Trí tuệ</h2>
              <h3>5.1 Nội dung của bạn</h3>
              <p>Bạn giữ toàn bộ quyền sở hữu trí tuệ đối với nội dung gốc bạn tải lên hoặc tạo thông qua AIOS. Bạn cấp cho Savina quyền sử dụng không độc quyền để xử lý, hiển thị và đăng tải nội dung theo chỉ dẫn của bạn.</p>
              <h3>5.2 Nội dung do AI tạo</h3>
              <p>Nội dung được tạo bởi công nghệ AI của AIOS thuộc quyền sử dụng của bạn trong phạm vi dịch vụ. Savina không tuyên bố quyền sở hữu đối với nội dung AI tạo cho bạn.</p>
              <h3>5.3 Tài sản của Savina</h3>
              <p>Nền tảng AIOS, bao gồm phần mềm, thuật toán, giao diện, nhãn hiệu và tài liệu kỹ thuật, là tài sản trí tuệ của Savina được bảo hộ theo pháp luật Việt Nam và các điều ước quốc tế.</p>
            </div>

            <div className="legal-section">
              <h2>6. Nghĩa vụ của Người dùng</h2>
              <p>Khi sử dụng dịch vụ, bạn cam kết:</p>
              <ul>
                <li>Không sử dụng dịch vụ cho mục đích bất hợp pháp hoặc vi phạm pháp luật Việt Nam.</li>
                <li>Không đăng tải nội dung vi phạm bản quyền, nhãn hiệu hoặc quyền sở hữu trí tuệ của bên thứ ba.</li>
                <li>Không đăng tải nội dung khiêu dâm, bạo lực, thù địch, phân biệt đối xử hoặc thông tin sai lệch.</li>
                <li>Không cố gắng truy cập trái phép hệ thống, tấn công, phá hoại hoặc gây gián đoạn dịch vụ.</li>
                <li>Không sử dụng bot, crawler hoặc công cụ tự động để khai thác dịch vụ ngoài phạm vi được phép.</li>
                <li>Tuân thủ các điều khoản và chính sách của TikTok và các nền tảng bên thứ ba khác khi sử dụng tính năng tích hợp.</li>
                <li>Cung cấp thông tin chính xác và cập nhật khi được yêu cầu.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>7. Phí Dịch vụ và Thanh toán</h2>
              <p>Savina có thể cung cấp các gói dịch vụ miễn phí và trả phí. Chi tiết về phí, chu kỳ thanh toán và chính sách hoàn tiền sẽ được thông báo rõ ràng trước khi bạn đăng ký gói trả phí. Savina có quyền thay đổi phí dịch vụ với thông báo trước 30 ngày.</p>
            </div>

            <div className="legal-section">
              <h2>8. Giới hạn Trách nhiệm</h2>
              <div className="legal-highlight">
                <p>Dịch vụ được cung cấp trên cơ sở "nguyên trạng" (as-is). Trong phạm vi pháp luật cho phép, Savina không chịu trách nhiệm về:</p>
              </div>
              <ul>
                <li>Gián đoạn dịch vụ do bảo trì, nâng cấp hoặc sự cố kỹ thuật ngoài kiểm soát.</li>
                <li>Mất mát dữ liệu hoặc nội dung do lỗi hệ thống, lỗi bên thứ ba (bao gồm TikTok API) hoặc hành động của người dùng.</li>
                <li>Hậu quả phát sinh từ việc TikTok thay đổi API, chính sách hoặc điều khoản dịch vụ.</li>
                <li>Thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc mang tính trừng phạt.</li>
                <li>Nội dung do người dùng tạo hoặc đăng tải thông qua nền tảng.</li>
              </ul>
              <p>Tổng trách nhiệm bồi thường của Savina trong mọi trường hợp không vượt quá số tiền bạn đã thanh toán cho dịch vụ trong 12 tháng trước đó.</p>
            </div>

            <div className="legal-section">
              <h2>9. Chấm dứt Dịch vụ</h2>
              <h3>9.1 Chấm dứt bởi Người dùng</h3>
              <p>Bạn có thể ngừng sử dụng dịch vụ và xóa tài khoản bất cứ lúc nào. Dữ liệu của bạn sẽ được xử lý theo Chính sách Bảo mật.</p>
              <h3>9.2 Chấm dứt bởi Savina</h3>
              <p>Savina có quyền tạm ngưng hoặc chấm dứt tài khoản của bạn nếu:</p>
              <ul>
                <li>Vi phạm các Điều khoản Dịch vụ này.</li>
                <li>Vi phạm chính sách của TikTok hoặc các nền tảng bên thứ ba.</li>
                <li>Hoạt động gian lận, lạm dụng hoặc gây hại cho hệ thống.</li>
                <li>Theo yêu cầu của cơ quan có thẩm quyền.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>10. Bồi thường</h2>
              <p>Bạn đồng ý bồi thường và giữ cho Savina, các giám đốc, nhân viên và đối tác không bị thiệt hại từ bất kỳ khiếu nại, tổn thất hoặc chi phí (bao gồm phí luật sư) phát sinh từ:</p>
              <ul>
                <li>Việc bạn vi phạm các Điều khoản này.</li>
                <li>Nội dung bạn đăng tải thông qua dịch vụ.</li>
                <li>Việc bạn vi phạm quyền của bên thứ ba.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>11. Sửa đổi Điều khoản</h2>
              <p>Savina có quyền sửa đổi các Điều khoản này. Thay đổi quan trọng sẽ được thông báo qua email hoặc trên nền tảng ít nhất 15 ngày trước khi có hiệu lực. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi có hiệu lực đồng nghĩa với việc bạn chấp nhận điều khoản mới.</p>
            </div>

            <div className="legal-section">
              <h2>12. Luật Áp dụng và Giải quyết Tranh chấp</h2>
              <p>Các Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết thông qua thương lượng thiện chí. Nếu không đạt được thỏa thuận trong 30 ngày, tranh chấp sẽ được đưa ra Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) tại Hà Nội để giải quyết.</p>
            </div>

            <div className="legal-section">
              <h2>13. Liên hệ</h2>
              <p>Mọi thắc mắc về Điều khoản Dịch vụ, vui lòng liên hệ:</p>
              <div className="legal-highlight">
                <p><strong>Công ty TNHH Đầu tư Quốc tế Savina</strong></p>
                <p>Tầng 12, Tòa nhà Mipec, 229 Tây Sơn, Kim Liên, Đống Đa, Hà Nội, Việt Nam</p>
                <p>Email: <a href="mailto:info@savina.vn">info@savina.vn</a></p>
                <p>Điện thoại: 0979 286 220</p>
                <p>Website: <a href="https://savina.vn">savina.vn</a></p>
              </div>
            </div>

            {/* English */}
            <hr className="legal-divider" />

            <h2 className="legal-english-heading">Terms of Service (English Translation)</h2>
            <p className="legal-english-note"><em>This English translation is provided for reference. In case of any discrepancy, the Vietnamese version shall prevail.</em></p>

            <div className="legal-section">
              <h2>1. Introduction</h2>
              <p>Welcome to the <strong>SAVINA AIOS</strong> (AI Operation System) platform, registered app name: <strong>savina-content-app</strong>, operated by Savina International Investment Co., Ltd. ("Savina", "we", "us"). SAVINA AIOS (savina-content-app) is a multi-platform content management solution serving educational institutions, businesses, and content creators in producing, publishing, and analyzing content performance across social media platforms, including TikTok.</p>
              <p>By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of the service.</p>
            </div>

            <div className="legal-section">
              <h2>2. Service Description</h2>
              <p>Savina provides the SAVINA AIOS (savina-content-app) platform with the following key features:</p>
              <ul>
                <li><strong>Automated content production:</strong> AI-powered creation of images, videos, and text for education enrollment activities.</li>
                <li><strong>Multi-platform content management:</strong> Automated posting, scheduling, and management of content across social media platforms including TikTok, Facebook, YouTube, and others.</li>
                <li><strong>TikTok integration:</strong> Through TikTok API, AIOS enables users to publish videos, manage content, access analytics data, and engage with audiences on TikTok.</li>
                <li><strong>Performance analytics:</strong> Collection and analysis of content performance data across platforms, including TikTok Analytics metrics.</li>
                <li><strong>Enrollment support:</strong> Supporting enrollment activities for partner universities (Thanh Dong University, Dong Thap University) targeting Vietnamese students in Vietnam, Japan, South Korea, and Taiwan.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>3. User Accounts</h2>
              <p>To use the service, you must create an account and provide accurate, complete information. You must be at least 18 years old or have the consent of a legal guardian. You are responsible for maintaining the confidentiality of your login credentials. When linking your TikTok account to AIOS, you authorize us to perform permitted actions on TikTok on your behalf via the TikTok API. You may unlink your account at any time.</p>
            </div>

            <div className="legal-section">
              <h2>4. TikTok Integration and API Usage</h2>
              <div className="legal-highlight">
                <p>Use of AIOS TikTok integration features must comply with <strong>TikTok's Terms of Service</strong> and <strong>TikTok Developer Policies</strong>. In case of conflict, TikTok's terms shall prevail for TikTok-related features.</p>
              </div>
              <p>You bear full responsibility for content published to TikTok through AIOS. Content must comply with TikTok's Community Guidelines and Vietnamese law. You may revoke AIOS's TikTok access at any time.</p>
            </div>

            <div className="legal-section">
              <h2>5. Content and Intellectual Property</h2>
              <p>You retain all intellectual property rights to original content you upload or create through AIOS. You grant Savina a non-exclusive license to process, display, and publish content as directed by you. AI-generated content is licensed for your use within the scope of the service. The AIOS platform is Savina's intellectual property protected under Vietnamese law and international treaties.</p>
            </div>

            <div className="legal-section">
              <h2>6. User Obligations</h2>
              <p>You agree not to use the service for illegal purposes, upload infringing content, post harmful or misleading content, attempt unauthorized system access, use unauthorized automated tools, or violate TikTok's or other third-party platform policies.</p>
            </div>

            <div className="legal-section">
              <h2>7. Limitation of Liability</h2>
              <p>The service is provided on an "as-is" basis. To the extent permitted by law, Savina shall not be liable for service interruptions, data loss due to third-party failures (including TikTok API), consequences of TikTok policy changes, indirect or consequential damages, or user-generated content. Total liability shall not exceed fees paid in the preceding 12 months.</p>
            </div>

            <div className="legal-section">
              <h2>8. Termination</h2>
              <p>You may terminate your account at any time. Savina may suspend or terminate your account for violations of these Terms, TikTok policy violations, fraudulent activity, or legal requirements.</p>
            </div>

            <div className="legal-section">
              <h2>9. Governing Law and Dispute Resolution</h2>
              <p>These Terms are governed by the laws of Vietnam. Disputes shall be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to the Vietnam International Arbitration Centre (VIAC) in Hanoi.</p>
            </div>

            <div className="legal-section">
              <h2>10. Contact</h2>
              <div className="legal-highlight">
                <p><strong>Savina International Investment Co., Ltd.</strong></p>
                <p>12th Floor, Mipec Building, 229 Tay Son, Kim Lien, Dong Da, Hanoi, Vietnam</p>
                <p>Email: <a href="mailto:info@savina.vn">info@savina.vn</a></p>
                <p>Phone: +84 979 286 220</p>
                <p>Website: <a href="https://savina.vn">savina.vn</a></p>
              </div>
            </div>

            <div className="legal-nav">
              <Link to="/privacy-policy">Chính sách Bảo mật / Privacy Policy →</Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
