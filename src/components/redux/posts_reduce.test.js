import postReducer, { addPost, deletePost } from "./posts_reduce"

it('add new post', () => {
    //test data
    const action = addPost('example')
    const data = {
        postData: [
            { id: 1, message: 'Hi!!!', like: 5 },
            { id: 2, message: 'How are you?', like: 3 },
            { id: 3, message: 'I am OK', like: 7 }]
    }
    //action
    let newState = postReducer(data, action);

    //expectation
    expect(newState.postData.length).toBe(4);
})

it('delete post', () => {
    const action = deletePost(1);
    const data = {
        postData: [
            { id: 1, message: 'Hi!!!', like: 5 },
            { id: 2, message: 'How are you?', like: 3 },
            { id: 3, message: 'I am OK', like: 7 }]
    }
    let newState = postReducer(data, action);
    expect(newState.postData.length).toBe(2);
})