import React from 'react';
import axios from 'axios'


class Votes extends React.Component{

    state = {
        votes: this.props.votes,
        inc_votes: null
    }

    setVote = (e) => {
        const voteNum = parseInt(e.target.value)
        // console.log(this.state.votes + voteNum)
         this.setState((prevState) => {
            // console.log(prevState)
            return {
                votes: (prevState.votes + voteNum),
                inc_votes: voteNum
            }
        })
        if(this.props.article_id){
             axios.patch(`https://chris-kenyon-nc-news.herokuapp.com/api/articles/${this.props.article_id}`, {inc_votes: voteNum})
        }else if(this.props.comment_id){
            axios.patch(`https://chris-kenyon-nc-news.herokuapp.com/api/comments/${this.props.comment_id}`, {inc_votes: voteNum})
        } 
    }

    render(){
        if(this.state.votes < 0){
            return <div id='votebutton' style={{
                backgroundColor: '#da1c32'
          }}>
              <button onClick={this.setVote} id='leftbutton' value={-1}>{'<'}</button>
              <button onClick={this.setVote} id='rightbutton' value={1}>{'>'}</button>
              <p className='votes'>{this.state.votes}</p>
          </div>
        }else{
            return <div id='votebutton' style={{
                backgroundColor: 'rgb(10, 160, 10)'
          }}>
              <button onClick={this.setVote} id='leftbutton' value={-1}>{'<'}</button>
              <button onClick={this.setVote} id='rightbutton' value={+1}>{'>'}</button>
              <p className='votes'>{this.state.votes}</p>
          </div>
        }
    }
}

export default Votes