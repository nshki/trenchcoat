import { useState } from 'react'
import tmi from 'tmi.js'
import styled from 'styled-components'

const client = new tmi.Client({ channels: [process.env.NEXT_PUBLIC_CHANNEL] })
client.connect()

const Messages = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Message = styled.li`
  padding: 1rem;
`

const User = styled.span`
  font-weight: bold;
  color: ${props => props.color};
`

export default function Chat() {
  const [messages, setMessages] = useState([]);

  client.on('message', (channel, tags, message, self) => {
    let latestMessages = messages.slice(0, 10)
    let newMessage = {
      user: tags['display-name'],
      message,
      color: tags['color']
    }

    setMessages([newMessage, latestMessages])
  })

  return(
    <Messages>
      {messages.map((message, index) => {
        return(
          <Message key={index}>
            <User color={message.color}>{message.user}</User>:{' '}
            {message.message}
          </Message>
        )
      })}
    </Messages>
  )
}
