export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  capabilities: {
    name: string;
    details: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'BUILDING PLANS' | 'RESIDENTIAL' | 'COMMERCIAL' | 'INTERIORS';
  location: string;
  type: string;
  area: string;
  image: string;
  description: string;
  highlights: string[];
  isConcept?: boolean;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  projectLocation: string;
  estimatedBudget: string;
  requirements: string;
}

export type SceneViewKey = 'exterior' | 'floorplan' | 'living' | 'kitchen' | 'bedroom';

export interface HotspotInfo {
  id: string;
  title: string;
  description: string;
  position: [number, number, number];
  specs: string;
}
