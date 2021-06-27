import React, { ReactNode, useContext } from 'react'
import { CoachContext } from '../../contexts/CoachContext'

import { Container, LessonDiv, MinutesDiv, Subject, TopDiv } from './styles'

function SideBar() {
  const { content, lesson, setLesson } = useContext(CoachContext)

  return (
    <Container>
      <TopDiv>
        <p>React no Next</p>
      </TopDiv>

      <p>AULA ATUAL</p>
      <Subject>
        <option>01.{lesson.name}</option>
      </Subject>

      <p>ATIVIDADES</p>
      {content.map(l => (
        <LessonDiv
          key={l.id}
          property={lesson.id == l.id ? 'true' : 'false'}
          onClick={() => setLesson(l)}
        >
          <div>
            {l.id < 9 ? 0 : ''}
            {l.id + 1} {l.name}
          </div>
          <MinutesDiv>{l.time} min</MinutesDiv>
        </LessonDiv>
      ))}
    </Container>
  )
}

export default SideBar
