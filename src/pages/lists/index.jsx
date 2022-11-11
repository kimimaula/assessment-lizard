import { useState, useEffect } from 'react';

function ListsPage() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const rawData = await fetch('/api/posts');
    const parsedData = await rawData.json();
    console.log('-----parsedData', parsedData.posts);
    setPosts(parsedData.posts);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
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
  );
}

export default ListsPage;
