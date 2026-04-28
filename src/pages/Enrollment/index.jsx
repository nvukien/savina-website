import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BankOutlined, CheckCircleOutlined, GlobalOutlined, ClockCircleOutlined } from '@ant-design/icons';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import SectionHeader from 'components/SectionHeader';
import '../pages.css';

const universities = [
  {
    name: 'Đại học Thành Đông',
    desc: 'Hệ thống e-learning trực tuyến bảo mật cao, dễ sử dụng. Học phí 370.000 VNĐ/tín chỉ. Thời gian đào tạo 4 năm (tốt nghiệp THPT), 2.5-3 năm (trung cấp), 1.5 năm (cao đẳng trở lên).',
    highlights: ['Bằng đại học chính quy', 'Học 100% online', 'Đa ngành nghề'],
  },
  {
    name: 'Đại học Đồng Tháp',
    desc: '11 ngành đào tạo từ xa đa dạng, từ kinh tế, kỹ thuật đến khoa học xã hội và nông nghiệp. Lệ phí xét tuyển 150.000 VNĐ. Đáp ứng nhu cầu phát triển nguồn nhân lực khu vực.',
    highlights: ['11 ngành đào tạo', 'Chi phí hợp lý', 'Chuẩn quốc gia'],
  },
];

const benefits = [
  { icon: <GlobalOutlined />, title: 'Học mọi nơi', desc: 'Phù hợp cho lao động tại Nhật Bản, Hàn Quốc, Đài Loan và Việt Nam' },
  { icon: <ClockCircleOutlined />, title: 'Linh hoạt thời gian', desc: 'Học online 100%, tự sắp xếp lịch học phù hợp công việc' },
  { icon: <CheckCircleOutlined />, title: 'Bằng chính quy', desc: 'Bằng tốt nghiệp có giá trị tương đương hệ đại học chính quy' },
  { icon: <BankOutlined />, title: 'Trường uy tín', desc: 'Liên kết với ĐH Thành Đông và ĐH Đồng Tháp — được Bộ GD&ĐT công nhận' },
];

export default function Enrollment() {
  const { t } = useTranslation();
  usePageMeta(t('nav.enrollment') + ' - Savina', t('services.enrollment.desc'));

  return (
    <>
      <section className="page-hero">
        <h1>{t('nav.enrollment')}</h1>
        <p>{t('services.enrollment.tagline')}</p>
      </section>

      {/* Benefits */}
      <section style={{ background: '#fff' }}>
        <FadeInSection>
          <div className="page-section">
            <SectionHeader
              title="Vì sao chọn học ĐH từ xa qua Savina?"
              description="Savina là đơn vị liên kết tuyển sinh đại học từ xa, giúp người Việt Nam trong nước và tại nước ngoài có cơ hội lấy bằng đại học chính quy mà không cần đến trường."
            />
            <div className="values-grid">
              {benefits.map((b, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <div className="value-card">
                    <div className="value-number" style={{ background: 'rgba(43, 142, 150, 0.1)', color: '#2B8E96', fontSize: 24 }}>
                      {b.icon}
                    </div>
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Universities */}
      <section style={{ background: '#f8fafc' }}>
        <FadeInSection>
          <div className="page-section">
            <SectionHeader
              title="Trường đại học liên kết"
              description="Savina hợp tác với các trường đại học được Bộ Giáo dục & Đào tạo công nhận"
            />
            <div className="uni-grid">
              {universities.map((uni, idx) => (
                <FadeInSection key={uni.name} delay={idx * 0.15}>
                  <div className="uni-card">
                    <div className="mv-icon"><BankOutlined /></div>
                    <h3>{uni.name}</h3>
                    <p>{uni.desc}</p>
                    <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {uni.highlights.map((h) => (
                        <span key={h} style={{
                          background: 'rgba(43, 142, 150, 0.08)',
                          color: '#134e4a',
                          padding: '4px 12px',
                          borderRadius: 20,
                          fontSize: 13,
                          fontWeight: 500,
                        }}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Link to="/contact" className="page-cta">
                {t('cta.button')}
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
