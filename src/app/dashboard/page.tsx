"use client"
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { getSession, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Loading from '../../Components/Loading/index.'
import { TextArea } from '../../Components/TextArea'

export default function dashboard() {

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!session) {

      redirect('/')
    }
  }, [session, status]);

  if (status === "loading") {
    return <Loading />
  }

  return (
    <>
      <title>Meu Painel de tarefas</title>
      <div className={styles.container}>
        <main className={styles.main}>
            <section className={styles.content}>
              <div className={styles.contentForm}>
                <h1 className={styles.title}>Qual sua Tarefa ?</h1>

                <TextArea/>
              </div>
            </section>
        </main>
      </div>
    </>
  );
}
