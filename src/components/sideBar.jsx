import React from 'react';
import axios from 'axios'
import { Link } from "@reach/router"


class SideBar extends React.Component{
    
    state = {
        topics: [],
        users: []
    }
    
    componentDidMount(){
        axios.get('https://chris-kenyon-nc-news.herokuapp.com/api/topics').then((res) => {
        const topicsArray = [...res.data.topics]
        this.setState({
            topics: topicsArray
        })
        })

        axios.get('https://chris-kenyon-nc-news.herokuapp.com/api/users').then((res) => {
        const usersArray = [...res.data.users]
        this.setState({
            users: usersArray
        })
        })

    }

    sendData = () => {
        this.props.parentCallback({users: this.state.users});
   }


    render(){
        
        return ( 
        <div className='sidebar'>
                    <p><span className='secondaryColor'>&lt;</span>Topics<span className='secondaryColor'>/&gt;</span></p>
             {this.state.topics.map((topic, index) => {
            return <Link key={index} className='sidelink' to={'/articles/topic/' + topic.slug}>{topic.description}</Link>
        })}
        <p><span className='secondaryColor'>&lt;</span>Users<span className='secondaryColor'>/&gt;</span></p>
        {this.state.users.map((user, index) => {
            return <Link key={index} className='sidelink' to={'/articles/author/' + user.username}>{user.username}</Link>
        
        })}
        </div>    
        )    
    }
 
}

export default SideBar