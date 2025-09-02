"use client";

import NavbarLayout from "../../../components/Navbar/NavbarLayout";
import FooterPage from "../../../components/Footer/page";
import { Suspense } from "react";
import Loading from "../loading";
import Contact from "@/src/components/Forma";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const locale = useLocale()

  // contact chiqmasligi kerak bo'lgan sahifalar
  const hiddenContactPages = [`/${locale}/terms-of-use`, `/${locale}/privacy-policy`];

  const shouldShowContact = !hiddenContactPages.includes(pathname);
  return (
    <div>
      <NavbarLayout />
      <Suspense fallback={<Loading />}>
        <main>{children}</main>
        {shouldShowContact && <Contact />}
        <FooterPage />
      </Suspense>
    </div>
  );
}
