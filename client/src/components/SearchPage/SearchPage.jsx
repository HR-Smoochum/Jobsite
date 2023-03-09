// LIBRARY IMPORTS
import React, { useState, useContext, useRef } from 'react';
import { HStack, Box } from '@chakra-ui/react';

// LOCAL IMPORTS
import Header from '../Header/Header.jsx';
import JobContext from '../Utilities/JobContext.js';
import FilterPanel from './FilterPanel.jsx';
import ResultList from './ResultList.jsx';
import SearchBar from './SearchBar.jsx';
import { environmentList, experienceList, employmentList } from './filterValues.js';
import jobListingsData from '../Utilities/sampleJobListingData.js';

// COMPONENT
function SearchPage() {
  // SET STATES
  const [experiences, setExperiences] = useState(experienceList);
  const [environments, setEnvironments] = useState(environmentList);
  const [employments, setEmployments] = useState(employmentList);
  const [selectedSalary, setSelectedSalary] = useState([0, 100]);
  const [searchInput, setSearchInput] = useState('');
  const [searchPageList, setSearchPageList] = useState(allJobs);
  const { allJobs } = useContext(JobContext);
  const jobsRef = useRef([]);
  jobsRef.current = jobListingsData; // CHANGE THIS ONCE OTHER FEATURES WORK!!

  // HOOKS
  const handleExperienceChecked = (id) => {
    const experienceStateList = experiences;
    const changeCheckedExperiences = experienceStateList.map((job) => {
      return job.id === id ? { ...job, checked: !job.checked } : job;
    });
    setExperiences(changeCheckedExperiences);
  };
  const handleEnvironmentChecked = (id) => {
    const environmentsStateList = environments;
    const changeCheckedEnvironments = environmentsStateList.map((job) => {
      return job.id === id ? { ...job, checked: !job.checked } : job;
    });
    setEnvironments(changeCheckedEnvironments);
  };
  const handleEmploymentChecked = (id) => {
    const employmentStateList = employments;
    const changeCheckedEmployments = employmentStateList.map((job) => {
      return job.id === id ? { ...job, checked: !job.checked } : job;
    });
    setEmployments(changeCheckedEmployments);
  };
  const handleChangeSalary = (value) => {
    setSelectedSalary(value);
  };

  const applyFilters = () => {
    let filteredList = jobsRef.current;

    // Experience Filter
    const experiencesChecked = experiences
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (experiencesChecked.length) {
      filteredList = filteredList.filter((job) => experiencesChecked.includes(job.experience));
    }

    // Environments Filter
    const environmentsChecked = environments
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (environmentsChecked.length) {
      filteredList = filteredList.filter((job) => environmentsChecked.includes(job.environment));
    }

    // Employment Filter
    const employmentsChecked = employments
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (employmentsChecked.length) {
      filteredList = filteredList.filter((job) => employmentsChecked.includes(job.employment));
    }

    // Search Filter
    if (searchInput) {
      filteredList = filteredList.filter((job) => job.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1);
    }

    // Salary Filter
    const minSalary = selectedSalary[0];
    const maxSalary = selectedSalary[1];

    filteredList = filteredList.filter(
      (job) => (job.salary) / 1000 >= minSalary && (job.salary) / 1000 <= maxSalary
    );

    setSearchPageList(filteredList);
  };

  return (
    <Box m="1rem" bg="brand.green">
      <Header />
      <SearchBar setSearchInput={setSearchInput} />
      <HStack justify="flex-start">
        <FilterPanel
          handleExperienceChecked={handleExperienceChecked}
          handleEnvironmentChecked={handleEnvironmentChecked}
          handleEmploymentChecked={handleEmploymentChecked}
          handleChangeSalary={handleChangeSalary}
        />
        <ResultList allJobs={searchPageList} />
      </HStack>
    </Box>
  );
}

export default SearchPage;
