import React from 'react'
import Head from 'next/head'
import api from '../services/api'
import { CoachProvider } from '../contexts/CoachContext'

interface ILesson {
  id: number
  name: string
  time: number
  content: string
  done: boolean
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
      <div>
        <Head>
          <title>Homepage</title>
        </Head>

        <main>
          <h1>Hello World</h1>
        </main>
      </div>
    </CoachProvider>
  )
}

export async function getServerSideProps() {
  const content = []
  let name = ''

  await api('content').then(response => {
    // console.log(response.data)
    name = response.data.name
    for (const i in response.data.lessons) {
      content.push({
        id: response.data.lessons[i].id,
        name: response.data.lessons[i].name,
        time: response.data.lessons[i].time,
        content: response.data.lessons[i].content,
        done: response.data.lessons[i].done,
        next: response.data.lessons[i].next
      })
    }
  })

  // console.log(name, content)
  const currentExperience = 0

  return {
    props: { name, content, currentExperience }
  }
}
