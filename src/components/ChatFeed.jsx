import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChattFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

//   console.log(chat, userName, message);
    const renderReceipts = (message, isMyMessage) =>{
        return chat.people.map((person, index) =>person.last_read === message.id && (
            <div 
                key ={`read_${index}`}
                className = 'read-receipt'
                style={{
                    float : isMyMessage ? 'right' : 'left' , 
                    backgroundImage : `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    const renderMessages = ()=>{
        const keys = Object.keys(messages)
        // console.log(keys);
        return keys.map((key, index)=>{
            const message = messages[key]
            const lastMessagesKey = index === 0 ? null : keys[index - 1]
            const isMyMessages = userName === message.sender.userName
            return (
                <div key={`msg_${index}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {
                          isMyMessages 
                          ? <MyMessage message={message}/>
                          : <TheirMessage message={message} lastMessage={message[lastMessagesKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessages ? '18px' : '0px' , marginLeft : isMyMessages ? '0px' : '68px' }} >
                        {/* hadi mat3 vue */}
                    {renderReceipts(message, isMyMessages)}
                    </div >
                </div>
            )
        })
    }

    renderMessages()
    if(!chat) return 'loading ... '
    

  return (
      <div className="chat-feed">
          <div className="chat-title-container">
              <div className="chat-title">
                {chat?.title}
              </div>
              <div className="chat-subtitle">
                {chat.people.map((person) => ` ${person.person.username}`)}
              </div>

          </div>
            {renderMessages()}
            <div style={{height :'100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId = {activeChat} />
            </div>
      </div>
  )
};

export default ChattFeed;
