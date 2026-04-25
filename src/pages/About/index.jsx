import React from 'react';
import { useTranslation } from 'react-i18next';
import { AimOutlined, EyeOutlined, TeamOutlined, GlobalOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import SectionHeader from 'components/SectionHeader';
import '../pages.css';

const values = [
  { titleVi: 'Chất lượng đào tạo', desc: 'Đặt chất lượng đào tạo làm tiêu chí hàng đầu, trang bị cho người lao động kiến thức, kỹ năng và ngôn ngữ toàn diện.' },
  { titleVi: 'Kết nối trực tiếp', desc: 'Hợp đồng trực tiếp với doanh nghiệp Nhật Bản, đảm bảo quyền lợi và điều kiện làm việc tốt nhất cho lao động.' },
  { titleVi: 'Đồng hành toàn diện', desc: 'Hỗ trợ trước, trong và sau khi lao động xuất cảnh — từ đào tạo, thủ tục đến hỗ trợ tại nước ngoài.' },
  { titleVi: 'Ứng dụng công nghệ', desc: 'Tiên phong ứng dụng công nghệ vào giáo dục từ xa và nông nghiệp, nâng cao hiệu quả đào tạo và sản xuất.' },
];

const bizAreas = [
  { icon: <TeamOutlined />, title: 'SAVINA HR', desc: 'Đào tạo và cung ứng nguồn nhân lực chất lượng cao cho thị trường Nhật Bản. Chương trình đào tạo tiếng Nhật, kỹ năng nghề và văn hóa Nhật Bản.' },
  { icon: <GlobalOutlined />, title: 'SAVINA E-Learning', desc: 'Liên kết tuyển sinh đại học từ xa với ĐH Thành Đông và ĐH Đồng Tháp, phục vụ người Việt Nam tại Nhật Bản, Hàn Quốc, Đài Loan.' },
  { icon: <SafetyCertificateOutlined />, title: 'SAVINA AGRI', desc: 'Tích hợp và ứng dụng công nghệ cao trong nghiên cứu, thử nghiệm và sản xuất nông nghiệp, góp phần phát triển bền vững ngành nông nghiệp.' },
];

export default function About() {
  const { t } = useTranslation();
  usePageMeta(t('about.title') + ' - Savina', t('about.story.content'));

  return (
    <>
      <section className="page-hero">
        <h1>{t('about.title')}</h1>
        <p>{t('footer.desc')}</p>
      </section>

      {/* Story */}
      <section style={{ background: '#fff' }}>
        <FadeInSection>
          <div className="page-section">
            <h2>{t('about.story.title')}</h2>
            <p style={{ maxWidth: 800 }}>{t('about.story.content')}</p>
          </div>
        </FadeInSection>
      </section>

      {/* Business Areas */}
      <section style={{ background: '#f8fafc' }}>
        <FadeInSection>
          <div className="page-section">
            <SectionHeader
              title="Lĩnh vực hoạt động"
              description="Savina hoạt động trong 3 lĩnh vực chiến lược"
            />
            <div className="mv-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {bizAreas.map((area, idx) => (
                <FadeInSection key={area.title} delay={idx * 0.15}>
                  <div className="mv-card">
                    <div className="mv-icon">{area.icon}</div>
                    <h3>{area.title}</h3>
                    <p>{area.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: '#fff' }}>
        <FadeInSection>
          <div className="page-section">
            <div className="mv-grid">
              <div className="mv-card">
                <div className="mv-icon"><AimOutlined /></div>
                <h3>{t('about.mission.title')}</h3>
                <p>{t('about.mission.content')}</p>
              </div>
              <div className="mv-card">
                <div className="mv-icon"><EyeOutlined /></div>
                <h3>{t('about.vision.title')}</h3>
                <p>{t('about.vision.content')}</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Core Values */}
      <section style={{ background: '#f8fafc' }}>
        <FadeInSection>
          <div className="page-section">
            <h2 style={{ textAlign: 'center', marginBottom: 40 }}>
              {t('about.values', 'Giá trị cốt lõi')}
            </h2>
            <div className="values-grid">
              {values.map((val, idx) => (
                <FadeInSection key={val.titleVi} delay={idx * 0.1}>
                  <div className="value-card">
                    <div className="value-number">{idx + 1}</div>
                    <h4>{val.titleVi}</h4>
                    <p>{val.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
