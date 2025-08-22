import NavbarLayout from "../../../components/Navbar/NavbarLayout";
import FooterPage from "../../../components/Footer/page";
import { Suspense } from "react";
import Loading from "../loading";
import Contact from "@/src/components/Forma";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavbarLayout />
      <Suspense fallback={<Loading />}>
        <main>{children}</main>
        <Contact/>
        <FooterPage />
      </Suspense>
    </div>
  );
}
