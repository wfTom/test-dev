import React, { useContext } from 'react'
import { CoachContext } from '../../contexts/CoachContext'
import { Button, Container, H1 } from './styles'

function Header() {
  const { lessonName, lesson } = useContext(CoachContext)
  return (
    <Container>
      <H1>
        <p>
          {lesson.id < 9 ? 0 : ''}
          {lesson.id + 1}
        </p>{' '}
        {lesson.name}
      </H1>
      <Button>PRÓXIMA ATIVIDADE</Button>
    </Container>
  )
}

export default Header
