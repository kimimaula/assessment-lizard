import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', () => {
      return data;
    });

    // query post with id
    this.get('/posts/:id', (schema, request) => {
      const id = request.params.id;
      var post = data.posts.filter((post) => post.id === id);
      return post;
    });
  },
});
