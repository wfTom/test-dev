import styled from 'styled-components'

export const Container = styled.div`
  width: 76vw;
  height: 5rem;
  display: flex;
  background-color: var(--light-blue);
  align-items: center;
  justify-content: space-between;
`

export const H1 = styled.div`
  margin-left: 18rem;
  font-size: 1.3rem;
  font-weight: 900;
  display: flex;
  flex-direction: row;

  p {
    font-size: 0.9rem;
    opacity: 0.77;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 0.7rem;
  }
`

export const Button = styled.button`
  color: var(--white);
  background-color: var(--blue);
  align-items: center;
  border: 0;
  border-radius: 6px;
  padding: 0.7rem;
  margin-right: 6rem;
`
