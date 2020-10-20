import React from 'react';
import axios from 'axios'



class Articles extends React.Component{
    state = {
        articles: [],
        location:null
    }

    componentDidMount(){
        if(this.props.location.search){
            axios.get(`https://chris-kenyon-nc-news.herokuapp.com/api/articles${this.props.location.search}`).then((res) => {
        const articlesArray = [...res.data.articles]
        this.setState({
            articles: articlesArray,
            location: this.props.location.search
        })
        })
    }else{
        axios.get('https://chris-kenyon-nc-news.herokuapp.com/api/articles').then((res) => {
        const articlesArray = [...res.data.articles]
        this.setState({
            articles: articlesArray
        })
        })

    }
    }

    

    render(){
        
        console.log(this.props)
        console.log(this.state)
        return this.state.articles.map((article) => {
        return <div className='article'>
            <h3>{article.author}</h3>
            <h4>{article.title}</h4>
            <p>{article.body}</p>
        <p>votes: {article.votes}</p>
        <p>comments: {article.comment_count}</p>
        <p>{article.created_at}</p>
            </div>

        })
        
    }
}

export default Articles