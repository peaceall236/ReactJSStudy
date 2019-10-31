import React, { Component } from 'react'
import { connect } from "react-redux"
import { submitPost } from "../actions/postActions"

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submitPost(this.state)
        this.setState({
            title: "",
            body: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label> <br/>
                        <input type="text" onChange={(e) => this.setState({title: e.target.value})} value={this.state.title} />
                    </div><br/>
                    <div>
                        <label>Body: </label> <br/>
                        <textarea name="body" id="body" cols="30" rows="4"  onChange={(e) => this.setState({body: e.target.value})} value={this.state.body}></textarea>
                    </div><br/>
                    <div>
                        <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const PostFormContainer = connect(null, {submitPost})(PostForm)

export default PostFormContainer