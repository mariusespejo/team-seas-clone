import { Avatar } from '@chakra-ui/avatar';
import { Badge, Flex, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { Donation } from '../types';
import formatDate from '../utils/formatDate';

interface Props {
  donation: Donation;
}

export const LeaderboardItem = ({ donation }: Props) => {
  return (
    <Flex
      boxShadow="md"
      p={3}
      bg="white"
      borderRadius="lg"
      maxWidth="xl"
      w="100%"
    >
      <Avatar size="lg" />
      <Box flex="1" ml={4}>
        <Flex justifyContent="space-between" h="100%">
          <Flex flexDirection="column" justifyContent="center" textAlign="left">
            <Text
              fontWeight="bold"
              color="blue.500"
              fontSize="sm"
              textTransform="uppercase"
            >
              {donation.team}
            </Text>
            <Text fontWeight="bold">{donation.displayName}</Text>
            <Text fontSize="sm">{donation.message}</Text>
          </Flex>

          <Flex
            flexDirection="column"
            justifyContent="space-around"
            textAlign="right"
          >
            <div>
              <Badge
                colorScheme="blue"
                borderRadius="full"
                textTransform="lowercase"
                py={1}
                px={3}
                as="div"
              >
                {donation.count.toLocaleString()} pounds
              </Badge>
            </div>
            <Text fontSize="xs">{formatDate(donation.createdAt)}</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
