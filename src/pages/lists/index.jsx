import { useState, useEffect } from 'react';

import Spinner from 'components/spinner';
import ListCard from 'components/listCard';
import Button from 'components/button';

import Api from 'services/api';

import { ListContainer } from './styled';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

function ListsPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const api = new Api();
    const fetchData = async () => {
      setLoading(true);
      try {
        const { posts } = await api.getPosts();
        var categories = posts
          .map((post) => post.categories)
          .flatMap((post) => post);
        const uniq = (items) => [...new Set(items)];
        const categoryItems = uniq(categories.map((item) => item.name)).map(
          (c) => {
            return { value: c.toLowerCase(), label: c };
          }
        );
        setCategories(categoryItems);
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
          <Select
            closeMenuOnSelect={true}
            components={animatedComponents}
            isMulti
            options={categories}
          />
          <Button label="Search" />
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
