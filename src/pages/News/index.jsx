import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarOutlined, UserOutlined, ArrowRightOutlined } from '@ant-design/icons';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import SectionHeader from 'components/SectionHeader';
import '../pages.css';

/**
 * Phase 0 seed content. Sếp sẽ replace bằng content thật / migrate sang CMS ở Phase 1+.
 */
const articles = [
  {
    slug: 'welcome',
    date: '2026-04-28',
    author: 'Savina Team',
    category: 'Thông báo',
    title: 'Chào mừng đến với Savina — EdTech cho Kỷ nguyên AI',
    excerpt:
      'Savina chính thức ra mắt với sứ mệnh xoá khoảng cách giữa học vấn truyền thống và năng lực AI thời đại mới. Tìm hiểu định hướng và 6 dịch vụ cốt lõi.',
    body: [
      'Học vấn cũ không còn đủ cho thế giới mới. Bằng cấp truyền thống vẫn rất quan trọng — nhưng chưa đủ. Savina ra đời để xoá đi khoảng cách đó.',
      'Chúng tôi cung cấp 6 dịch vụ cốt lõi: tuyển sinh đại học từ xa hợp tác với các trường đại học Việt Nam (cấp bằng chính quy), platform e-learning tích hợp AI, đào tạo kỹ năng AI thực chiến, giải pháp ứng dụng AI cho giáo dục, AI Career Test & hướng nghiệp, và giới thiệu nhân sự chất lượng cao cho doanh nghiệp.',
      'Đối tượng phục vụ: người Việt Nam đang sinh sống và làm việc tại Việt Nam, Nhật Bản, Hàn Quốc, và Đài Loan.',
      'Trong những tháng tới, chúng tôi sẽ chia sẻ kiến thức chuyên sâu về EdTech, AI ứng dụng, hướng nghiệp trong kỷ nguyên AI, và câu chuyện học viên thật. Theo dõi để không bỏ lỡ.',
    ],
  },
  {
    slug: 'bang-cap-va-ai',
    date: '2026-04-28',
    author: 'Savina Team',
    category: 'Định hướng nghề',
    title: 'Vì sao bằng cấp đại học chính quy + năng lực AI là combo của tương lai?',
    excerpt:
      'Trong thế giới AI thay đổi mỗi ngày, bằng cấp truyền thống vẫn quan trọng nhưng chưa đủ. Phân tích vì sao kết hợp 2 yếu tố này là lợi thế cạnh tranh thật.',
    body: [
      'Có một quan niệm phổ biến rằng "AI sẽ thay thế hết bằng cấp". Quan niệm đó vừa đúng, vừa sai.',
      'Đúng ở chỗ: chỉ có bằng cấp mà không biết dùng AI thì giá trị trên thị trường lao động đang suy giảm rõ rệt — đặc biệt trong các ngành đòi hỏi tư duy tổng hợp và xử lý thông tin nhanh.',
      'Sai ở chỗ: bằng cấp đại học chính quy vẫn là bộ lọc đầu tiên của hầu hết doanh nghiệp lớn (đặc biệt là khối FDI Nhật, Hàn, Đài Loan), là cơ sở cho định cư và bảo lãnh, và là nền tảng tư duy có hệ thống mà các khoá học ngắn hạn không thay thế được.',
      'Lợi thế thực sự thuộc về người có cả hai: bằng cấp chính quy (legitimacy + foundational thinking) và năng lực AI ứng dụng (productivity + adaptability). Đây chính là combo Savina đang xây dựng cho học viên — qua tuyển sinh đại học từ xa kết hợp đào tạo kỹ năng AI thực chiến.',
      'Đặc biệt với người Việt đang làm việc tại Nhật, Hàn, Đài Loan — vốn có thu nhập tốt nhưng thường gặp trần phát triển vì thiếu bằng đại học và/hoặc thiếu kỹ năng số — combo này là con đường rõ ràng để bứt phá mà không phải bỏ việc về nước.',
    ],
  },
];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export default function News() {
  const { t } = useTranslation();
  usePageMeta(
    t('nav.news') + ' - Savina',
    'Tin tức, định hướng nghề và kiến thức EdTech AI từ Savina.',
  );

  return (
    <>
      <section className="page-hero">
        <h1>{t('nav.news')}</h1>
        <p>Định hướng nghề · EdTech · AI ứng dụng · Câu chuyện học viên</p>
      </section>

      <section style={{ background: '#fff' }}>
        <FadeInSection>
          <div className="page-section">
            <SectionHeader
              title="Bài viết mới nhất"
              description="Cập nhật tư duy và kỹ năng cho kỷ nguyên AI"
            />

            <div className="news-grid">
              {articles.map((article, idx) => (
                <FadeInSection key={article.slug} delay={idx * 0.1}>
                  <article className="news-card">
                    <div className="news-meta">
                      <span className="news-category">{article.category}</span>
                      <span className="news-meta-item">
                        <CalendarOutlined /> {formatDate(article.date)}
                      </span>
                      <span className="news-meta-item">
                        <UserOutlined /> {article.author}
                      </span>
                    </div>
                    <h2 className="news-title">{article.title}</h2>
                    <p className="news-excerpt">{article.excerpt}</p>
                    <div className="news-body">
                      {article.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </article>
                </FadeInSection>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/contact" className="page-cta">
                Đăng ký tư vấn <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
