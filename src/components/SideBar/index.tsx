import React, { ReactNode, useContext } from 'react'
import { CoachContext } from '../../contexts/CoachContext'

import { Container, LessonDiv, MinutesDiv, Subject, TopDiv } from './styles'

function SideBar() {
  const { content, subjectName } = useContext(CoachContext)

  return (
    <Container>
      <TopDiv>
        <p>React no Next</p>
      </TopDiv>
      <p>AULA ATUAL</p>
      <Subject>
        <option>01.{subjectName}</option>
      </Subject>
      <p>ATIVIDADES</p>
      {content.map(lesson => (
        <LessonDiv key={lesson.id}>
          <div>
            {lesson.id < 9 ? 0 : ''}
            {lesson.id + 1} {lesson.name}
          </div>
          <MinutesDiv>{lesson.time} min</MinutesDiv>
        </LessonDiv>
      ))}
    </Container>
  )
}

export default SideBar
