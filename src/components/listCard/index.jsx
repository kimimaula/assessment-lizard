import {
  Card,
  CategoriesTag,
  CategoriesTagContainer,
  HeaderText,
  LabelText,
} from './styled';

import { useNavigate } from 'react-router-dom';

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
      <CategoriesTagContainer>
        {post?.categories?.map((c) => {
          return <CategoriesTag key={c.id}>{c.name}</CategoriesTag>;
        })}
      </CategoriesTagContainer>
    </Card>
  );
};

export default ListCard;
