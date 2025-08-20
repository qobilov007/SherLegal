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

  export type NewsCard = {
    id:number;
    img:string;
    title: string;
    description: string;
    views: number;
    date: string;
  }
