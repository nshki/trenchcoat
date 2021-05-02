import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--color-box);
  box-shadow: var(--shadow-box);
  border-top: 4px solid;
  overflow: hidden;
  animation: 15s color-borders infinite;

  ${props => props.main && `
    grid-area: 1 / 2 / span 2 / span 1;
  `}
`

const Label = styled.h2`
  background-color: var(--color-box-label);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0.8rem;
  text-transform: uppercase;
  text-shadow: var(--shadow-text);
  font-size: 1rem;
`

const ContentContainer = styled.div`
  background-color: var(--color-box);
  aspect-ratio: ${props => props.aspectRatio || 'auto'};
`

export default function Box(props) {
  const Icon = props.icon;
  const Content = props.content;

  return (
    <Container main={props.main}>
      <Label>
        {props.label}
        {Icon && <Icon />}
      </Label>

      <ContentContainer aspectRatio={props.aspectRatio}>
        {Content && <Content />}
      </ContentContainer>
    </Container>
  )
}