import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 75%;
  gap: 2%;
  align-items: center;
  color: var(--white);
  font-size: 0.54rem;

  > div {
    background-color: var(--black);
    border-radius: 8px;
    padding: 0.26rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    height: 0.95rem;
    flex: 1;
  }

  > div > div {
    height: 0.3rem;
    background: var(--green);
    border-radius: 4px;
  }
`
