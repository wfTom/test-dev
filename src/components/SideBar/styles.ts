import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  height: 100%;
  background-color: var(--black);

  p {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    color: var(--title-side-bar);
    font-size: 0.85rem;
    font-weight: 600;
  }
`

export const Subject = styled.select`
  background-color: var(--gray);
  color: var(--white);
  border: 0;
  padding: 0.6rem;
  width: 93%;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

export const LessonDiv = styled.div`
  width: 100%;
  height: 3rem;
  color: var(--letter);
  background-color: ${props =>
    props.property == 'true' ? 'var(--gray3)' : ''};
  border-left: ${props =>
    props.property == 'true' ? '4px solid var(--blue2)' : ''};
  font-size: 0.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    margin-left: 1rem;
  }
`

export const MinutesDiv = styled.div`
  width: max-content;
  height: max-content;
  color: var(--letter);
  background-color: var(--minutes);
  font-size: 0.64rem;
  margin-right: 1rem;
  padding: 0.3rem;
  border-radius: 6px;
`

export const TopDiv = styled.div`
  background-color: var(--gray2);
`
