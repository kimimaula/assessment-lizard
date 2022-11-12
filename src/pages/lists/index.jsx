// React
import { useState, useEffect } from 'react';

// Custom Components
import Spinner from 'components/spinner';
import ListCard from 'components/listCard';

//services
import Api from 'services/api';

//styles
import { ListContainer } from './styled';

//External components
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import ReactPaginate from 'react-paginate';

// routing
import { useLocation, useNavigate } from 'react-router-dom';

//component for parsing search url
import queryString from 'query-string';

const animatedComponents = makeAnimated();

function ListsPage() {
  const [displayData, setDisplayData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [selectedCat, setSelectedCat] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(rawData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % rawData.length;
    setItemOffset(newOffset);
  };

  //checks for uniqueness in array
  const uniq = (arr, field) => [
    ...new Map(arr.map((item) => [item[field], item])).values(),
  ];

  const location = useLocation();
  const navigate = useNavigate();

  //handles updating query string
  const handleCatQuery = (values) => {
    setSelectedCat(values);
    // massages object and prepare to push to query params
    const searchParams = values.map((v) => v.label);
    // stringifies data to query params
    const stringifiedData = queryString.stringify(searchParams, {
      arrayFormat: 'comma',
    });
    // push search params
    navigate({ search: stringifiedData });
  };

  //listens for changes in itemoffset to update display data
  useEffect(() => {
    const currentItems = rawData.slice(itemOffset, endOffset);
    setDisplayData(currentItems);
  }, [endOffset, itemOffset, rawData]);

  // useEffect for getting inital post, populating categories and setting initial pagination data
  useEffect(() => {
    const api = new Api();
    const displayData = async () => {
      setLoading(true);
      try {
        //getting posts from api
        const { posts } = await api.getPosts();
        // separating categories from posts
        var categories = posts
          .map((post) => post.categories)
          .flatMap((post) => post);
        // massaging categories data for filter
        const categoryItems = uniq(categories, 'name').map((c) => {
          return { ...c, label: c.name, value: c.name.toLowerCase() };
        });
        setCategories(categoryItems);
        //parsing query params with values of selected filters from query string to object
        const parsed = Object.values(queryString.parse(location.search));
        //massaging query params object to go back into filter
        const selectItem = parsed.map((v) => {
          return { value: v.toLowerCase(), label: v };
        });
        // updating query params ui
        setSelectedCat(selectItem);
        //checking if there are any options selected in query params
        if (parsed.length > 0) {
          let filteredData = [];
          //looping through posts to see which object contains selected categories
          for (let i = 0; i < posts.length; i++) {
            for (let index = 0; index < posts[i].categories.length; index++) {
              if (parsed.includes(posts[i].categories[index].name)) {
                filteredData.push(posts[i]);
              }
            }
          }
          // function for ssetting pagination data
          const currentItems = uniq(filteredData, 'id').slice(
            itemOffset,
            endOffset
          );
          //setting memory for raw data
          setRawData(uniq(filteredData, 'id'));
          // set memory for display data
          setDisplayData(currentItems);
        } else {
          // function for ssetting pagination data
          const currentItems = posts.slice(itemOffset, endOffset);
          //setting memory for raw data
          setRawData(posts);
          // set memory for display data
          setDisplayData(currentItems);
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
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={itemsPerPage}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </ListContainer>
      )}
    </div>
  );
}

export default ListsPage;
