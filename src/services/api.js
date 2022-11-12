import axios from 'axios';

class Api {
  //get all posts
  getPosts = async () => {
    const response = await axios.get('/api/posts');
    const { data } = response;
    return data;
  };
  //get single post
  getPost = async (id) => {
    const response = await axios.get(`/api/posts/${id}`);
    const { data } = response;
    return data;
  };
}

export default Api;
