import Head from 'next/head'
import { GlobalStyle, Grid } from './styles'
import Box from './components/box'
import Chat from './components/chat'
import { FaVideo, FaGamepad } from 'react-icons/fa'
import { BsChatSquareDotsFill } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trenchcoat</title>
      </Head>

      <GlobalStyle />

      <Grid>
        <Box label="Gameplay" icon={FaGamepad} main aspectRatio="16 / 9" />
        <Box label="Streamer" icon={FaVideo} aspectRatio="4 / 3" />
        <Box label="Chat" content={Chat} icon={BsChatSquareDotsFill} />
      </Grid>
    </>
  )
}
