import { useEffect, useMemo, useState } from 'react';
import { fetchStolenBikeData, selectStolenBikeState } from '../../store/stolenBikeReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import useDebounce from '../utilities/useDebounce';
import 'react-datepicker/dist/react-datepicker.css';
import { startOfDay, endOfDay } from 'date-fns';
import { SearchBarProps } from '.';

const useSearchBar = (page: number) => {
  const [query, setQuery] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const dispatch = useAppDispatch();
  const debouncedQuery = useDebounce(query, 600);

  const { list } = useAppSelector(selectStolenBikeState);

  useEffect(() => {
    dispatch(fetchStolenBikeData({ page, query: debouncedQuery }));
  }, [debouncedQuery, page]);

  const filteredList = useMemo(
    () =>
      list.filter(({ date_stolen }) => {
        if ((startDate || endDate) && !date_stolen) return false;
        const isAfterStartDate = startDate ? date_stolen! * 1000 >= startOfDay(startDate).getTime() : true;
        const isBeforeEndDate = endDate ? date_stolen! * 1000 <= endOfDay(endDate).getTime() : true;
        return isAfterStartDate && isBeforeEndDate;
      }),
    [endDate, list, startDate],
  );

  const searchBarProps: SearchBarProps = {
    query,
    startDate,
    endDate,
    setQuery,
    setStartDate,
    setEndDate,
  };

  return {
    searchBarProps,
    filteredList,
  };
};

export default useSearchBar;
