import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import { CoachContext } from '../../contexts/CoachContext'
import { Container } from './styles'

function Main() {
  const { lesson, endedLesson } = useContext(CoachContext)

  console.log(lesson)

  return (
    <Container>
      {console.log(lesson)}
      {lesson.type === 'video' ? (
        <ReactPlayer
          controls
          url={lesson.content}
          onEnded={() => endedLesson()}
        />
      ) : (
        <iframe
          src={lesson.content}
          // src="WellingtonDevFullStackCurriculo.pdf"
          width="100%"
          height="100%"
        />
      )}
    </Container>
  )
}

export default Main
