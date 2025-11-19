export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  description: string;
  image: string;
}