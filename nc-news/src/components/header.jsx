import React from 'react';
import axios from 'axios'
import { Router, Link } from "@reach/router"
import Articles from './articles'


class Header extends React.Component{
    
    state = {
        topics: []
    }
    
    componentDidMount(){
        axios.get('https://chris-kenyon-nc-news.herokuapp.com/api/topics').then((res) => {
        const topicsArray = [...res.data.topics]
        this.setState({
            topics: topicsArray
        })
        })
    }

    render(){
        return <div className='header'>
                <h2>Welcome To Northcoders News</h2>
                <div className='topics'>
             {this.state.topics.map((topic) => {
            return <>
            <Link to={'/articles?topic=' + topic.slug}>{topic.description}</Link>
            </>
        })}
        </div>
        </div>
       
               
    }
 
}

export default Header