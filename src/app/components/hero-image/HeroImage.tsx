import { type FC } from "react";
import Image from "next/image";
import styles from "./HeroImage.module.scss";

type Layout = "half-half" | "one-two" | "two-one";

interface Props {
  image: string;
  title: string;
  description: string;
  lazy?: boolean;
  align?: "left" | "right";
  layout?: Layout;
}

export const HeroImage: FC<Props> = ({
  image,
  title,
  description,
  layout,
  align,
  lazy
}) => {
  let mainClassName = styles.heroImage;
  if (layout) {
    mainClassName += ` ${styles[layout]}`;
  }
  if (align) {
    mainClassName += ` ${styles[align]}`;
  }

  return (
    <div className={mainClassName}>
      <div className={styles.imageContainer}>
        <Image fill={true} src={image} alt="Hero" priority={!lazy} />
      </div>
      <div className={styles.textContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
