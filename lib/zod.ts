"use client";

import { z } from "zod";
import { useTranslations } from "next-intl";

export const useContactSchema = () => {
  const t = useTranslations("ContactPage");

  return z.object({
    names: z.string().min(2, t("names")),
    tashkilot: z.string().trim().min(1, t("tashkilot")),
    description: z.string().min(5, t("description")),
  });
};

export type ContactFormType = z.infer<ReturnType<typeof useContactSchema>>;
