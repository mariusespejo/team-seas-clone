import { useRadio, Box, UseRadioProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props extends UseRadioProps {
  children: ReactNode;
}

const RadioCard = (props: Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        fontSize="lg"
        _checked={{
          bg: 'blue.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={2}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
