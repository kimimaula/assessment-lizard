import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const rawData = await fetch('/api/posts');
    const parsedData = await rawData.json();
    setPosts(parsedData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
}

export default App;
