import React, { useState } from 'react';
import './App.css';
import Lobby from './components/Lobby';
import Chat from './components/Chat';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';


const App = () => {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const joinroom = async (user, room) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("/api/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      });

      connection.on("ReceiveMessage", (user, message) => {
        setMessages(messages => [...messages, { user, message }]);
      });

      connection.onclose(e => {
        setConnection();
        setMessages([]);
        setUsers([]);
      })

      await connection.start();
      await connection.invoke("JoinRoom", { user, room });
      setConnection(connection);

    } catch (e) {
      console.log(e);
    }
  }

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  }

  const sendMessage = async (message) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  }

  return <div className='bg-green-400'>
    <h1 className='text-center text-xl'>HeyChat</h1>
    <hr className='line' />
    {!connection
      ? <Lobby joinroom={joinroom} />
      : <Chat messages={messages} sendMessage={sendMessage}
        closeConnection={closeConnection} users={users} />
    }
  </div>
}

export default App;
