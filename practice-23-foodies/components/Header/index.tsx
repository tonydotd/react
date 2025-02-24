import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logo.png";
import styles from "./styles.module.css";
import HeaderBackground from "../HeaderBackground";
import NavLink from "../NavLink";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImage} alt="A plate with a food on it" priority />
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
