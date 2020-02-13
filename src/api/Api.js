import * as axios from 'axios'

const instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"

    
})

export const getPost = () =>{
    return instance.get(`/posts`).then(res => res.data);
}

export const getUser = () =>{
    return instance.get(`/users`).then(res => res.data);
}

export const getComments = () =>{
    return instance.get(`/comments`).then(res => res.data);
}

