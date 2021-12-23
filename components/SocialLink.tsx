import styles from "./SocialLink.module.css";

export interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactElement;
}

export default function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a className={styles.socialLink} href={href}>
      <span className={styles.icon} role="presentation">
        {icon}
      </span>
      {label}
    </a>
  );
}
