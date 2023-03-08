/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React from 'react';
import {
  Card, CardHeader, CardBody, Text, Heading, Flex, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Icon, Avatar,
} from '@chakra-ui/react';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { AiFillHeart } from 'react-icons/ai';

// Seeker = {
//   uid: 4,
//   first_name: 'Ava',
//   last_name: 'Wong',
//   industry: 'Software Engineer',
//   resume: {},
//   notes: [],
//   saved: {},
// }
export default function SeekerCard({ seeker }) {
  const handleInterested = (e) => {
    console.log(e.target);
    // update Seeker's interested level
    // if (e.target.value === 'very interested') {

    // } else {

    // }
  };

  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="8">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Heading size="sm">
                {seeker.first_name}
                &nbsp;
                {seeker.last_name}
              </Heading>
              <Text>{seeker.industry}</Text>
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
          {seeker.resume.resume}
        </Text>
      </CardBody>
    </Card>
  );
}