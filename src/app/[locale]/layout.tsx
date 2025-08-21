import "../[locale]/globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";




export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{locale: string}>
}>) {

  const locale =  (await params).locale
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
      </body>
    </html>
  );
}