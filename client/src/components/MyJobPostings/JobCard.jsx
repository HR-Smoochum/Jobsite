/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  Card, CardHeader, CardBody, Text, Heading, Flex, Image, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Icon, Center,
} from '@chakra-ui/react';
import { HiEllipsisVertical, HiChevronDoubleDown } from 'react-icons/hi2';
import { AiFillHeart } from 'react-icons/ai';
import JobDetail from './JobDetail.jsx';

// Job = {
//   id: 1,
//   title: 'software engineer',
//   location: 'seattle',
//   employment: 'remote',
//   experience: 'entry level',
//   date: '3/1/2023',
//   logo: 'https://images.app.goo.gl/SW3mMuphfe114aZT9',
//   company: 'google',
// }
export default function JobCard({ Job, index, handleCheck }) {
  const [showMore, setShowMore] = useState(0);

  const handleDetail = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    setShowMore(1);
  };
  const handleInterested = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    console.log(e.target);
    // update job's interested level
    // if (e.target.value === 'very interested') {

    // } else {

    // }
  };

  return (
    <>
      {
        showMore === 0 && (
          <Box>
            <input type="checkbox" id={index} style={{ width: '15px', height: '15px', color: 'brand.light' }} onChange={handleCheck} />
            <label htmlFor={index}>
              <Card maxW="md">
                <CardHeader>
                  <Flex spacing="8">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Image
                        borderRadius="full"
                        boxSize="50px"
                        src={Job.logo}
                        alt="company logo"
                      />
                      <Box>
                        <Heading size="sm">{Job.company}</Heading>
                        <Text>{Job.title}</Text>
                      </Box>
                    </Flex>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<HiEllipsisVertical />}
                        variant="ghost"
                      />
                      <MenuList>
                        <MenuItem bg="brand.green" value="interested">
                          <Icon as={AiFillHeart} color="#ffcccc" mr="3px" />
                          Interested
                        </MenuItem>
                        <MenuItem onClick={handleInterested} value="very interested">
                          <Icon as={AiFillHeart} color="#ff8080" mr="3px" />
                          Very Interested
                        </MenuItem>
                        <MenuItem onClick={handleInterested} value="extremely interested">
                          <Icon as={AiFillHeart} color="#ff0000" mr="3px" />
                          Extremely Interested
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    With Chakra UI, I wanted to sync the speed of development with the speed
                    of design. I wanted the developer to be just as excited as the designer to
                    create a screen.
                  </Text>
                  <Center>
                    <IconButton aria-label="show more" icon={<HiChevronDoubleDown />} variant="ghost" onClick={handleDetail} />
                  </Center>
                </CardBody>
              </Card>

            </label>

          </Box>
        )
      }
      {
        showMore === 1
        && (
          <Box>
            <input type="checkbox" id={index} style={{ width: '15px', height: '15px', color: 'brand.light' }} />
            <label htmlFor={index}>
              <JobDetail Job={Job} setShowMore={setShowMore} />
            </label>
          </Box>
        )
      }
    </>
  );
}
