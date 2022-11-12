import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const CustomPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  margin: 35px 0;
  padding: 0px;
  @media screen and (max-width: 400px) {
    font-size: 10px;
    justify-content: flex-start;
  }
  li a {
    -radius: 7px;
    padding: 0.1rem 0.75rem;
    cursor: pointer;
    @media screen and (max-width: 400px) {
      padding: 0.1rem 0.5rem;
    }
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: var(--clr-blue);
    border-color: transparent;
    color: white;
    min-width: 32px;
    border-radius: 5px;
    padding: 5px 10px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
  .page-link-next {
    margin: 0px 5px;
    background-color: var(--clr-blue);
    padding: 5px 10px;
    border-radius: 5px;
    color: white !important;
  }
  .page-link-prev {
    margin: 0px 5px;
    background-color: var(--clr-blue);
    padding: 5px 10px;
    color: white !important;
    border-radius: 5px;
  }
`;

export { CustomPaginate };
