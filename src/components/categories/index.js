import { CategoriesTag, CategoriesTagContainer } from './styled';

const Categories = ({ post, categories }) => {
  const mapColors = (label) => {
    switch (label) {
      case 'Surveys and Forms':
        return 'var(--clr-yellow)';
      case 'Digital Marketing':
        return 'var(--clr-red)';
      case 'Platform News and Updates':
        return 'var(--clr-magenta)';
      case 'Tips and Best Practise':
        return 'var( --clr-blue)';
      case 'Data Management':
        return 'var( --clr-cyan)';
      case 'Marketing Analytics':
        return 'var( --clr-teal)';
      case 'Landing Pages':
        return 'var( --clr-green)';
      case 'Ecommerce':
        return 'var(  --clr-lime)';
      case 'Email Marketing':
        return 'var(--clr-purple)';
      case 'Marketing Automation':
        return 'var(--clr-blue)';
      default:
        return 'var(--clr-blue)';
    }
  };
  return (
    <CategoriesTagContainer>
      {post?.categories?.map((c) => {
        return (
          <CategoriesTag
            style={{ backgroundColor: mapColors(c.name) }}
            key={c.id}
          >
            {c.name}
          </CategoriesTag>
        );
      })}
    </CategoriesTagContainer>
  );
};

export default Categories;
