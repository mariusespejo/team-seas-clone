import { Button } from '@chakra-ui/button';
import { Box, VStack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { useMutation } from 'urql';
import { CountSelection } from './CountSelection';
import { DonationDetails } from './DonationDetails';

const CreateDonation = `
  mutation Mutation($createDonationInput: CreateDonationInput!) {
    createDonation(createDonationInput: $createDonationInput) {
      count
      createdAt
      id
    }
  }
`;

interface Props {}

export const DonationWizard = (props: Props) => {
  const [step, setStep] = useState(0);
  const [donationDetails, setDonationDetails] = useState({
    count: 20,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [donationResult, createDonation] = useMutation(CreateDonation);

  const next = (values: any = {}) => {
    const mergedDetails = { ...donationDetails, ...values };

    if (step === pages.length - 1) {
      submitDonation(mergedDetails);
    } else {
      setStep(step + 1);
      setDonationDetails(mergedDetails);
    }
  };

  const previous = () => {
    setStep(step - 1);
  };

  const submitDonation = async (values: any) => {
    await createDonation({ createDonationInput: values});
    setShowConfirmation(true);
  }

  const pages = [
    <CountSelection next={next} initialCount={donationDetails.count} />,
    <DonationDetails next={next} previous={previous} />,
  ];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
       {showConfirmation ? (
        <div>
          Thank you for your donation of $
          {donationResult?.data.createDonation?.count}!!
        </div>
      ) : (
        pages[step]
      )}
    </Box>
  );
};
