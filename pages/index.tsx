import GithubIcon from "@fortawesome/fontawesome-free/svgs/brands/github.svg";
import LinkedInIcon from "@fortawesome/fontawesome-free/svgs/brands/linkedin.svg";
import MediumIcon from "@fortawesome/fontawesome-free/svgs/brands/medium.svg";
import TwitterIcon from "@fortawesome/fontawesome-free/svgs/brands/twitter.svg";
import FileIcon from "@fortawesome/fontawesome-free/svgs/regular/file.svg";
import Image from "next/image";
import { lazy, Suspense } from "react";
import useRenderBgFx from "../components/BackgroundFX/useRenderBgFx";
import SocialLink from "../components/SocialLink";
import styles from "./index.module.css";

const BackgroundFX = lazy(() => import("../components/BackgroundFX"));

export default function Home() {
  const renderBgFx = useRenderBgFx();

  return (
    <main className={styles.main}>
      <h1 className={styles.headline}>
        <strong className={styles.lead}>Travis Kaufman</strong> is a software
        engineer from New York.
      </h1>
      <div className={styles.headshot}>
        <Image layout="fill" src="/headshot.jpg" alt="A headshot of Travis" />
      </div>
      <ul className={styles.socialLinks}>
        <li>
          <SocialLink
            href="https://github.com/traviskaufman"
            label="GitHub"
            icon={<GithubIcon />}
          />
        </li>
        <li>
          <SocialLink
            href="https://twitter.com/traviskaufman"
            label="Twitter"
            icon={<TwitterIcon />}
          />
        </li>
        <li>
          <SocialLink
            href="https://medium.com/@traviskaufman"
            label="Medium"
            icon={<MediumIcon />}
          />
        </li>
        <li>
          <SocialLink
            href="https://www.linkedin.com/in/traviskaufman-thedeveloper/"
            label="LinkedIn"
            icon={<LinkedInIcon />}
          />
        </li>
        <li>
          <SocialLink href="/resume.pdf" label="Resume" icon={<FileIcon />} />
        </li>
      </ul>
      <Suspense fallback={null}>{renderBgFx && <BackgroundFX />}</Suspense>
    </main>
  );
}
