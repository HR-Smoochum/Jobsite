// LIBRARY IMPORTS
import React, {
  useState, useRef, useEffect,
} from 'react';
import { VStack } from '@chakra-ui/react';

// LOCAL IMPORTS
import Header from '../../Header/Header.jsx';
import ResultList from './ResultList.jsx';
import SearchBar from '../SearchBar.jsx';
import seekersData from '../../Utilities/sampleSeekerData.js';

// COMPONENT
function SearchPage() {
  // SET STATES
  const [searchInput, setSearchInput] = useState('');
  const [searchPageList, setSearchPageList] = useState(seekersData);
  const seekersRef = useRef([]);
  seekersRef.current = seekersData;

  // HOOKS
  const applyFilters = () => {
    let filteredList = seekersRef.current;
    if (searchInput) {
      filteredList = filteredList.filter((seeker) => seeker.resume.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1);
    }
    setSearchPageList(filteredList);
  };

  useEffect(() => {
    applyFilters();
  }, [searchInput]);

  return (
    <VStack m="1rem" bg="brand.green">
      <Header />
      <SearchBar setSearchInput={setSearchInput} />
      <ResultList searchPageList={searchPageList} />
    </VStack>
  );
}

export default SearchPage;
