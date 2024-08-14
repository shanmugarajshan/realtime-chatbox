import React from 'react';
import './Chat.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import ChatBox from '../../Components/ChatBox/ChatBox';
import RightSideBOx from '../../Components/RightSideBox/RightSideBOx';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
          <LeftSideBar />
          <ChatBox />
          <RightSideBOx />
      </div>
    </div>
  )
}

export default Chat