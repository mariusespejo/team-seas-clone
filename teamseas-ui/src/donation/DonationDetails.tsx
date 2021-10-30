import { VStack, Button, Heading } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import { InputField } from '../form/InputField';
import { TextareaField } from '../form/TextAreaField';
import * as yup from 'yup';

const detailsSchema = yup.object().shape({
  displayName: yup.string().required('Please enter a display name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  mobile: yup.string().nullable(),
  team: yup.string().nullable(),
  message: yup.string().nullable(),
});

interface Props {
  next: (values: any) => void;
  previous: () => void;
}

export const DonationDetails = ({ next, previous }: Props) => {
  const submit = (values: any) => {
    next(values);
  };

  return (
    <Formik
      initialValues={{
        displayName: '',
        email: '',
        mobile: '',
        team: '',
        message: '',
      }}
      onSubmit={submit}
      validationSchema={detailsSchema}
    >
      {(formikProps) => (
        <Form>
          <VStack spacing={4} align="stretch">
            <Heading as="h3" size="md">
              Details
            </Heading>
            <InputField
              label="Display Name"
              name="displayName"
              placeholder="Display Name"
            />

            <InputField
              label="Email Address"
              name="email"
              placeholder="Email"
            />

            <InputField
              label="Mobile Phone"
              name="mobile"
              placeholder="Mobile Phone"
            />

            <InputField label="Team" name="team" placeholder="Team name" />

            <TextareaField
              label="Message"
              name="message"
              placeholder="My #TeamSeas message is..."
            />

            <hr />

            <VStack spacing={2}>
              <Button
                isFullWidth
                colorScheme="orange"
                size="lg"
                borderRadius="full"
                type="submit"
              >
                Submit
              </Button>
              <Button
                isFullWidth
                size="lg"
                borderRadius="full"
                variant="ghost"
                fontSize="sm"
                color="gray.700"
                onClick={previous}
              >
                Previous
              </Button>
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
