/**
 * TestimonialSection — câu chuyện học viên (carousel + Schema.org Review).
 * Render badge "[Demo]" cho entries còn placeholder. Schema.org chỉ output cho entries thật.
 */
import React from 'react';
import { Carousel, Rate } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import FadeInSection from 'components/FadeInSection';
import SectionHeader from 'components/SectionHeader';
import testimonialsData from 'data/testimonials.json';
import './TestimonialSection.css';

const { testimonials } = testimonialsData;

export default function TestimonialSection({ tag = 'Câu chuyện học viên', title = 'Học viên Savina nói gì?' }) {
  // Schema.org Review chỉ render cho entries không phải placeholder
  const realTestimonials = testimonials.filter((t) => !t.isPlaceholder);

  return (
    <section className="testimonial-section">
      <FadeInSection>
        <SectionHeader tag={tag} title={title} />
      </FadeInSection>

      <FadeInSection>
        <div className="testimonial-carousel-wrap">
          <Carousel
            autoplay
            autoplaySpeed={6000}
            dots
            draggable
            slidesToShow={1}
          >
            {testimonials.map((item) => (
              <div key={item.id}>
                <article className="testimonial-card">
                  {item.isPlaceholder && (
                    <div className="testimonial-demo-badge">[Demo]</div>
                  )}

                  <div className="testimonial-quote">
                    <span className="testimonial-quote-mark">"</span>
                    <p>{item.quote}</p>
                  </div>

                  <Rate disabled defaultValue={item.rating} className="testimonial-rate" />

                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{item.avatarInitials}</div>
                    <div className="testimonial-meta">
                      <div className="testimonial-name">{item.name}</div>
                      <div className="testimonial-role">{item.role}</div>
                      <div className="testimonial-location">
                        <EnvironmentOutlined /> {item.location}
                        {item.currentJob && <> · {item.currentJob}</>}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Carousel>
        </div>
      </FadeInSection>

      {/* Schema.org Review — chỉ cho real entries */}
      {realTestimonials.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(
            realTestimonials.map((t) => ({
              "@context": "https://schema.org",
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": 5 },
              "author": { "@type": "Person", "name": t.name },
              "reviewBody": t.quote,
              "datePublished": t.publishedAt,
              "itemReviewed": {
                "@type": "EducationalOrganization",
                "name": "Savina International Investment Co., Ltd.",
              },
            }))
          )}
        </script>
      )}
    </section>
  );
}
