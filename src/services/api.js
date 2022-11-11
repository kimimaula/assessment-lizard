import axios from 'axios';

class Api {
  getPosts = async () => {
    const response = await axios.get('/api/posts');
    const { data } = response;
    return data;
  };
}

export default Api;
