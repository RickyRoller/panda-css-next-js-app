import { styled } from '../../styled-system/jsx'

const One = styled.div`
  display: flex;
  width: 300px;
  border: 1px solid black;
  justify-content: center;
  --test: 4px;
`

const Two = styled(One)`
  justify-content: flex-start;
  margin-top: var(--test);
`

const Row = styled('div')`
  display: grid;
  gap: inherit;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 500px;

  @media (min-width: token(breakpoints.md)) {
    grid-template-columns: auto 380px;
    grid-auto-rows: min-content;
    grid-template-rows: unset;
  }

  @media (min-width: token(breakpoints.lg)) {
    grid-template-columns: auto 450px;
  }
`

export default function Home() {
  return (
    <div>
      <One>one</One>
      <Two>two</Two>
      <Row>
        <div>Content</div>
        <div>Content 2</div>
      </Row>
    </div>
  )
}
