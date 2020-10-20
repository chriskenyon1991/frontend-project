import React from 'react';
import axios from 'axios'
import { Link } from "@reach/router"


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
                <h2><span className='secondaryColor'>&lt;</span>Welcome To Northcoders News<span className='secondaryColor'>/&gt;</span></h2>
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