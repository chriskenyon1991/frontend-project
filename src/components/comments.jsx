import React from 'react';
import axios from 'axios'
import Votes from './votes'



class Comments extends React.Component{

    state = {
        comments: []
    }

    componentDidMount(){
        if(this.props.path === '/articles/:article_id'){
        axios.get(`https://chris-kenyon-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`).then((res) => {
        const commentsArray = [...res.data.comments]
        this.setState({
            comments: commentsArray,
        })
        })
    }
    }

render(){
    return this.state.comments.map((comment) => {
        return <div key={comment.comment_id} className='commentcard'>
            <h3 className='user'>{comment.author}</h3>
            <p>{comment.body}</p>
            <div className='bottomrow'>
           <Votes comment_id={comment.comment_id} votes={comment.votes}/>
            <p>Date: {comment.created_at.slice(0, 10)}</p>
            </div>
        </div>
    })
}
}

export default Comments
