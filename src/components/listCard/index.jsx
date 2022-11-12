import { Card, LabelText } from './styled';

import { useNavigate } from 'react-router-dom';

// custom components
import Categories from 'components/categories';
import Title from 'components/Title';

const ListCard = ({ post }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/detail/${post.id}`);
      }}
    >
      <Title>Author</Title>
      <LabelText>{post.author.name}</LabelText>
      <Title>Title</Title>
      <LabelText>{post.title}</LabelText>
      <Title>Categories</Title>
      <Categories post={post} />
    </Card>
  );
};

export default ListCard;
