import { time } from 'console'
import { createContext, ReactNode, useState } from 'react'

interface ILesson {
  id: number
  name: string
  time: number
  content: string
  done: boolean
  next: number
}

interface CoachContextData {
  content: ILesson[]
  nameSubject: string
  lesson: ILesson
  nameLesson: string
  haveNext: boolean
  currentExperience: number
  nextLesson: () => void
}

interface CoachProviderProps {
  children: ReactNode
  name: string
  content: ILesson[]
  currentExperience: number
}

export const CoachContext = createContext({} as CoachContextData)

export function CoachProvider({ children, ...rest }: CoachProviderProps) {
  const [content, setContent] = useState<ILesson[]>(rest.content)
  const [lesson, setLesson] = useState<ILesson>(rest.content[0])
  const [nameSubject, setNameSubject] = useState(rest.name ?? '')
  const [nameLesson, setNameLesson] = useState(rest.content[0].name ?? '')
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [haveNext, setHaveNext] = useState(
    rest.content.length <= 2 ? true : false
  )
  let totalTime = 0
  content.map(lesson => (totalTime += lesson.time))

  function nextLesson() {
    let auxLesson = content[lesson.id + 1]
    auxLesson.done = true
    setLesson(auxLesson)

    setHaveNext(content[lesson.id + 2] ? true : false)

    // const amount = (auxLesson.time * 100) / totalTime
    // let finalExperience = currentExperience + amount
    // setCurrentExperience(finalExperience)
  }

  return (
    <CoachContext.Provider
      value={{
        content,
        nameSubject,
        lesson,
        nameLesson,
        haveNext,
        currentExperience,
        nextLesson
      }}
    >
      {children}
    </CoachContext.Provider>
  )
}
