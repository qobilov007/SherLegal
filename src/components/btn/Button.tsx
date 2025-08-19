"use client";

import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  title: string;
  link?: string;
  onClick?: () => void;
  icon?: ReactNode; // icon qo'shildi
  iconPosition?: "left" | "right"; // icon qayerda chiqishi
  className?: string;
}

export default function Button({
  title,
  link,
  onClick,
  icon,
  iconPosition = "right",
  className,
}: ButtonProps) {
  const baseStyle =
    "inline-flex group w-max items-center gap-2 px-6 py-3 hover:shadow-lg hover:shadow-red-600 rounded-full bg-[linear-gradient(90deg,#CB1612_0%,#650B09_100%)] text-white font-inter font-medium hover:opacity-90 transition";

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {title}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (link) {
    return (
      <Link href={link} className={`${baseStyle} ${className || ""}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${className || ""}`}
    >
      {content}
    </button>
  );
}
