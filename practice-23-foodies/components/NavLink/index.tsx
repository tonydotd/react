"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: Props) {
  const path = usePathname();

  let classes = styles.link;
  if (path.startsWith(href)) {
    classes += " " + styles.active;
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
