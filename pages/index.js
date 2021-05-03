import Head from 'next/head'
import { GlobalStyle, Grid } from './styles'
import Box from './components/box'
import Chat from './components/chat'
import Dash from './components/dash'
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
        <Box
          label="Streamer"
          icon={FaVideo}
          aspectRatio="4 / 3"
        />
        <Box
          label="Chat"
          icon={BsChatSquareDotsFill}
          role="chat"
          content={Chat}
        />
        <Box
          label="Gameplay"
          icon={FaGamepad}
          role="main"
          aspectRatio="16 / 9"
          extraContent={Dash}
        />
      </Grid>
    </>
  )
}
