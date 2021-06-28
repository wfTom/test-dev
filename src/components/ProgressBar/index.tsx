import { useContext } from 'react'
import { CoachContext } from '../../contexts/CoachContext'
import { Container } from './styles'

function ProgressBar() {
  const { currentExperience } = useContext(CoachContext)

  return (
    <Container>
      <div>{currentExperience + '%'}</div>
      <div>
        <div style={{ width: `${currentExperience}%` }} />
      </div>
    </Container>
  )
}

export default ProgressBar
