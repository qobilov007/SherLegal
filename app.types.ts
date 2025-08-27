import { StaticImageData } from "next/image";

export type Partner = {
  name: string;
  link: string;
  logo: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export interface ContactData {
  phone: string;
  email: string;
  website: string;
  address: string;
}

export type ServiceItems = {
  icon: string;
  name: string;
  description: string;
  slug: string;
  details: Detail[];
};

interface Detail {
  name: string;
  description: string;
}

export type WhyChooseType = {
  name: string;
  description: string;
  icon: StaticImageData;
  color: string;
};

export interface TeamsType {
  id?: string;
  image: string;
  full_name: string;
  description: string;
}

export type LessonCard = {
  id: number;
  number: number;
  title: string;
  description: string;
};

export type NewsCard = {
  id: number;
  image: string;
  title_uz: string;
  content_uz: string;
  views: number;
  date: string;
  slug: string;
  created_at: string;
};
