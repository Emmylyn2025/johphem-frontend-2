export interface JobApplicationPayload {
  jobId: number;
  fullName: string;
  email: string;
  phone: string;
  coverLetter: string;
  cv: File; // multipart, ≤2MB, pdf/doc/docx
}

export interface JobOpening {
  id: number;
  title: string;
  type: 'full_time' | 'internship' | 'apprenticeship';
  description: string;
  location: string;
}