import React from 'react';
import axios from 'axios'
import { Router, Link } from "@reach/router"
import Articles from './articles'


class Topic extends React.Component{
    
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
        return <div className='topics'>
             {this.state.topics.map((topic) => {
            return <>
            <Link to={'/articles?topic=' + topic.slug}>{topic.description}</Link>
            </>
        })}
        </div>
       
               
    }
 
}

export default Topic