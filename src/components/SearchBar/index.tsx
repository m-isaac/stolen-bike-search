import React from 'react';
import { styled } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { COLOR_PALETTE } from '../../constants';

const Wrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  border-bottom: 2px solid ${COLOR_PALETTE.BLUE_1};
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${COLOR_PALETTE.BLUE_4};
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px 0.6rem;
  font-size: inherit;
`;
const DateInput = styled(Input)`
  width: 95%;
`;

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export interface SearchBarProps {
  query: string;
  startDate: Date | null;
  endDate: Date | null;
  setQuery: (query: string) => void;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, startDate, endDate, setQuery, setStartDate, setEndDate }) => {
  return (
    <Wrapper>
      <Input type="text" placeholder="Search by text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <DatePickerContainer>
        <label htmlFor="start-date">From</label>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          customInput={<DateInput />}
          id="start-date"
        />
        <label htmlFor="end-date">To</label>
        <DatePicker
          selected={endDate}
          onChange={setEndDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          customInput={<DateInput />}
          id="end-date"
        />
      </DatePickerContainer>
    </Wrapper>
  );
};

export default React.memo(SearchBar);
