import type { LucideIcon } from 'lucide-react';
import { Ruler, Layers, Building2, HardHat, ClipboardCheck } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  industries: string[];
  relatedProjects: { id: number; title: string }[];
}


export const SERVICES: Service[] = [
  {
    slug: 'civil-engineering',
    icon: Ruler,
    title: 'Civil Engineering',
    description:
      '[Placeholder] Site assessment, drainage design, and earthworks engineered to withstand real ground conditions, not just the drawing.',
    benefits: [
      'Reduced rework from proper site assessment upfront',
      'Drainage and grading designed for the actual site, not a template',
      'Engineering sign-off ready for regulatory approval',
    ],
    industries: ['Residential Development', 'Road Construction', 'Telecom'],
    relatedProjects: [{ id: 2, title: 'Ikorodu Road Rehabilitation' }],
  },
  {
    slug: 'structural-design',
    icon: Layers,
    title: 'Structural Design',
    description:
      '[Placeholder] Load-bearing design and structural analysis for buildings and infrastructure, backed by licensed structural engineers.',
    benefits: [
      'Structural drawings that hold up to independent review',
      'Material specification aligned to budget and load requirements',
      'Ongoing design support through construction, not just at handoff',
    ],
    industries: ['Commercial', 'Residential Development', 'Infrastructure'],
    relatedProjects: [{ id: 1, title: 'Lekki Commercial Complex' }],
  },
  {
    slug: 'building-construction',
    icon: Building2,
    title: 'Building Construction',
    description:
      '[Placeholder] End-to-end construction management for residential and commercial builds, from groundbreaking to final inspection.',
    benefits: [
      'Single point of accountability from contract to handover',
      'Transparent progress reporting at every phase',
      'Vetted subcontractor network held to our own QA standard',
    ],
    industries: ['Residential Development', 'Commercial'],
    relatedProjects: [{ id: 1, title: 'Lekki Commercial Complex' }],
  },
  {
    slug: 'infrastructure',
    icon: HardHat,
    title: 'Infrastructure',
    description:
      '[Placeholder] Roads, telecom masts, and utility infrastructure delivered against public- and private-sector timelines.',
    benefits: [
      'Experience working within public procurement requirements',
      'Coordination across multiple stakeholders and utilities',
      'Delivery schedules built around real logistics constraints',
    ],
    industries: ['Road Construction', 'Telecom', 'Public Sector'],
    relatedProjects: [
      { id: 3, title: 'Abuja Telecom Mast Network' },
      { id: 2, title: 'Ikorodu Road Rehabilitation' },
    ],
  },
  {
    slug: 'project-supervision',
    icon: ClipboardCheck,
    title: 'Project Supervision',
    description:
      "[Placeholder] On-site QA/QC oversight from groundbreaking to handover, whether or not we're the general contractor of record.",
    benefits: [
      "Independent quality checks not tied to the contractor's own reporting",
      'Safety compliance monitored daily, not just at milestones',
      'Clear documentation trail for procurement and audit purposes',
    ],
    industries: ['Commercial', 'Residential Development', 'Public Sector'],
    relatedProjects: [{ id: 1, title: 'Lekki Commercial Complex' }],
  },
];