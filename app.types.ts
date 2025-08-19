import { StaticImageData } from "next/image";



export type FAQItem = {
  question: string;
  answer: string;
};


export interface TeamsType {
    id?: string;
    teamImg: StaticImageData;
    names: string;
    desc: string;
  }