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
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      </Head>

      <GlobalStyle />

      <Grid>
        <Box label="Streamer" icon={FaVideo} aspectRatio="4 / 3" />
        <Box label="Chat" content={Chat} role="chat" icon={BsChatSquareDotsFill} />
        <Box label="Gameplay" icon={FaGamepad} role="main" aspectRatio="16 / 9" />
      </Grid>
    </>
  )
}
