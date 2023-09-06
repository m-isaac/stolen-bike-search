import { selectStolenBikeState } from './store/stolenBikeReducer';
import { useAppSelector } from './store/hooks';
import { styled } from 'styled-components';
import useSearchBar from './components/SearchBar';
import { COLOR_PALETTE } from './constants';
import Grid from './components/Grid';
import usePagination from './components/Pagination';
import LoadingOverlay from './components/LoadingOverlay';
import NoResultsMessage from './components/NoResultsMessage';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR_PALETTE.BLUE_2};
  height: 100vh;
`;

function App() {
  const { status, error } = useAppSelector(selectStolenBikeState);
  const { paginationProps, Pagination } = usePagination();
  const { filteredList, searchBarProps, SearchBar } = useSearchBar(paginationProps.page);
  const defaultErrorMessage = 'Some error happened. Please try reloading the page';
  const noResultsMessage = 'Your search returned an empty list. Please try changing your filters';

  return (
    <AppWrapper>
      {status === 'loading' && <LoadingOverlay />}
      <SearchBar {...searchBarProps} />
      {status !== 'failed' && <Grid list={filteredList} />}
      <Pagination {...paginationProps} />
      {status === 'failed' && <NoResultsMessage>{error?.message ?? defaultErrorMessage}</NoResultsMessage>}
      {status === 'succeeded' && !filteredList.length && <NoResultsMessage>{noResultsMessage}</NoResultsMessage>}
    </AppWrapper>
  );
}

export default App;
