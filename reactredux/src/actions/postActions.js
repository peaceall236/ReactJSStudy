import constants from "../constants"

export const fetchPosts =  () => {
    return (dispatch) => {
        dispatch({
            type: constants.FETCHING_POST
        })

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => dispatch({
            type: constants.FETCH_POSTS,
            items: data
        }))
    }
}

export const submitPost = (post) => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
        .then(data => dispatch({
            type: constants.NEW_POST,
            item: data
        }))
    }
}