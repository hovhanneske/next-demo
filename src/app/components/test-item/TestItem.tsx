"use client";
import { useTranslations } from "next-intl";

import { FC } from "react";
import { Button } from "../button/Button";

export const TestItem: FC = () => {
  const t = useTranslations("Button");

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <Button label={t("click_here")} variant="primary" onClick={handleClick} />
      <Button label={t("click_here")} variant="info" onClick={handleClick} />
      <Button label={t("click_here")} variant="warn" onClick={handleClick} />
      <Button label={t("click_here")} variant="danger" onClick={handleClick} />
    </div>
  );
};
