import { z } from 'zod';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB, mirrors the backend's own limit (PRD §7.4)
const ACCEPTED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const jobApplicationSchema = z.object({
  jobId: z.coerce.number().min(1, 'Please select a position.'),
  fullName: z.string().min(2, 'Full name is required.'),
  email: z.string().email('Enter a valid email address.'),
  phone: z.string().min(7, 'Enter a valid phone number.'),
  coverLetter: z.string().min(20, 'Tell us a bit more — at least 20 characters.'),
  cv: z
    .instanceof(FileList, { message: 'A CV file is required.' })
    .refine((files) => files.length === 1, 'A CV file is required.')
    .refine(
      (files) => files[0]?.size <= MAX_FILE_SIZE,
      'File must be 2MB or smaller.'
    )
    .refine(
      (files) => ACCEPTED_CV_TYPES.includes(files[0]?.type),
      'Only PDF, DOC, or DOCX files are accepted.'
    ),
});

export type JobApplicationFormValues = z.infer<typeof jobApplicationSchema>;