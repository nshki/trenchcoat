import styled from 'styled-components'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
`

const Socials = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: auto 0 0;
  padding: 0;

  &::before {
    margin-left: auto;
    content: '';
  }
`

const Social = styled.li`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color-${props => props.color});
`

export default function Dash() {
  const discordText = process.env.NEXT_PUBLIC_DISCORD
  const twitterText = process.env.NEXT_PUBLIC_TWITTER

  return (
    <Container>
      <Socials>
        {discordText && <Social color="purple"><FaDiscord /> {discordText}</Social>}
        {twitterText && <Social color="green"><FaTwitter /> {twitterText}</Social>}
      </Socials>
    </Container>
  )
}
