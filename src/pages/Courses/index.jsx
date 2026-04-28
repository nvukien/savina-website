/**
 * Courses catalog page — /chuong-trinh
 * Filter theo trường + lĩnh vực + search + sort. URL sync filter qua query params.
 */
import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Select, Input, Empty, Button } from 'antd';
import { SearchOutlined, FilterOutlined, CloseOutlined } from '@ant-design/icons';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import CourseCard from 'components/CourseCard';
import coursesData from 'data/courses.json';
import { trackEvent } from 'hooks/useTrackEvent';
import './CoursesPage.css';

const { courses, universities, fields } = coursesData;

function getUniversity(code) {
  return universities.find((u) => u.code === code);
}
function getField(code) {
  return fields.find((f) => f.code === code);
}

export default function Courses() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [uniFilter, setUniFilter] = useState(searchParams.get('uni') || 'all');
  const [fieldFilter, setFieldFilter] = useState(searchParams.get('field') || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'name');

  usePageMeta(
    t('courses.title') + ' - Savina',
    t('courses.tagline'),
  );

  // Sync state → URL params + track filter change
  useEffect(() => {
    const params = {};
    if (uniFilter !== 'all') params.uni = uniFilter;
    if (fieldFilter !== 'all') params.field = fieldFilter;
    if (searchQuery) params.q = searchQuery;
    if (sortBy !== 'name') params.sort = sortBy;
    setSearchParams(params, { replace: true });

    // Debounced track — chỉ event khi user dừng thao tác 500ms
    const timer = setTimeout(() => {
      trackEvent('course_filter_change', {
        uni: uniFilter,
        field: fieldFilter,
        has_search: Boolean(searchQuery),
        sort: sortBy,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [uniFilter, fieldFilter, searchQuery, sortBy, setSearchParams]);

  // Filter + sort logic
  const filteredCourses = useMemo(() => {
    let result = courses.slice();

    if (uniFilter !== 'all') {
      result = result.filter((c) => c.university === uniFilter);
    }
    if (fieldFilter !== 'all') {
      result = result.filter((c) => c.field === fieldFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter((c) =>
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        (c.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'tuitionAsc':
          return (a.tuition?.perCredit || Infinity) - (b.tuition?.perCredit || Infinity);
        case 'tuitionDesc':
          return (b.tuition?.perCredit || -1) - (a.tuition?.perCredit || -1);
        case 'newest':
          return (b.decisionDate || '').localeCompare(a.decisionDate || '');
        case 'name':
        default:
          return a.name.localeCompare(b.name, 'vi');
      }
    });

    return result;
  }, [uniFilter, fieldFilter, searchQuery, sortBy]);

  const hasActiveFilters =
    uniFilter !== 'all' || fieldFilter !== 'all' || searchQuery !== '' || sortBy !== 'name';

  const resetFilters = () => {
    setUniFilter('all');
    setFieldFilter('all');
    setSearchQuery('');
    setSortBy('name');
  };

  return (
    <>
      <section className="page-hero">
        <h1>{t('courses.title')}</h1>
        <p>{t('courses.tagline')}</p>
      </section>

      {/* Filter bar (sticky) */}
      <section className="courses-filter-bar">
        <div className="courses-filter-inner">
          <div className="courses-filter-group">
            <FilterOutlined className="courses-filter-icon" />
            <Select
              value={uniFilter}
              onChange={setUniFilter}
              className="courses-filter-select"
              size="large"
              placeholder={t('courses.filter.university')}
              options={[
                { value: 'all', label: t('courses.filter.all') + ' ' + t('courses.filter.university').toLowerCase() },
                ...universities.map((u) => ({ value: u.code, label: u.name })),
              ]}
            />
          </div>

          <div className="courses-filter-group">
            <Select
              value={fieldFilter}
              onChange={setFieldFilter}
              className="courses-filter-select"
              size="large"
              placeholder={t('courses.filter.field')}
              options={[
                { value: 'all', label: t('courses.filter.all') + ' ' + t('courses.filter.field').toLowerCase() },
                ...fields.map((f) => ({ value: f.code, label: f.name })),
              ]}
            />
          </div>

          <div className="courses-filter-group courses-filter-group--grow">
            <Input
              prefix={<SearchOutlined />}
              placeholder={t('courses.filter.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="large"
              allowClear
            />
          </div>

          <div className="courses-filter-group">
            <Select
              value={sortBy}
              onChange={setSortBy}
              className="courses-filter-select"
              size="large"
              options={[
                { value: 'name', label: t('courses.sort.name') },
                { value: 'tuitionAsc', label: t('courses.sort.tuitionAsc') },
                { value: 'tuitionDesc', label: t('courses.sort.tuitionDesc') },
                { value: 'newest', label: t('courses.sort.newest') },
              ]}
            />
          </div>

          {hasActiveFilters && (
            <Button
              icon={<CloseOutlined />}
              onClick={resetFilters}
              size="large"
              type="text"
              className="courses-filter-reset"
            >
              {t('courses.filter.reset')}
            </Button>
          )}
        </div>
      </section>

      {/* Result */}
      <section className="courses-list-section">
        <div className="courses-result-meta">
          {t('courses.result.found', { count: filteredCourses.length })}
        </div>

        {filteredCourses.length === 0 ? (
          <div className="courses-empty">
            <Empty
              description={
                <div>
                  <h3>{t('courses.empty.title')}</h3>
                  <p>{t('courses.empty.desc')}</p>
                </div>
              }
            >
              <Button type="primary" onClick={resetFilters}>
                {t('courses.empty.cta')}
              </Button>
            </Empty>
          </div>
        ) : (
          <div className="courses-grid">
            {filteredCourses.map((course, idx) => (
              <FadeInSection key={course.slug} delay={Math.min(idx, 6) * 0.05}>
                <CourseCard
                  course={course}
                  university={getUniversity(course.university)}
                  field={getField(course.field)}
                />
              </FadeInSection>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
