import { StaticImageData } from "next/image";



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


export interface TeamsType {
    id?: string;
    teamImg: StaticImageData;
    names: string;
    desc: string;
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
