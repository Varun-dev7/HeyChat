import ConnectedUsers from "./ConnectedUsers";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";

const Chat = ({ messages, sendMessage, closeConnection, users }) => <div>
    <div className="text-right mt-4">
        <button
            onClick={() => closeConnection()}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
            Leave Room
        </button>
    </div>

    <ConnectedUsers users={users} />

    <div className="text-black">
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </div>
</div>

export default Chat;