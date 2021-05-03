Trenchcoat
==========

Trenchcoat is a React application that provides a Twitch overlay, chat, and stream notifications. It is designed to be run locally and pointed at by your streaming software's browser source.



## Setup

Create a new file called `.env.local` with the following contents:

```
NEXT_PUBLIC_CHANNEL="<Your Twitch username here>"
NEXT_PUBLIC_DISCORD="<Your Discord link here>"
NEXT_PUBLIC_TWITTER="<Your Twitter handle here>"
```

Then run:

```
$ yarn       # Install dependencies
$ yarn dev   # Boot up the Next.js server
```
