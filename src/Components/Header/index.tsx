

import React from "react";
import styles from "../Header/styles.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";


const { data: session, status } = useSession();
export default function Header() {



  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href={"/"}>
            <h1 className={styles.logo}>
              Tarefas
              <span>+</span>
            </h1>
          </Link>
          <Link className={styles.link} href={"/dashboard"}>
            Meu Painel
          </Link>
        </nav>

        {status === "loading" ? (
          <></>
        ) : session ? (
          <button className={styles.loginButton} onClick={() => signOut()}>
            {session.user?.name}
          </button>
        ): (
          <button className={styles.loginButton} onClick={() => signIn('google')}>
            fazer login
          </button>
        )}
      </section>
    </header>
  );
}
