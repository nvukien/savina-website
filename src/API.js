/**
 * API client cho Savina backend.
 * Base URL từ env (VITE_API_BASE) — fallback localhost dev.
 */
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api';

export const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

/**
 * POST /api/enrollments/ — submit form 4 bước (public, rate-limited).
 * @returns {Promise<{registration_id: string, message: string}>}
 */
export async function submitEnrollment(payload) {
  const res = await apiClient.post('/enrollments/', payload);
  return res.data;
}
