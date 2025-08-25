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
    "group boxshadow rounded-[1000px]  bg-[#C61511] p-[16px] inline-flex gap-[8px] items-center justify-between text-white text-[12px] sm:text-[20px] font-inter font-[600]";

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
