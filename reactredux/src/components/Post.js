import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchPosts } from "../actions/postActions"

class Post extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        console.log(this.props)
        let postItems = "";
        if (this.props.fetching) {
            postItems = (
                <p>Fetching Posts</p>
            )
        } else {
            postItems = this.props.posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
        }
        

        return (
            <div>
                <h1>Post</h1>
                { postItems }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.items,
        fetching: state.postReducer.fetching
    }
}

const PostContainer = connect(mapStateToProps, {fetchPosts})(Post)

export default PostContainer