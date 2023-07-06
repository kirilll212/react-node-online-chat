import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return <div style={{height: '100vh' }}>
        <PrettyChatWindow
        projectId='5ee10efd-f8c5-4547-84f1-035814a23f8a'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
}

export default ChatsPage