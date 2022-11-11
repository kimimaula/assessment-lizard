import { useState, useEffect } from 'react';
import Spinner from 'components/spinner';
import Api from 'services/api';

function ListsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = new Api();
  const fetchData = async () => {
    setLoading(true);
    try {
      const { posts } = await api.getPosts();
      setPosts(posts);
    } catch (error) {
      console.log('----error');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {posts?.map((p) => {
            return (
              <div key={p.id}>
                <div>{p.author.name}</div>
                <div>{p.author.avatar}</div>
                <div>{p.title}</div>
                <div>{p.publishDate}</div>
                <div>{p.sumary}</div>
                <div>
                  {p?.categories.map((c) => {
                    return <div key={c.id}>{c.name}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ListsPage;
