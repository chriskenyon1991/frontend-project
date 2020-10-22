import React from 'react';
import axios from 'axios'

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
    console.log(this.props)
    return this.state.comments.map((comment) => {
        return <div key={comment.comment_id} className='commentcard'>
            <h3 className='user'>{comment.author}</h3>
            <p>{comment.body}</p>
            <div className='bottomrow'>
            <p>votes: {comment.votes}</p>
            <p>Date: {comment.created_at.slice(0, 10)}</p>
            </div>
        </div>
    })
}
}

export default Comments