import Image from "next/image";
import Comments from "@/src/components/Reviews/Reviews";
import Partners from "@/src/components/Partners/Partners";
import Link from "next/link";
import { ServiceItems } from "@/app.types";
import { useLocale, useTranslations } from "next-intl";

export default function ServicesSection({ service }: { service: ServiceItems[] }) {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <div>
      <div className="bg-[#F9F9F9] pt-[68px]">
        <section className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-[40px] font-bold font-inter text-gray-900">
                {t("servicetitle")}
              </h2>
              <p className="text-[#000] mt-2 text-[20px]">
                {t("servicedes")}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {service.map((item, index) => {
              // Backenddagi dinamik name/description fieldlarini olish
              const nameKey = `name_${locale}` as keyof typeof item;
              const descriptionKey = `description_${locale}` as keyof typeof item;

              return (
                <Link href={`/${locale}/services/${item.slug}`} key={index}>
                  <div className="group cursor-pointer h-[200px] max-md:h-[250px] max-sm:h-[200px] rounded-xl p-6 shadow hover:shadow-lg hover:bg-[#fff] ease-linear duration-300">
                    <div className="flex items-center gap-10">
                      <div className="mb-4 min-w-[80px] max-md:min-w-[70px] max-md:max-w-[70px] border-[2px] ease-linear duration-300 h-[80px] p-[16px] max-md:h-[70px] rounded-[24px] group-hover:border-[#137BEA]">
                        <Image
                          src={item.icon}
                          alt="Service"
                          width={48}
                          height={48}
                          className="w-full h-full flex items-center justify-center rounded-full text-2xl mb-4"
                        />
                      </div>
                      <h3 className="text-[24px] max-md:text-[18px] line-clamp-2 font-semibold text-gray-900 mb-2">
                        {item[nameKey] as string}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {item[descriptionKey] as string}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <div>
        <Comments />
      </div>
      <div>
        <Partners />
      </div>
    </div>
  );
}
