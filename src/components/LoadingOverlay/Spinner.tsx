import { styled } from 'styled-components';

// source: https://codepen.io/mandelid/pen/kNBYLJ
const Spinner = styled.div`
  display: inline-block;
  width: 6rem;
  height: 6rem;
  border: 0.4rem solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
