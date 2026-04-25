/**
 * SectionHeader — reusable section header with tag + title + description
 */
import React from 'react';

export default function SectionHeader({ tag, title, description, light = false }) {
  return (
    <div className={`section-header ${light ? 'section-header--light' : ''}`}>
      {tag && <div className="section-tag">{tag}</div>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
