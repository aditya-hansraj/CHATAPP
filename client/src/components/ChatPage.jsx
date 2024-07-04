import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatPage = (props) => {
    const projectId = "68d55890-c117-42f2-82f6-88fcf4e1bf26";
    const chatProps = useMultiChatLogic(
        projectId, 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: "100vh"}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: "100%"}} />
        </div>
    );
}

export default ChatPage;