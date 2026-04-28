import React from 'react';
import { useTranslation } from 'react-i18next';
import { AimOutlined, EyeOutlined, ReadOutlined, RobotOutlined, TeamOutlined } from '@ant-design/icons';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import SectionHeader from 'components/SectionHeader';
import '../pages.css';

const values = [
  { titleVi: 'Học vấn cho thời đại mới', desc: 'Bằng cấp đại học chính quy + năng lực AI thực chiến — kết hợp nền tảng truyền thống với công cụ của thời đại.' },
  { titleVi: 'Tiện lợi cho người đi làm', desc: 'Học 100% online, linh hoạt thời gian. Phù hợp với người Việt đang sống và làm việc tại VN, Nhật, Hàn, Đài Loan.' },
  { titleVi: 'Thực tế và đo lường được', desc: 'Khoá học thiết kế theo nhu cầu công việc thật. Học xong có sản phẩm, có chứng chỉ, có lộ trình nghề rõ ràng.' },
  { titleVi: 'Đối tác đáng tin cậy', desc: 'Liên kết với các trường đại học được Bộ GD&ĐT Việt Nam công nhận. Bằng tốt nghiệp có giá trị tương đương hệ chính quy.' },
];

const bizAreas = [
  { icon: <ReadOutlined />, title: 'SAVINA EDU', desc: 'Tuyển sinh đại học từ xa hợp tác với các trường đại học VN. Cấp bằng đại học chính quy được Bộ GD&ĐT công nhận, học 100% online.' },
  { icon: <RobotOutlined />, title: 'SAVINA AI', desc: 'Platform e-learning tích hợp AI tutor + các khoá đào tạo kỹ năng AI thực chiến cho cá nhân, doanh nghiệp và đơn vị giáo dục.' },
  { icon: <TeamOutlined />, title: 'SAVINA TALENT', desc: 'AI Career Test, hướng nghiệp trong kỷ nguyên AI và giới thiệu nhân sự chất lượng cao đã được đào tạo bằng cấp + năng lực AI.' },
];

export default function About() {
  const { t } = useTranslation();
  usePageMeta(t('about.title') + ' - Savina', t('about.story.content'));

  return (
    <>
      <section className="page-hero">
        <h1>{t('about.title')}</h1>
        <p>{t('about.tagline')}</p>
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
