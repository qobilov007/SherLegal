"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { getContactInfo } from "../../../../../../constants/page";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage")
  const contact = getContactInfo;

  const mapUrl = `https://www.google.com/maps?&q=Parkent+Street+51,+Tashkent&hl=en&output=embed`;

  return (
    <div className="relative w-full md:h-[550px] h-[450px] mb-20">
      {/* MAP */}
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        className="md:absolute inset-0 z-0 rounded-2xl max-md:mb-[190px]"
        loading="lazy"
        allowFullScreen
      ></iframe>

      {/* CONTACT CARD */}
      {contact.map((item, id) => (
        <div
          key={id}
          className="md:absolute top-[55%] left-[100px] mt-7 md:transform -translate-y-1/2 z-10 w-full sm:w-[310px] bg-white bg-opacity-90 rounded-xl shadow-lg p-6 space-y-4 text-gray-800"
        >
          <h2 className="text-2xl font-semibold font-inter">{t("contacttitle2")}</h2>

          {/* PHONE */}
          <div className="group flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <Link href={`tel:${item.phone}`} target="_blank">
              <p className="text-sm font-vk">{t("contactphone")}</p>
              <p className="font-medium font-vk group-hover:underline-none">
                {item.phone}
              </p>
            </Link>
          </div>

          {/* EMAIL */}
          <div className="group flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <Link href={`mailto:${item.email}`} target="_blank">
              <p className="text-sm font-vk">{t("contactemail")}</p>
              <p className="font-medium font-vk group-hover:underline-none">
                {item.email}
              </p>
            </Link>
          </div>

          {/* WEBSITE */}
          <div className="flex items-center gap-3">
            <FaGlobe className="text-blue-600" />
            <div className="group">
              <p className="text-sm font-vk">{t("contactweb")}</p>
              <Link
                href={item.website}
                target="_blank"
                aria-label="website url"
                rel="noopener noreferrer"
                className="font-medium font-vk group-hover:underline-none"
              >
                <p className="font-medium font-vk group-hover:underline-none">
                  {item.website}
                </p>
              </Link>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="group flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <Link
              href={"https://yandex.uz/maps/-/CHgpuL00"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm font-vk">{t("contactaddress")}</p>
              <p className="font-medium font-vk group-hover:underline-none">
                {item.address}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
