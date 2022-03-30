import {ChatEngine} from 'react-chat-engine';

import  ChatFeed  from'./components/ChatFeed' ;

import LOginForm from './components/LoginForm'

import './App.css'

const App = () =>{
    if(!sessionStorage.getItem('username')) return <LOginForm/>

    return(
        <ChatEngine
        height='100vh'
        // userName='Aladinjridi'
        userName={sessionStorage.getItem('username')}
        userSecret={sessionStorage.getItem('password')}
        // userSecret='123123'
        projectID='8f463e6a-b85a-49c7-b5d4-22d1eab24438'
        renderChatFeed ={(ChatAppProps) => <ChatFeed {...ChatAppProps} /> }
    />
    )
}
export default App;