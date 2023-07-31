import { styled } from 'styled-components';
import { COLOR_PALETTE } from '../../constants';
import React from 'react';

const Container = styled.div`
  display: flex;
  padding: 0.2rem;
  gap: 0.7rem;
  position: fixed;
  bottom: 20px;
  left: calc(50% - 8.95rem);
  font-size: 1rem;
  font-weight: 700;
  background-color: white;
  border: 2px solid black;
  border-radius: 12px;
  align-items: center;
  opacity: 0.4;
  transform: scale(0.85);
  transition: opacity, transform 0.15s;
  z-index: 60;
  &:hover,
  &:active {
    opacity: 1;
    transform: scale(1);
  }
`;

const PaginationButton = styled.button`
  width: 7rem;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: ${COLOR_PALETTE.BLUE_1};
  font-size: inherit;
  font-weight: inherit;
  color: white;
  cursor: pointer;
  &:disabled{
    background-color: gray;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.span`
  font-size: inherit;
  font-weight: inherit;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  text-align: center;
  border: 1px solid black;
  line-height: 1.8;
  background-color: black;
  color: white;
`;

export interface PaginationProps {
  page: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, handleNext, handlePrevious }) => {
  return (
    <Container>
      <PaginationButton onClick={handlePrevious} disabled={page <= 1}>
        Previous
      </PaginationButton>
      <PageIndicator>{page}</PageIndicator>
      <PaginationButton onClick={handleNext}>Next</PaginationButton>
    </Container>
  );
};

export default React.memo(Pagination);
