// React
import { useState, useEffect } from 'react';

// Custom Components
import Spinner from 'components/spinner';
import ListCard from 'components/listCard';

//services
import Api from 'services/api';

//styles
import { ListContainer } from './styled';

//Select components
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// routing
import { useLocation, useNavigate } from 'react-router-dom';

//component for parsing search url
import queryString from 'query-string';

const animatedComponents = makeAnimated();

function ListsPage() {
  const [displayData, setDisplayData] = useState([]);
  const [selectedCat, setSelectedCat] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  //handles updating query string
  const handleCatQuery = async (values) => {
    setSelectedCat(values);
    const searchParams = values.map((v) => v.label);
    const stringifiedData = queryString.stringify(searchParams, {
      arrayFormat: 'comma',
    });
    await navigate({ search: stringifiedData });
  };

  // useEffect for getting inital post and populating categories
  useEffect(() => {
    const api = new Api();
    const displayData = async () => {
      setLoading(true);
      try {
        const { posts } = await api.getPosts();
        var categories = posts
          .map((post) => post.categories)
          .flatMap((post) => post);
        let uniq = (arr, field) => [
          ...new Map(arr.map((item) => [item[field], item])).values(),
        ];
        const categoryItems = uniq(categories, 'name').map((c) => {
          return { ...c, label: c.name, value: c.name.toLowerCase() };
        });
        setCategories(categoryItems);
        const parsed = Object.values(queryString.parse(location.search));
        const selectItem = parsed.map((v) => {
          return { value: v.toLowerCase(), label: v };
        });
        setSelectedCat(selectItem);
        if (parsed.length > 0) {
          let filteredData = [];
          for (let i = 0; i < posts.length; i++) {
            for (let index = 0; index < posts[i].categories.length; index++) {
              if (parsed.includes(posts[i].categories[index].name)) {
                filteredData.push(posts[i]);
              }
            }
          }
          setDisplayData(uniq(filteredData, 'id'));
        } else {
          setDisplayData(posts);
        }
      } catch (error) {
        console.log('----error', error);
      }
      setLoading(false);
    };
    displayData();
  }, [location.search]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <ListContainer>
          <Select
            closeMenuOnSelect={true}
            defaultValue={selectedCat}
            onChange={handleCatQuery}
            components={animatedComponents}
            isMulti
            options={categories}
          />
          {displayData &&
            displayData?.map((p) => {
              return <ListCard key={p.id} post={p} />;
            })}
        </ListContainer>
      )}
    </div>
  );
}

export default ListsPage;
