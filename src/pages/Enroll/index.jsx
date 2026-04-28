/**
 * Enrollment funnel — /dang-ky
 * 4 steps: Course → Personal → Context → Confirm.
 * Save progress to localStorage. Submit POST /api/enrollments/ via API.js.
 *
 * Phase 1.D — main conversion funnel.
 */
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Form, Input, Select, DatePicker, Button, Steps, message, Result, Alert,
} from 'antd';
import {
  CheckCircleOutlined, ArrowLeftOutlined, ArrowRightOutlined, EditOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import usePageMeta from 'hooks/usePageMeta';
import useEnrollmentForm from 'hooks/useEnrollmentForm';
import coursesData from 'data/courses.json';
import { submitEnrollment } from '../../API';
import { trackEvent } from 'hooks/useTrackEvent';
import './EnrollPage.css';

const { courses, universities } = coursesData;
const { TextArea } = Input;

export default function EnrollPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const initialCourseSlug = searchParams.get('course') || '';

  // Pre-fill from URL ?course=slug
  const initialFromQuery = (() => {
    if (!initialCourseSlug) return {};
    const found = courses.find((c) => c.slug === initialCourseSlug);
    if (!found) return {};
    return {
      course_slug: found.slug,
      course_name: found.name,
      university: found.university,
    };
  })();

  const { data, updateData, step, setStep, reset } = useEnrollmentForm(initialFromQuery);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [registrationId, setRegistrationId] = useState(null);

  usePageMeta(t('enroll.title') + ' - Savina', t('enroll.tagline'));

  // Track step view mỗi khi step thay đổi
  useEffect(() => {
    trackEvent('enrollment_step_view', {
      step,
      course_slug: data.course_slug || null,
      university: data.university || null,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();

  // Sync form ↔ state when step changes (load existing values)
  useEffect(() => {
    form1.setFieldsValue({ university: data.university, course_slug: data.course_slug });
    form2.setFieldsValue({
      full_name: data.full_name, email: data.email, phone: data.phone,
      dob: data.dob ? dayjs(data.dob) : null, hometown: data.hometown,
    });
    form3.setFieldsValue({
      current_country: data.current_country, current_job: data.current_job,
      existing_qualification: data.existing_qualification, note: data.note,
    });
  }, [step, data, form1, form2, form3]);

  const universityCourses = data.university
    ? courses.filter((c) => c.university === data.university)
    : courses;

  const handleNextStep1 = async () => {
    try {
      const v = await form1.validateFields();
      const found = courses.find((c) => c.slug === v.course_slug);
      updateData({
        university: v.university,
        course_slug: v.course_slug,
        course_name: found?.name || '',
      });
      setStep(2);
    } catch {}
  };

  const handleNextStep2 = async () => {
    try {
      const v = await form2.validateFields();
      updateData({
        full_name: v.full_name,
        email: v.email,
        phone: v.phone,
        dob: v.dob ? v.dob.format('YYYY-MM-DD') : '',
        hometown: v.hometown || '',
      });
      setStep(3);
    } catch {}
  };

  const handleNextStep3 = async () => {
    try {
      const v = await form3.validateFields();
      updateData({
        current_country: v.current_country,
        current_job: v.current_job || '',
        existing_qualification: v.existing_qualification,
        note: v.note || '',
      });
      setStep(4);
    } catch {}
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const payload = {
        course_slug: data.course_slug,
        course_name: data.course_name,
        university: data.university,
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        dob: data.dob || null,
        hometown: data.hometown || '',
        current_country: data.current_country,
        current_job: data.current_job || '',
        existing_qualification: data.existing_qualification,
        note: data.note || '',
        utm_source: searchParams.get('utm_source') || '',
        utm_medium: searchParams.get('utm_medium') || '',
        utm_campaign: searchParams.get('utm_campaign') || '',
      };
      const result = await submitEnrollment(payload);
      setRegistrationId(result.registration_id);
      trackEvent('enrollment_complete', {
        registration_id: result.registration_id,
        course_slug: data.course_slug,
        university: data.university,
        current_country: data.current_country,
      });
      reset();
    } catch (err) {
      const status = err?.response?.status;
      if (status === 429) {
        setSubmitError(t('enroll.error.rateLimit'));
      } else {
        const detail = err?.response?.data
          ? JSON.stringify(err.response.data)
          : t('enroll.error.generic');
        setSubmitError(detail);
      }
    } finally {
      setSubmitting(false);
    }
  };

  // SUCCESS view
  if (registrationId) {
    return (
      <section className="enroll-success">
        <Result
          icon={<CheckCircleOutlined style={{ color: '#2B8E96' }} />}
          status="success"
          title={t('enroll.success.title')}
          subTitle={
            <div>
              <p>{t('enroll.success.code')}:</p>
              <div className="enroll-reg-code">{registrationId}</div>
              <p style={{ marginTop: 16 }}>{t('enroll.success.desc')}</p>
            </div>
          }
          extra={[
            <Link to="/" key="home" className="page-cta-secondary">
              {t('enroll.success.homeBtn')}
            </Link>,
            <Link to="/chuong-trinh" key="courses" className="page-cta">
              {t('enroll.success.viewCourses')}
            </Link>,
          ]}
        />
      </section>
    );
  }

  const stepItems = [
    { title: t('enroll.step.course') },
    { title: t('enroll.step.personal') },
    { title: t('enroll.step.context') },
    { title: t('enroll.step.confirm') },
  ];

  return (
    <>
      <section className="page-hero">
        <h1>{t('enroll.title')}</h1>
        <p>{t('enroll.tagline')}</p>
      </section>

      <section className="enroll-section">
        <div className="enroll-inner">
          <Steps current={step - 1} items={stepItems} responsive size="small" />

          <div className="enroll-form-card">
            {/* STEP 1 — Course */}
            {step === 1 && (
              <Form form={form1} layout="vertical" requiredMark={false} size="large">
                <h2>{t('enroll.step.course')}</h2>

                <Form.Item
                  name="university"
                  label={t('enroll.field.university')}
                  rules={[{ required: true, message: t('enroll.validation.required') }]}
                >
                  <Select
                    placeholder={t('enroll.field.university')}
                    onChange={(v) => {
                      form1.setFieldValue('course_slug', undefined);
                      updateData({ university: v, course_slug: '', course_name: '' });
                    }}
                    options={universities.map((u) => ({ value: u.code, label: u.fullName }))}
                  />
                </Form.Item>

                <Form.Item
                  name="course_slug"
                  label={t('enroll.field.course')}
                  rules={[{ required: true, message: t('enroll.validation.required') }]}
                >
                  <Select
                    placeholder={t('enroll.field.course')}
                    showSearch
                    optionFilterProp="label"
                    options={universityCourses.map((c) => ({ value: c.slug, label: c.name }))}
                  />
                </Form.Item>

                <div className="enroll-actions">
                  <span />
                  <Button type="primary" size="large" onClick={handleNextStep1}>
                    {t('enroll.btn.next')} <ArrowRightOutlined />
                  </Button>
                </div>
              </Form>
            )}

            {/* STEP 2 — Personal */}
            {step === 2 && (
              <Form form={form2} layout="vertical" requiredMark={false} size="large">
                <h2>{t('enroll.step.personal')}</h2>

                <Form.Item
                  name="full_name"
                  label={t('enroll.field.fullName')}
                  rules={[{ required: true, message: t('enroll.validation.required') }]}
                >
                  <Input placeholder={t('enroll.field.fullName')} />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={t('enroll.field.email')}
                  rules={[
                    { required: true, message: t('enroll.validation.required') },
                    { type: 'email', message: t('enroll.validation.email') },
                  ]}
                >
                  <Input placeholder="email@example.com" />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label={t('enroll.field.phone')}
                  rules={[
                    { required: true, message: t('enroll.validation.required') },
                    { min: 8, message: t('enroll.validation.phone') },
                  ]}
                >
                  <Input placeholder="0913 187 386" />
                </Form.Item>

                <Form.Item name="dob" label={t('enroll.field.dob')}>
                  <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
                </Form.Item>

                <Form.Item name="hometown" label={t('enroll.field.hometown')}>
                  <Input placeholder="VD: Nam Định" />
                </Form.Item>

                <div className="enroll-actions">
                  <Button size="large" onClick={() => setStep(1)}>
                    <ArrowLeftOutlined /> {t('enroll.btn.back')}
                  </Button>
                  <Button type="primary" size="large" onClick={handleNextStep2}>
                    {t('enroll.btn.next')} <ArrowRightOutlined />
                  </Button>
                </div>
              </Form>
            )}

            {/* STEP 3 — Context */}
            {step === 3 && (
              <Form form={form3} layout="vertical" requiredMark={false} size="large">
                <h2>{t('enroll.step.context')}</h2>

                <Form.Item
                  name="current_country"
                  label={t('enroll.field.currentCountry')}
                  rules={[{ required: true, message: t('enroll.validation.required') }]}
                >
                  <Select
                    options={['VN', 'JP', 'KR', 'TW', 'OTHER'].map((c) => ({
                      value: c,
                      label: t(`enroll.country.${c}`),
                    }))}
                  />
                </Form.Item>

                <Form.Item name="current_job" label={t('enroll.field.currentJob')}>
                  <Input placeholder="VD: Thợ cơ khí, Nhân viên văn phòng..." />
                </Form.Item>

                <Form.Item
                  name="existing_qualification"
                  label={t('enroll.field.qualification')}
                  rules={[{ required: true, message: t('enroll.validation.required') }]}
                >
                  <Select
                    options={['thpt', 'trung_cap', 'cao_dang', 'dai_hoc', 'other'].map((q) => ({
                      value: q,
                      label: t(`enroll.qualification.${q}`),
                    }))}
                  />
                </Form.Item>

                <Form.Item name="note" label={t('enroll.field.note')}>
                  <TextArea rows={3} placeholder={t('enroll.field.note')} />
                </Form.Item>

                <div className="enroll-actions">
                  <Button size="large" onClick={() => setStep(2)}>
                    <ArrowLeftOutlined /> {t('enroll.btn.back')}
                  </Button>
                  <Button type="primary" size="large" onClick={handleNextStep3}>
                    {t('enroll.btn.next')} <ArrowRightOutlined />
                  </Button>
                </div>
              </Form>
            )}

            {/* STEP 4 — Confirm */}
            {step === 4 && (
              <div>
                <h2>{t('enroll.review.title')}</h2>

                {submitError && (
                  <Alert type="error" showIcon message={submitError} style={{ marginBottom: 24 }} />
                )}

                <ReviewBlock
                  title={t('enroll.step.course')}
                  onEdit={() => setStep(1)}
                  rows={[
                    [t('enroll.field.university'),
                     universities.find((u) => u.code === data.university)?.fullName],
                    [t('enroll.field.course'), data.course_name],
                  ]}
                  t={t}
                />
                <ReviewBlock
                  title={t('enroll.step.personal')}
                  onEdit={() => setStep(2)}
                  rows={[
                    [t('enroll.field.fullName'), data.full_name],
                    [t('enroll.field.email'), data.email],
                    [t('enroll.field.phone'), data.phone],
                    [t('enroll.field.dob'), data.dob],
                    [t('enroll.field.hometown'), data.hometown],
                  ]}
                  t={t}
                />
                <ReviewBlock
                  title={t('enroll.step.context')}
                  onEdit={() => setStep(3)}
                  rows={[
                    [t('enroll.field.currentCountry'), t(`enroll.country.${data.current_country}`)],
                    [t('enroll.field.currentJob'), data.current_job],
                    [t('enroll.field.qualification'), t(`enroll.qualification.${data.existing_qualification}`)],
                    [t('enroll.field.note'), data.note],
                  ]}
                  t={t}
                />

                <div className="enroll-actions" style={{ marginTop: 32 }}>
                  <Button size="large" onClick={() => setStep(3)} disabled={submitting}>
                    <ArrowLeftOutlined /> {t('enroll.btn.back')}
                  </Button>
                  <Button
                    type="primary"
                    size="large"
                    onClick={handleSubmit}
                    loading={submitting}
                  >
                    {submitting ? t('enroll.btn.submitting') : t('enroll.btn.submit')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ReviewBlock({ title, rows, onEdit, t }) {
  return (
    <div className="enroll-review-block">
      <div className="enroll-review-header">
        <h3>{title}</h3>
        <Button type="link" icon={<EditOutlined />} onClick={onEdit} size="small">
          {t('enroll.review.edit')}
        </Button>
      </div>
      <dl className="enroll-review-rows">
        {rows.filter(([, v]) => v !== '' && v != null).map(([k, v]) => (
          <React.Fragment key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}
