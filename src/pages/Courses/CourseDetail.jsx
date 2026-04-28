/**
 * Course Detail page — /chuong-trinh/:slug
 * Phase 1.C full version: hero + sticky info + tabs (Description / Curriculum / Faculty / FAQ)
 * + Schema.org Course + FAQPage JSON-LD.
 */
import React, { useMemo, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { trackEvent } from 'hooks/useTrackEvent';
import { Tabs, Collapse } from 'antd';
import {
  ArrowLeftOutlined, ArrowRightOutlined,
  BankOutlined, ClockCircleOutlined, CheckCircleOutlined,
  ReadOutlined, TeamOutlined, QuestionCircleOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import coursesData from 'data/courses.json';
import './CourseDetail.css';
import '../pages.css';

const { courses, universities, fields } = coursesData;

/**
 * Curriculum placeholder — 8 học kỳ chuẩn ĐH 4 năm.
 * Khi Sếp có data thật từ trường, swap trong courses.json hoặc CMS.
 */
const PLACEHOLDER_CURRICULUM = [
  { semester: 1, name: 'Học kỳ 1 — Đại cương', credits: 16, subjects: ['Triết học Mác - Lênin', 'Tiếng Anh 1', 'Tin học cơ bản', 'Pháp luật đại cương'] },
  { semester: 2, name: 'Học kỳ 2 — Đại cương', credits: 16, subjects: ['Kinh tế chính trị', 'Tiếng Anh 2', 'Toán cao cấp', 'Cơ sở văn hóa Việt Nam'] },
  { semester: 3, name: 'Học kỳ 3 — Cơ sở ngành', credits: 17, subjects: ['Môn cơ sở 1', 'Môn cơ sở 2', 'Môn cơ sở 3', 'Tự chọn 1'] },
  { semester: 4, name: 'Học kỳ 4 — Cơ sở ngành', credits: 17, subjects: ['Môn cơ sở 4', 'Môn cơ sở 5', 'Môn cơ sở 6', 'Tự chọn 2'] },
  { semester: 5, name: 'Học kỳ 5 — Chuyên ngành', credits: 16, subjects: ['Chuyên ngành 1', 'Chuyên ngành 2', 'Chuyên ngành 3', 'Tự chọn 3'] },
  { semester: 6, name: 'Học kỳ 6 — Chuyên ngành', credits: 16, subjects: ['Chuyên ngành 4', 'Chuyên ngành 5', 'Chuyên ngành 6', 'Tự chọn 4'] },
  { semester: 7, name: 'Học kỳ 7 — Nâng cao', credits: 16, subjects: ['Nâng cao 1', 'Nâng cao 2', 'Thực tập tốt nghiệp', 'Tự chọn 5'] },
  { semester: 8, name: 'Học kỳ 8 — Tốt nghiệp', credits: 16, subjects: ['Khóa luận tốt nghiệp / Học phần thay thế', 'Chuyên đề tốt nghiệp 1', 'Chuyên đề tốt nghiệp 2'] },
];

/**
 * Faculty placeholder — Sếp swap khi có data thật.
 */
const PLACEHOLDER_FACULTY = [
  { name: '[Demo] TS. Nguyễn Văn A', title: 'Giảng viên chính', desc: 'Tiến sĩ chuyên ngành, 15 năm kinh nghiệm giảng dạy.' },
  { name: '[Demo] ThS. Trần Thị B', title: 'Giảng viên thỉnh giảng', desc: 'Thạc sĩ, đang công tác tại doanh nghiệp.' },
  { name: '[Demo] PGS. TS. Lê Văn C', title: 'Trưởng khoa', desc: 'Phó giáo sư, tác giả nhiều giáo trình chuẩn.' },
];

const FAQ_ITEMS = [
  {
    q: 'Bằng cấp đào tạo từ xa có giá trị tương đương hệ chính quy không?',
    a: 'Có. Theo Luật Giáo dục Đại học và Thông tư 10/2017/TT-BGDĐT, bằng tốt nghiệp đại học hệ đào tạo từ xa có giá trị tương đương bằng đại học chính quy về mọi quyền lợi (học cao học, dự thi công chức, nâng ngạch...). Bằng do hiệu trưởng trường đại học cấp, được Bộ GD&ĐT công nhận.',
  },
  {
    q: 'Người Việt đang ở Nhật Bản, Hàn Quốc, Đài Loan có học được không?',
    a: 'Hoàn toàn được. Chương trình học 100% online qua hệ thống e-learning. Học viên chỉ cần có kết nối internet ổn định và máy tính/laptop. Một số môn có thi cuối kỳ trực tuyến hoặc tại điểm tổ chức của trường tại Nhật Bản (đối với một số ngành/trường có liên kết).',
  },
  {
    q: 'Tôi đã tốt nghiệp Trung cấp/Cao đẳng, có được rút ngắn thời gian học không?',
    a: 'Có. Trường sẽ xét miễn giảm học phần theo hồ sơ học bạ. Người có bằng Trung cấp được rút ngắn còn 2.5–3 năm; Cao đẳng còn 1.5–2 năm. Người đã có bằng Đại học khác có thể học lấy bằng 2 trong 2 năm.',
  },
  {
    q: 'Học phí có thể đóng theo từng học kỳ hay không?',
    a: 'Có. Học phí được tính theo tín chỉ và đóng theo từng học kỳ. Học viên đăng ký bao nhiêu tín chỉ thì đóng bấy nhiêu, không cần đóng toàn khóa một lần.',
  },
  {
    q: 'Lịch học và thời gian học diễn ra như thế nào?',
    a: 'Học viên chủ động xem video bài giảng và tài liệu trên hệ thống bất cứ lúc nào. Lịch live (nếu có) và lịch thi do trường công bố theo từng học kỳ. Phù hợp với người vừa làm vừa học.',
  },
  {
    q: 'Quy trình đăng ký và xét tuyển ra sao?',
    a: 'Đăng ký qua form trên website Savina, gửi hồ sơ (bản scan/sao công chứng học bạ + giấy tờ tùy thân) qua email hoặc bưu điện. Trường xét tuyển dựa trên học bạ — không thi đầu vào. Sau khi trúng tuyển, học viên hoàn thành nhập học online và bắt đầu học theo lịch.',
  },
];

export default function CourseDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const course = courses.find((c) => c.slug === slug);
  if (!course) return <Navigate to="/chuong-trinh" replace />;

  const university = universities.find((u) => u.code === course.university);
  const field = fields.find((f) => f.code === course.field);

  usePageMeta(
    `${course.name} - ${university?.shortName} | Savina`,
    course.tagline,
  );

  useEffect(() => {
    trackEvent('course_view', {
      course_slug: course.slug,
      university: course.university,
      field: course.field,
    });
  }, [course.slug, course.university, course.field]);

  const tuitionLabel = course.tuition?.perCredit
    ? `${course.tuition.perCredit.toLocaleString('vi-VN')}đ / tín chỉ`
    : 'Liên hệ tư vấn';

  const totalSubjects = useMemo(
    () => PLACEHOLDER_CURRICULUM.reduce((sum, s) => sum + s.subjects.length, 0),
    []
  );

  return (
    <>
      {/* Hero */}
      <section className="course-detail-hero">
        <div className="course-detail-hero-inner">
          <Link to="/chuong-trinh" className="course-detail-back">
            <ArrowLeftOutlined /> {t('courses.title')}
          </Link>
          <span className={`course-card-field course-card-field--${field?.code} course-detail-field-badge`}>
            {field?.name}
          </span>
          <h1>{course.name}</h1>
          <p className="course-detail-tagline">{course.tagline}</p>
          <div className="course-detail-uni">
            <BankOutlined /> {university?.fullName} ({university?.shortName})
          </div>
        </div>
      </section>

      {/* Sticky info bar */}
      <div className="course-info-bar">
        <div className="course-info-bar-inner">
          <div className="course-info-item">
            <ClockCircleOutlined />
            <div>
              <div className="course-info-label">Thời gian</div>
              <div className="course-info-value">{course.duration?.default} năm · {course.totalCredits} tín chỉ</div>
            </div>
          </div>
          <div className="course-info-item">
            <TrophyOutlined />
            <div>
              <div className="course-info-label">Bằng cấp</div>
              <div className="course-info-value">Cử nhân chính quy</div>
            </div>
          </div>
          <div className="course-info-item">
            <ReadOutlined />
            <div>
              <div className="course-info-label">Hình thức</div>
              <div className="course-info-value">Học online 100%</div>
            </div>
          </div>
          <div className="course-info-item course-info-tuition">
            <div>
              <div className="course-info-label">Học phí</div>
              <div className="course-info-value">{tuitionLabel}</div>
            </div>
          </div>
          <Link to={`/dang-ky?course=${course.slug}`} className="course-info-cta">
            Đăng ký ngay <ArrowRightOutlined />
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <section className="course-detail-content">
        <FadeInSection>
          <Tabs
            defaultActiveKey="overview"
            size="large"
            items={[
              {
                key: 'overview',
                label: <span><ReadOutlined /> Mô tả</span>,
                children: (
                  <div className="course-tab-pane">
                    <h2>Mô tả chương trình</h2>
                    <p>{course.description}</p>

                    <h3 style={{ marginTop: 32 }}>Đầu ra</h3>
                    <ul className="course-bullet-list">
                      {(course.outcomes || []).map((o, i) => (
                        <li key={i}><CheckCircleOutlined /> {o}</li>
                      ))}
                    </ul>

                    <h3 style={{ marginTop: 32 }}>Yêu cầu đầu vào</h3>
                    <ul className="course-bullet-list">
                      {(course.admissionRequirements || []).map((r, i) => (
                        <li key={i}><CheckCircleOutlined /> {r}</li>
                      ))}
                    </ul>

                    {course.decisionNumber && (
                      <div className="course-decision-box">
                        Quyết định ban hành chương trình:{' '}
                        <strong>{course.decisionNumber}</strong> · Ngày:{' '}
                        <strong>{course.decisionDate}</strong>
                      </div>
                    )}
                  </div>
                ),
              },
              {
                key: 'curriculum',
                label: <span><ReadOutlined /> Chương trình học</span>,
                children: (
                  <div className="course-tab-pane">
                    <div className="curriculum-summary">
                      <span><strong>{course.totalCredits}</strong> tín chỉ</span>
                      <span>·</span>
                      <span><strong>8</strong> học kỳ</span>
                      <span>·</span>
                      <span><strong>{totalSubjects}+</strong> học phần</span>
                    </div>
                    <p className="placeholder-note">
                      <em>* Khung chương trình tham khảo. Chương trình chi tiết xem tại quyết định ban hành của trường.</em>
                    </p>

                    <div className="curriculum-grid">
                      {PLACEHOLDER_CURRICULUM.map((s) => (
                        <div className="semester-card" key={s.semester}>
                          <div className="semester-header">
                            <span className="semester-num">HK {s.semester}</span>
                            <span className="semester-credits">{s.credits} tín chỉ</span>
                          </div>
                          <div className="semester-name">{s.name}</div>
                          <ul className="semester-subjects">
                            {s.subjects.map((sub, i) => <li key={i}>{sub}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                key: 'faculty',
                label: <span><TeamOutlined /> Giảng viên</span>,
                children: (
                  <div className="course-tab-pane">
                    <p className="placeholder-note">
                      <em>* Đây là thông tin minh họa. Danh sách giảng viên thật sẽ được cập nhật khi học viên nhập học.</em>
                    </p>
                    <div className="faculty-grid">
                      {PLACEHOLDER_FACULTY.map((f, i) => (
                        <div className="faculty-card" key={i}>
                          <div className="faculty-avatar">{f.name.split(' ').slice(-1)[0][0]}</div>
                          <h4>{f.name}</h4>
                          <div className="faculty-title">{f.title}</div>
                          <p>{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                key: 'faq',
                label: <span><QuestionCircleOutlined /> Câu hỏi thường gặp</span>,
                children: (
                  <div className="course-tab-pane">
                    <Collapse
                      items={FAQ_ITEMS.map((item, i) => ({
                        key: i,
                        label: <strong>{item.q}</strong>,
                        children: <p>{item.a}</p>,
                      }))}
                      defaultActiveKey={[0]}
                      ghost
                      size="large"
                    />
                  </div>
                ),
              },
            ]}
          />
        </FadeInSection>

        {/* CTA section */}
        <FadeInSection>
          <div className="course-bottom-cta">
            <h3>Sẵn sàng bắt đầu hành trình mới với {course.name}?</h3>
            <p>Đăng ký để nhận tư vấn miễn phí trong 24 giờ.</p>
            <Link to={`/dang-ky?course=${course.slug}`} className="page-cta">
              Đăng ký ngay <ArrowRightOutlined />
            </Link>
          </div>
        </FadeInSection>
      </section>

      {/* Sticky mobile CTA */}
      <Link to={`/dang-ky?course=${course.slug}`} className="course-mobile-sticky-cta">
        Đăng ký ngay
      </Link>

      {/* Schema.org Course + FAQPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": course.name,
          "description": course.description,
          "provider": {
            "@type": "EducationalOrganization",
            "name": university?.fullName,
            "sameAs": university?.website,
          },
          "educationalCredentialAwarded": "Cử nhân (Bachelor's degree)",
          "courseMode": "online",
          "timeRequired": `P${course.duration?.default}Y`,
          "inLanguage": "vi-VN",
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a },
          })),
        })}
      </script>
    </>
  );
}
