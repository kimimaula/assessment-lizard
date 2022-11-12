import { useEffect, useState } from 'react';

//services
import Api from 'services/api';

// Custom Components
import {
  DetailPageContainer,
  DetailsHeader,
  DetailsContainer,
  DetailTitle,
  Avatar,
  AvatarContainer,
} from './styled';

//routing components
import { useParams } from 'react-router-dom';

// Custom Components
import Spinner from 'components/spinner';
import Categories from 'components/categories';

// format time component
import moment from 'moment';

const DetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(false);

  // getting params id
  let { id } = useParams();
  const api = new Api();

  // retrieve single post upon page load
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const data = await api.getPost(id);
        setPost(data[0]);
      } catch (error) {
        console.log('----error', error);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!post) {
    return (
      <DetailPageContainer>
        <DetailsHeader>Title</DetailsHeader>
        <DetailsContainer>
          <div>Error...No post found</div>
        </DetailsContainer>
      </DetailPageContainer>
    );
  }

  return (
    <DetailPageContainer>
      <DetailsHeader>Title: {post?.title}</DetailsHeader>
      <DetailsContainer>
        <AvatarContainer>
          <Avatar src={post?.author?.avatar} alt="avatar" />
          <p>{post?.author?.name}</p>
        </AvatarContainer>

        <DetailTitle>Summary</DetailTitle>
        <div>{post?.summary}</div>
        <DetailTitle>Publish Date</DetailTitle>
        <div>{moment(post?.publishDate).format('DD MMM YYYY')}</div>
        <DetailTitle>Categories</DetailTitle>
        <Categories post={post} />
      </DetailsContainer>
    </DetailPageContainer>
  );
};

export default DetailPage;
