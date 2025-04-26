"use client";

import { FC } from "react";
import styles from "./Button.module.scss";

interface CummonProps {
  label: string;
}

interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "info" | "danger" | "secondary" | "warn";
  size?: "small" | "medium" | "large";
}

interface LinkProps {
  href: string;
  target?: "_blank" | "_self";
  variant: "link";
}

type Props = CummonProps & (ButtonProps | LinkProps);

export const Button: FC<Props> = (props) => {
  if (props.variant === "link") {
    const { label, href, target } = props;

    return (
      <a className={styles.link} href={href} target={target || "_self"}>
        {label}
      </a>
    );
  }

  const { label, onClick, size, variant } = props;
  const buttonClassName = `${styles.button} ${styles[variant || "primary"]} ${
    styles[size || "medium"]
  }`;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {label}
    </button>
  );
};
