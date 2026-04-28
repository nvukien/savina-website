import React, { useState } from 'react';
import { Form, Input, Row, Col, message } from 'antd';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import '../pages.css';

const { TextArea } = Input;

// EmailJS config — read from env (Vite expose VITE_*)
// See .env.example for template; .env is gitignored.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  usePageMeta(t('contact.title') + ' - Savina', t('contact.subtitle'));

  const onFinish = async (values) => {
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone || 'Không cung cấp',
          subject: values.subject || 'Liên hệ từ website',
          message: values.message,
          to_email: 'info@savina.vn',
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      form.resetFields();
      message.success('Gửi thành công! Chúng tôi sẽ phản hồi sớm nhất.');
    } catch (error) {
      console.error('EmailJS error:', error);
      message.error('Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua hotline.');
    } finally {
      setSending(false);
    }
  };

  const contactItems = [
    { icon: <EnvironmentOutlined />, label: t('contact.info.address') },
    { icon: <PhoneOutlined />, label: t('contact.info.phone') },
    { icon: <MailOutlined />, label: t('contact.info.email') },
    { icon: <ClockCircleOutlined />, label: t('contact.info.hours') },
  ];

  return (
    <>
      <section className="page-hero">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.subtitle')}</p>
      </section>

      <section style={{ background: '#fff' }}>
        <FadeInSection>
          <div className="page-section">
            <div className="contact-grid">
              <div>
                <h2>{t('contact.form.submit', 'Gửi tin nhắn')}</h2>

                {sent ? (
                  <div style={{
                    textAlign: 'center',
                    padding: '60px 24px',
                    background: '#f0fdfa',
                    borderRadius: 12,
                    border: '1px solid rgba(43, 142, 150, 0.2)',
                  }}>
                    <CheckCircleOutlined style={{ fontSize: 48, color: '#2B8E96', marginBottom: 16 }} />
                    <h3 style={{ color: '#134e4a', marginBottom: 8 }}>Cảm ơn bạn đã liên hệ!</h3>
                    <p style={{ color: '#6b7280' }}>Chúng tôi sẽ phản hồi trong vòng 24 giờ.</p>
                    <button
                      className="submit-btn"
                      style={{ marginTop: 16 }}
                      onClick={() => setSent(false)}
                    >
                      Gửi tin nhắn khác
                    </button>
                  </div>
                ) : (
                  <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                    <Row gutter={16}>
                      <Col xs={24} sm={12}>
                        <Form.Item name="name" label={t('contact.form.name')} rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}>
                          <Input placeholder={t('contact.form.name')} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item name="email" label={t('contact.form.email')} rules={[{ required: true, type: 'email', message: 'Email không hợp lệ' }]}>
                          <Input placeholder={t('contact.form.email')} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xs={24} sm={12}>
                        <Form.Item name="phone" label={t('contact.form.phone')}>
                          <Input placeholder={t('contact.form.phone')} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item name="subject" label={t('contact.form.subject')}>
                          <Input placeholder={t('contact.form.subject')} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item name="message" label={t('contact.form.message')} rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}>
                      <TextArea rows={5} placeholder={t('contact.form.message')} />
                    </Form.Item>
                    <Form.Item>
                      <button type="submit" className="submit-btn" disabled={sending}>
                        {sending ? (
                          <><LoadingOutlined style={{ marginRight: 8 }} /> Đang gửi...</>
                        ) : (
                          t('contact.form.submit')
                        )}
                      </button>
                    </Form.Item>
                  </Form>
                )}
              </div>

              <div>
                <h2>{t('contact.title')}</h2>
                <div className="contact-info-list">
                  {contactItems.map((item, idx) => (
                    <div className="contact-info-item" key={idx}>
                      <div className="contact-info-icon">{item.icon}</div>
                      <span className="contact-info-text">{item.label}</span>
                    </div>
                  ))}
                </div>
                <iframe
                  title="Vị trí văn phòng Savina — Mipec Tower, 229 Tây Sơn, Hà Nội"
                  src="https://www.google.com/maps?q=Mipec+Tower+229+T%C3%A2y+S%C6%A1n+Ng%C3%A3+T%C6%B0+S%E1%BB%9F+H%C3%A0+N%E1%BB%99i&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: 12, marginTop: 24 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
