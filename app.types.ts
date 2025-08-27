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

  export interface NewsCard {
    id: number;
    slug: string;
    title: string;
    description: string;
    title_uz?: string;
    title_en?: string;
    title_ru?: string;
    content_uz?: string;
    content_en?: string;
    content_ru?: string;
    image: string;
    views: number;
    created_at: string;
  }

  export type Stat = {

    clients: string;
    deals: string;
    experience: string;
    projects: string;
  };
