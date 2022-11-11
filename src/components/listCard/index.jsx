import {
  Card,
  CategoriesTag,
  CategoriesTagContainer,
  HeaderText,
} from './styled';

const ListCard = ({ post }) => {
  return (
    <Card>
      <HeaderText>Author</HeaderText>
      <p>{post.author.name}</p>
      <HeaderText>Title</HeaderText>
      <p>{post.title}</p>
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
