import React, { useContext } from 'react'
import { CoachContext } from '../../contexts/CoachContext'
import { Button, Container, H1 } from './styles'

function Header() {
  const { nameLesson } = useContext(CoachContext)
  return (
    <Container>
      <H1>{nameLesson}</H1>
      <Button>PRÓXIMA ATIVIDADE</Button>
    </Container>
  )
}

export default Header
