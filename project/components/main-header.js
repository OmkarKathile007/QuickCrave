import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
    return (
        <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="a plate with food in it" priority/>
          Next Level Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="../app/meals">Meals</Link>
                </li>
                <li>
                    <Link href="../app/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
        </header>
    );
}