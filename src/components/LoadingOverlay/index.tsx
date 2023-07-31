import { styled } from 'styled-components';
import Spinner from './Spinner';

const Overlay = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #00000070;
  z-index: 50;
`;

const LoadingOverlay: React.FC = () => {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};

export default LoadingOverlay;
