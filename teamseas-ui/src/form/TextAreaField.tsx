import {
    FormControl,
    FormErrorMessage,
    FormLabel,
  } from '@chakra-ui/form-control';
  import { Textarea } from '@chakra-ui/react';
  import { FieldHookConfig, useField } from 'formik';
  import React from 'react';
  
  type TextareaFieldProps = FieldHookConfig<string> & {
    label: string;
    placeholder?: string;
  };
  
  export const TextareaField = ({
    label,
    placeholder,
    ...props
  }: TextareaFieldProps) => {
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
        <Textarea id={field.name} placeholder={placeholder} {...field} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  };