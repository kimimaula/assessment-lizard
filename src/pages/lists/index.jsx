import { useState, useEffect } from 'react';

import Spinner from 'components/spinner';
import ListCard from 'components/listCard';

import Api from 'services/api';

import { ListContainer } from './styled';

function ListsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <ListContainer>
          {posts &&
            posts?.map((p) => {
              return <ListCard key={p.id} post={p} />;
            })}
        </ListContainer>
      )}
    </div>
  );
}

export default ListsPage;
