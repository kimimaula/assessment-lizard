import { useRef, useEffect, useState } from 'react';

import { Card, LabelText } from './styled';

import { Transition } from 'react-transition-group';

import { useNavigate } from 'react-router-dom';

// custom components
import Categories from 'components/categories';
import Title from 'components/title';

const ListCard = ({ post, transition }) => {
  const [inProp, setInProp] = useState(false);
  const duration = 500;

  // animation config
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const navigate = useNavigate();
  const nodeRef = useRef(null);

  useEffect(() => {
    setInProp(transition);
  }, [transition]);
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
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
        </div>
      )}
    </Transition>
  );
};

export default ListCard;
