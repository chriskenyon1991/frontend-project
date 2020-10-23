import React from 'react';
import axios from 'axios'


class Login extends React.Component{

    state = {
        users: [],
        loggedin: null
    }
    componentDidMount(){
  
        axios.get('https://chris-kenyon-nc-news.herokuapp.com/api/users').then((res) => {
        const usersArray = [...res.data.users]
        this.setState({
            users: usersArray
        })
        })

    }

    sendData = () => {
        this.props.parentCallback({username: this.state.loggedin});
   }

   send = () => {
       return this.sendData()
   }

   setUser = (e) => {
       this.setState({loggedin:e.target.value })
       console.log(e.target.value)

   }

    render(){
        console.log(this.state)
        return<>
        <div className='buffer'></div>

        {this.state.users.map((user, index) => {
            return <button key={index} onClick={this.setUser} value={user.username} className='login'>{user.username}</button>
        
        })}

        <button disabled={!this.state.loggedin} onClick={this.send}>Login</button>
        
        </>
    }
}

export default Login