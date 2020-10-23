import React from 'react';
import axios from 'axios'
import { Link } from "@reach/router"
import Comments from '../components/comments'
import Votes from './votes'





class Articles extends React.Component{
    state = {
        articles: [],
        user: [],
        comments:[]
    }

    componentDidMount(){

        if(this.props.path === '/'){
            axios.get(`https://chris-kenyon-nc-news.herokuapp.com/api/articles`).then((res) => {
        const articlesArray = [...res.data.articles]
        this.setState({
            articles: articlesArray,
        })
        })
    }else if(this.props.path === '/articles/topic/:slug'){
        axios.get(`https://chris-kenyon-nc-news.herokuapp.com/api/articles?topic=${this.props.slug}`).then((res) => {
        const articlesArray = [...res.data.articles]
        this.setState({
            articles: articlesArray,
        })
        })
    }else if(this.props.path === '/articles/author/:username'){
        axios.get(`https://chris-kenyon-nc-news.herokuapp.com/api/articles?author=${this.props.username}`).then((res) => {
        const articlesArray = [...res.data.articles]
        this.setState({
            articles: articlesArray,
        })
        })
    }else if(this.props.path === '/articles/:article_id'){
        axios.get(`https://chris-kenyon-nc-news.herokuapp.com/api/articles/${this.props.article_id}`).then((res) => {
            const articlesArray = [res.data.article]
            this.setState({
                articles: articlesArray,
            })
            }) 
    }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.uri !== this.props.uri && prevProps.path === '/articles/topic/:slug' ){
            axios.get(`https://chris-kenyon-nc-news.herokuapp.com/api/articles?topic=${this.props.slug}`).then((res) => {
        const articlesArray = [...res.data.articles]
        this.setState({
            articles: articlesArray,
            slug: this.props.slug
        })
        })
        }else if(prevProps.uri !== this.props.uri && prevProps.path === '/articles/author/:username'){
            axios.get(`https://chris-kenyon-nc-news.herokuapp.com/api/articles?author=${this.props.username}`).then((res) => {
        const articlesArray = [...res.data.articles]
        this.setState({
            articles: articlesArray,
            slug: this.props.slug
        })
        })
        }
    }
    

    render(){
        return <>
        <div className='buffer'></div>
            {this.state.articles.map((article) => {
            return <div key={article.article_id} className='articleCard'>
                <Link to={'/articles/' + article.article_id} id='topofcard'>

                <div id='top'>
                    <div id='titlecorner'>
                <h3 className='user'>{article.author}</h3>
                <h4 id='title'>{article.title}</h4>
                    </div>
                <p id='comments'>comments: {article.comment_count}</p>
                </div>

                <div id='mid'>
                <p className='body'>{article.body}</p>
                </div>
                </Link>
                <div className='bottomrow'>
                <Votes article_id={article.article_id} votes={article.votes}/>
            <p id='comments'>comments: {article.comment_count}</p>
            <p className='date'>Date: {article.created_at.slice(0, 10)}</p>
            </div>
                </div>
            })}
            <Comments article_id={this.props.article_id} path={this.props.path}/>
        </>
    }
}

export default Articles