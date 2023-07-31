import React from 'react';
import styled from 'styled-components';
import { COLOR_PALETTE } from '../../../constants';
import defaultBikeImage from './defaultBikePicture.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(255 255 255 / 70%);
  border-radius: 4px;
  padding: 0.8rem;
  background-color: rgb(255 255 255 / 50%);
  color: ${COLOR_PALETTE.BLUE_5};
  box-shadow: 2px 2px 3px 1px #0000009e;
  position: relative;
  gap: 10px;
  transition: box-shadow 0.15s;
  &:hover {
    box-shadow: 5px 5px 3px 1px #0000009e;
  }
`;

const ImageContainer = styled.div<{ $imageSource: string }>`
  background-image: url(${({ $imageSource }) => $imageSource});
  overflow: hidden;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 240px;
  border-radius: 4px;
`;

const Title = styled.span`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: inherit;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${COLOR_PALETTE.BLUE_5};
  font-weight: 500;
  &:hover, &:active {
    & > span {
      visibility: visible;
    }
  }
`;

const Description = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ToolTip = styled.span`
  visibility: hidden;
  background-color: #e0e0e0;
  color: #000;
  border: 1px solid gray;
  border-radius: 6px;
  padding: 4px;
  width: 50%;
  position: absolute;
  left: 4%;
  bottom: 27%;
  z-index: 1;
  font-size: 0.6rem;
`;

const StyledSpan = styled.span`
  color: red;
`;

interface Props {
  title: string;
  description?: string;
  date: number | null;
  location: string;
  picture: string | null;
}
const Card: React.FC<Props> = ({ title, description, date, location, picture }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ImageContainer $imageSource={picture ?? defaultBikeImage} />
      <DetailContainer>
        {description && (
          <>
            <ToolTip>{description}</ToolTip>
            <Description>{description}</Description>
          </>
        )}
        <div>
          <StyledSpan>Stolen: </StyledSpan> <span>{date ? new Date(date * 1000).toDateString() : 'Unknown date'}</span>
        </div>
        <span>{location}</span>
      </DetailContainer>
    </Wrapper>
  );
};

export default React.memo(Card);
