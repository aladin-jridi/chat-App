import { useState } from "react"

import axios from 'axios'

const LoginForm = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const authObject = { 'Project-ID' : '8f463e6a-b85a-49c7-b5d4-22d1eab24438' , 'User-Name' : username, 'User-Secret' : password }
        try{
          await  axios.get('https://api.chatengine.io/chats',{headers : authObject})
            sessionStorage.setItem('username',username)
            sessionStorage.setItem('password',password)

            window.location.reload()
        }
        catch(err){
            setErr('oopppppsss , incorrect credentails ')
        }
    }


    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Applications
                </h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className = 'input'
                        placeholder="userName"
                        required

                    />
                        <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className = 'input'
                        placeholder="password"
                        required

                    />
                    <div align= 'center'>
                        <button type="submit" className="button">
                            <span>
                                Start
                            </span>
                        </button>
                    </div>
                    <h2 className="error">
                        {err}
                    </h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;