import React from 'react'
import Head from 'next/head'
import api from '../services/api'
import { CoachProvider } from '../contexts/CoachContext'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { HomePage } from '../styles'
import Main from '../components/Main'

interface ILesson {
  id: number
  name: string
  time: number
  content: string
  done: boolean
  type: string
  next: number
}

interface HomeProps {
  name: string
  content: ILesson[]
  currentExperience: number
}

export default function Home(props: HomeProps) {
  return (
    <CoachProvider
      name={props.name}
      content={props.content}
      currentExperience={props.currentExperience}
    >
      <HomePage>
        <Head>
          <title>Homepage</title>
        </Head>

        <SideBar />
        <div>
          <Header />

          <main>
            <Main />
          </main>
        </div>
      </HomePage>
    </CoachProvider>
  )
}

export async function getServerSideProps() {
  let content = []
  let name = ''

  await api('content').then(response => {
    name = response.data.name
    content = response.data.lessons
  })

  const currentExperience = 0

  return {
    props: { name, content, currentExperience }
  }
}
