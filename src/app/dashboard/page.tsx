"use client"
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getSession, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Loading from '../../Components/Loading/index.'
import { TextArea } from '../../Components/TextArea'
import { FaShare, FaTrash } from 'react-icons/fa'
import { FiShare2 } from 'react-icons/fi'

export default function dashboard() {
  const [input, setInput] = useState('')
  const [publictask, setPublicTask] = useState(false)


  const { data: session, status } = useSession();

  function handlerChangePublic(event: ChangeEvent<HTMLInputElement>) {
      
      setPublicTask(event.target.checked)
    }

    function handlerRegisterTask(event: FormEvent) {
      event.preventDefault();
      if(input == '') return;

      alert('teste')
    }

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
              <form onSubmit={handlerRegisterTask}>
                <TextArea
                  value={input}
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)}
                  placeholder='Digite qual sua terafa'
                />
                <div className={styles.checkboxarea}>
                  <input 
                  type="checkbox" 
                  className={styles.checkbox}
                  checked={publictask} 
                  onChange={handlerChangePublic}
                  />
                  <label htmlFor="">Deixa Tarefa Publica</label>
                </div>
                <button type='submit' className={styles.button}>Enviar</button>
              </form>
            </div>
          </section>

          <section className={styles.teskContainer}>
            <h1>Minhas Tarefas</h1>

            <article className={styles.task}>
              <div className={styles.tagContainer}>
                <label className={styles.tag}>PUBLICO</label>
                <button className={styles.shareButton}>
                  <FiShare2 size={22} color='#896BFF' />
                </button>
              </div>
              <div className={styles.taskContent}>
                <p>Minha tarefa de exemplo</p>
                <button className={styles.trashButton}>
                  <FaTrash size={24} color='#ea3140' />
                </button>
              </div>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}
