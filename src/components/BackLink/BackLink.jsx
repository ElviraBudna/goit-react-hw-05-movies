import { HiArrowLeft } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
// import styled from '@emotion/styled';

// const StyledLink = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
//   padding: 8px 0;
//   color: black;
//   text-decoration: none;
//   font-weight: 500;
//   text-transform: uppercase;

//   :hover {
//     color: orangered;
//   }
// `;

// const BackLink = ({ to, children }) => {
//   return (
//     <StyledLink to={to}>
//       <HiArrowLeft size="24" />
//       {children}
//     </StyledLink>
//   );
// };

// export default BackLink;

import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { BackLinkBtn } from './BackLink.styled';
// import { ReactComponent as ArrowIcon } from './../../images/arrow-left.svg';

const BackLink = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <BackLinkBtn to={backLinkHref.current}>
      {/* <ArrowIcon width="25" height="25" /> */}
      <HiArrowLeft size="24" />
      Go back to films
    </BackLinkBtn>
  );
};

export default BackLink;
