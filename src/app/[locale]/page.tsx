import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { HeroImage } from "@/app/components/hero-image/HeroImage";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroImage
          image="https://images.unsplash.com/photo-1425082661705-1834bfd09dca"
          title={t("title")}
          description={t("description")}
          layout="two-one"
          align="right"
        />
      </main>
    </div>
  );
}
