import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ClockCircleOutlined,
  BankOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';

/**
 * CourseCard — single program card hiển thị trong catalog list.
 * Click "Xem chi tiết" → /chuong-trinh/:slug
 * Click "Đăng ký ngay" → /enrollment?course={slug} (Phase 1.D sẽ wire prefill)
 */
export default function CourseCard({ course, university, field }) {
  const { t } = useTranslation();

  const tuitionLabel = course.tuition?.perCredit
    ? t('courses.card.tuitionPerCredit', { amount: course.tuition.perCredit.toLocaleString('vi-VN') })
    : t('courses.card.tuitionContact');

  return (
    <article className="course-card">
      <div className="course-card-header">
        <span className={`course-card-field course-card-field--${field?.code}`}>
          {field?.name}
        </span>
        <span className="course-card-uni">
          <BankOutlined /> {university?.shortName}
        </span>
      </div>

      <h3 className="course-card-title">
        <Link to={`/chuong-trinh/${course.slug}`}>{course.name}</Link>
      </h3>

      <p className="course-card-tagline">{course.tagline}</p>

      <div className="course-card-meta">
        <span className="course-card-meta-item">
          <ClockCircleOutlined /> {t('courses.card.duration', { years: course.duration?.default })}
        </span>
        <span className="course-card-meta-item">
          {t('courses.card.credits', { count: course.totalCredits })}
        </span>
      </div>

      <div className="course-card-tuition">{tuitionLabel}</div>

      <div className="course-card-actions">
        <Link to={`/chuong-trinh/${course.slug}`} className="course-card-btn-secondary">
          {t('courses.card.viewDetail')}
        </Link>
        <Link
          to={`/dang-ky?course=${course.slug}`}
          className="course-card-btn-primary"
        >
          {t('courses.card.register')} <ArrowRightOutlined />
        </Link>
      </div>
    </article>
  );
}
