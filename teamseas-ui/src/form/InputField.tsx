import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import React from 'react';

type InputFieldProps = FieldHookConfig<string> & {
  label: string;
  placeholder?: string;
};

export const InputField = ({
  label,
  placeholder,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(props);

  const hasError = Boolean(meta.touched && meta.error);
  
  return (
    <FormControl isInvalid={hasError}>
      <FormLabel
        htmlFor={field.name}
        fontWeight="bold"
        fontSize="xs"
        textTransform="uppercase"
      >
        {label}
      </FormLabel>
      <Input id={field.name} placeholder={placeholder} {...field} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
