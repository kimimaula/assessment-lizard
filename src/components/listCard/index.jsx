import { Card, HeaderText, LabelText } from './styled';

import { useNavigate } from 'react-router-dom';

import Categories from 'components/categories';

const ListCard = ({ post }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/detail/${post.id}`);
      }}
    >
      <HeaderText>Author</HeaderText>
      <LabelText>{post.author.name}</LabelText>
      <HeaderText>Title</HeaderText>
      <LabelText>{post.title}</LabelText>
      <HeaderText>Categories</HeaderText>
      <Categories post={post} />
    </Card>
  );
};

export default ListCard;
