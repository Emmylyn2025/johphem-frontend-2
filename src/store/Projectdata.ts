import type { Project } from '../types/project';

/**
 * TODO: placeholder data — replace with a useProjects() TanStack Query hook
 * against GET /api/projects once lib/api-client.ts and hooks/ exist
 * (PRD §4, §7.6). IDs/titles below are kept in sync with the project links
 * already referenced from Home's FeaturedProjects and the Services page's
 * relatedProjects, so those links resolve to something real here.
 */
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Lekki Commercial Complex',
    category: 'Commercial',
    location: 'Lekki, Lagos',
    timeline: '2023–2024',
    scope:
      '[Placeholder] Design-build of a multi-tenant commercial complex, from foundation to fit-out.',
    servicesProvided: ['Structural Design', 'Building Construction', 'Project Supervision'],
    challengesSolved:
      '[Placeholder] Coastal soil conditions required a revised foundation approach mid-project.',
    images: [],
  },
  {
    id: 2,
    title: 'Ikorodu Road Rehabilitation',
    category: 'Road Construction',
    location: 'Ikorodu, Lagos',
    timeline: '2022–2023',
    scope:
      '[Placeholder] Full rehabilitation of a major arterial road, including drainage overhaul.',
    servicesProvided: ['Civil Engineering', 'Infrastructure', 'Project Supervision'],
    challengesSolved:
      '[Placeholder] Maintained traffic flow throughout construction via phased lane closures.',
    images: [],
  },
  {
    id: 3,
    title: 'Abuja Telecom Mast Network',
    category: 'Telecom',
    location: 'Abuja, FCT',
    timeline: '2021–2022',
    scope:
      '[Placeholder] Structural design and installation supervision for a multi-site telecom mast rollout.',
    servicesProvided: ['Structural Design', 'Infrastructure'],
    challengesSolved:
      '[Placeholder] Coordinated access and permitting across multiple site owners.',
    images: [],
  },
  {
    id: 4,
    title: 'Victoria Island Residential Towers',
    category: 'Residential',
    location: 'Victoria Island, Lagos',
    timeline: '2023',
    scope:
      '[Placeholder] Structural design and construction oversight for a residential tower development.',
    servicesProvided: ['Structural Design', 'Building Construction'],
    challengesSolved:
      '[Placeholder] Tight urban site required a revised logistics and staging plan.',
    images: [],
  },
  {
    id: 5,
    title: 'Port Harcourt Water Treatment Facility',
    category: 'Infrastructure',
    location: 'Port Harcourt, Rivers',
    timeline: '2022',
    scope:
      '[Placeholder] Civil works and supervision for a municipal water treatment facility upgrade.',
    servicesProvided: ['Civil Engineering', 'Infrastructure', 'Project Supervision'],
    challengesSolved:
      '[Placeholder] Upgraded capacity without interrupting the existing treatment operation.',
    images: [],
  },
];