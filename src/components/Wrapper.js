import styled from 'styled-components';

const Wrapper = styled.main`
  width: ${props => props.theme.width};
  max-width: ${props => props.theme.maxWidth};
`;

export default Wrapper;
