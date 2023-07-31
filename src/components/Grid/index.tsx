import { styled } from 'styled-components';
import Card from './Card';
import { Bike } from '../../types';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1rem;
  padding: 0.5rem 0.8rem;
  overflow-y: auto;
`;

interface Props {
  list: Bike[];
}

const Grid: React.FC<Props> = ({ list }) => {
  return (
    <Wrapper>
      {list.map(({ date_stolen, description, id, stolen_location, title, thumb }) => (
        <Card
          key={id}
          date={date_stolen}
          description={description ? `Description: ${description}` : undefined}
          location={stolen_location}
          picture={thumb}
          title={title}
        />
      ))}
    </Wrapper>
  );
};

export default Grid;
