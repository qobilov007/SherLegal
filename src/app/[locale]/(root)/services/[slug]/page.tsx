import BackButton from "@/src/components/btn/BackBtn";
import { ServiceItems } from "@/app.types";

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/services/${slug}`,
    { cache: "no-store" }
  );

  const data: ServiceItems = await res.json();

  // Backenddan til bo‘yicha name/description olish
  const name =
    (data[`title_${locale}` as keyof ServiceItems] as string) || data.name;
  const description =
    (data[`content_${locale}` as keyof ServiceItems] as string) ||
    data.description;

  return (
    <section>
      <article className="md:pt-[124px] pt-[100px] container">
        <BackButton />

        <div className="md:mb-[40px] sm:mb-5 mb-3">
          <h1 className="font-bold font-inter md:text-[40px] sm:text-[32px] text-[24px] leading-[130%] md:mb-[12px] mb-1">
            {name}
          </h1>
          <p className="font-normal font-inter md:text-[20px] text-[14px] leading-[130%]">
            {description}
          </p>
        </div>

        <div>
          <h1 className="font-inter font-bold md:text-[32px] sm:text-[26px] text-[22px] leading-[120%] text-[#080808] md:pb-[32px] pb-4">
            What we offer?
          </h1>
          <article className="md:space-y-5 space-y-2.5">
            {data.details.map((detail, index) => {
              const detailName =
                detail[`name_${locale}` as keyof typeof detail] ||
                detail.name;
              const detailDescription =
                detail[`description_${locale}` as keyof typeof detail] ||
                detail.description;

              return (
                <div
                  key={index}
                  className="md:p-[24px] bg-[#FFFFFF] shadow-sm md:rounded-[12px] md:border"
                >
                  <h1 className="font-bold font-inter md:text-[24px] text-[20px] leading-[130%] text-[#080808] md:pb-[12px] pb-1.5">
                    {detailName as string}
                  </h1>
                  <p className="md:text-[14px] text-[12px] font-normal font-inter text-[#080808] leading-[130%]">
                    {detailDescription as string}
                  </p>
                </div>
              );
            })}
          </article>
        </div>
      </article>
    </section>
  );
}
