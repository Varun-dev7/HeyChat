import { useEffect, useRef } from "react";

const MessageContainer = ({ messages, currentUser }) => {
  const messageRef = useRef();
  useEffect(()=>{
    if(messageRef && messageRef.current){
      const { scrollHeight,clientHeight}=messageRef.current;
      messageRef.current.scrollTo({
        left:0, top:scrollHeight-clientHeight,
        behavior:'smooth'
      })
    }
  },[messages]);
  return (
    <div className="p-4 max-h-[70vh] overflow-y-auto flex flex-col space-y-2 bg-white rounded shadow">
      {messages.map((m, index) => {
        const isOwnMessage = m.user === currentUser;

        return (
          <div
            key={index}
            className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-xs break-words shadow-sm ${
                isOwnMessage
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-gray-900 self-start"
              }`}
            >
              <div className="text-sm">
                {!isOwnMessage && (
                  <span className="block font-bold mb-1 text-blue-700">
                    {m.user}
                  </span>
                )}
                <span>{m.message}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageContainer;
