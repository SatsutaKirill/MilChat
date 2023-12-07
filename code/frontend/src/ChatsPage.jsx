import { PrettyChatWindow} from 'react-chat-engine-pretty'
//MultiChatSocket which socket user connect to their chat
//MultiChatWindow is UI where user send and recieve messenger
//Logic which is statement api call make Chat app work
const ChatsPage = (props) => {
     
     return (
     <div style = {{ height : '100vh'}}>
          <PrettyChatWindow
               projectId='48dd01d4-d7f2-463f-8568-77816020a7cc'
               username= {props.user.username}
               secret={props.user.secret}
               style={{ height : '100%'}}
               />
     </div>
     )
}

export default ChatsPage