# WebSocket App Description

## Overview

This application is a real-time communication platform built using React for the front end and Node.js for the back end. It utilizes WebSocket technology to enable live data exchange between clients and the server.

## Features

- **Real-time Messaging**: Users can send and receive messages instantly.
- **User Authentication**: Secure login and user management.
- **Responsive Design**: Works seamlessly on various devices.
- **Message History**: Stores and retrieves past messages.
- **Typing Indicators**: Displays when a user is typing.

## Technologies Used

- **Front End**: 
  - React
  - Redux (for state management)
  - WebSocket API

- **Back End**: 
  - Node.js
  - Express.js
  - WebSocket library: socket.io and socket.io-client

## Installation

### Prerequisites

- Node.js
- npm
- yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/websocket-app.git
   cd websocket-app
   ```
2. Enter to: `chat-websockets`
3. Node WS server
   - `cd server`
   -  `npm install`
   -  `npm run server` or node --watch index.js
  
4. React client app
   - `cd chat-app`
   - `yarn`
   - `yarn dev`

