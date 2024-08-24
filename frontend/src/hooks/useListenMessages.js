import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";

import notificationSound from '../assets/sound/notification.mp3'

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages,setMessages} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound)
      sound.play()
        setMessages([...messages, newMessage])
    })
    return () => socket?.off("newMessage");
  },[socket,setMessages,messages])
}

export default useListenMessages

// import { useEffect } from "react";
// import { useSocketContext } from "../context/SocketContext";
// import useConversation from "../zustand/useConversation";

// const useListenMessages = () => {
//   const { socket } = useSocketContext();
//   const { messages, setMessages } = useConversation();

//   useEffect(() => {
//     console.log("Socket connected: ", socket?.connected); // Should log true if connected
    
//     const handleNewMessage = (newMessage) => {
//       console.log("New message received: ", newMessage); // Check if the event is firing
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//     };
  
//     socket?.on("newMessage", handleNewMessage);
  
//     return () => {
//       socket?.off("newMessage", handleNewMessage);
//     };
//   }, [socket, setMessages]);
  
// };

// export default useListenMessages;
