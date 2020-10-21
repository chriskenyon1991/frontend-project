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

    componentDidUpdate(prevProps, prevState){
        console.log('hello')
        console.log(prevProps)
        console.log(prevState)
        if (prevProps.location.search !== this.props.location.search){
            axios.get(`https://chris-kenyon-nc-news.herokuapp.com/api/articles${this.props.location.search}`).then((res) => {
        const articlesArray = [...res.data.articles]
        this.setState({
            articles: articlesArray,
            location: this.props.location.search
        })
        })
        }
    }
    

    render(){
        return <>
        <div id='buffer'></div>
            {this.state.articles.map((article) => {
            return <div className='articleCard'>
                <h3 id='user'>{article.author}</h3>
                <h4 id='title'>{article.title}</h4>
                <p id='body'>{article.body}</p>
                <div id='bottomrow'>
            <p id='votes'>votes: {article.votes}</p>
            <p id='comments'>comments: {article.comment_count}</p>
            <p id='date'>{article.created_at}</p>
            </div>
                </div>
            })}
        </>
        
    }
}

export default Articles