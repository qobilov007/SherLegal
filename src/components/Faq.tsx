import { getFaqs } from "@/lib/getFaqs";
import Questions from "./question/Question";

export default async function QuestionsPage() {
  const question = await getFaqs();

  return (
    <div className="container md:py-10 py-5">
      <div
        className="flex items-center justify-between max-sm:flex-col gap-1 md:pb-[28px] pb-[20px]"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1
          className="lg:text-[48px] md:text-4xl text-3xl font-vk leading-[100%] max-sm:text-center font-bold text-[black]"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          F.A.Q
        </h1>
      </div>
      <Questions question={question} />
    </div>
  );
}
