import type { JobOpening } from '../types/Jobapplication';

/**
 * TODO: placeholder data — replace with a useJobs() TanStack Query hook
 * against GET /api/jobs once lib/api-client.ts and hooks/ exist
 * (PRD §4, §7.6).
 */
export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 1,
    title: 'Site Civil Engineer',
    type: 'full_time',
    description:
      '[Placeholder] Oversee civil works execution and quality on active construction sites.',
    location: 'Lagos, Nigeria',
  },
  {
    id: 2,
    title: 'Structural Engineering Intern',
    type: 'internship',
    description:
      '[Placeholder] Support the structural design team on live project drawings and calculations.',
    location: 'Lagos, Nigeria',
  },
  {
    id: 3,
    title: 'Construction Apprentice',
    type: 'apprenticeship',
    description:
      '[Placeholder] Hands-on training across site supervision, safety, and quality control.',
    location: 'Abuja, FCT',
  },
];