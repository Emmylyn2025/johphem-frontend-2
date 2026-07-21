export interface Project {
  id: number;
  title: string;
  category: string; // e.g. "Residential", "Telecom", "Road Construction"
  location: string;
  timeline: string;
  scope: string;
  servicesProvided: string[];
  challengesSolved: string;
  images: string[]; // served from Laravel public folder
}