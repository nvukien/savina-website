import { useState, useEffect, useCallback } from 'react';

/**
 * Persist enrollment funnel state across reload via localStorage.
 * Reset khi submit thành công.
 */
const STORAGE_KEY = 'savina_enrollment_progress';

const DEFAULT_DATA = {
  course_slug: '',
  course_name: '',
  university: '',
  full_name: '',
  email: '',
  phone: '',
  dob: '',
  hometown: '',
  current_country: 'VN',
  current_job: '',
  existing_qualification: 'thpt',
  note: '',
};

export default function useEnrollmentForm(initialData = {}) {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : {};
      return { ...DEFAULT_DATA, ...parsed, ...initialData };
    } catch {
      return { ...DEFAULT_DATA, ...initialData };
    }
  });

  const [step, setStep] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY + '_step');
      return stored ? parseInt(stored, 10) : 1;
    } catch {
      return 1;
    }
  });

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      localStorage.setItem(STORAGE_KEY + '_step', String(step));
    } catch {}
  }, [data, step]);

  const updateData = useCallback((patch) => {
    setData((prev) => ({ ...prev, ...patch }));
  }, []);

  const reset = useCallback(() => {
    setData(DEFAULT_DATA);
    setStep(1);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_KEY + '_step');
    } catch {}
  }, []);

  return { data, updateData, step, setStep, reset };
}
