import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Center,
  Textarea,
  useToast,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Flex, // Import Flex from Chakra UI
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useState } from "react";
import { json } from "stream/consumers";

export default function Log() {
  const [data, setData] = useState([]);
  const toast = useToast();

  return (
    <>
      <div>
        <Center minH="100vh">
          <Formik
            initialValues={{ name: "" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                actions.setSubmitting(false);

                // Send a post request to the backend
                axios
                  .post("http://127.0.0.1:5000/", {
                    message: values.name,
                  })
                  .then((response) => {
                    setData(response.data);
                    console.log(data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });

                toast({
                  title: "Journal entry submitted.",
                  description: "Thank you!",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }, 1000);
            }}
          >
            {(props) => (
              <Center>
                <Form>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <Center></Center>
                        <FormLabel fontSize="3xl">Tell us about your day: </FormLabel>
                        <Textarea
                          {...field}
                          placeholder="Journal here..."
                          rows="10"
                          cols="80"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Center>
                    <Button
                      mt={4}
                      colorScheme="teal"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Center>
                </Form>
              </Center>
            )}
          </Formik>
        </Center>
      </div>

      <Flex justifyContent="center">
        {data['scores']?.map((item, index) => (
          <div key={index} style={{ margin: '0 1rem' }}>
            <CircularProgress value={item * 100} size="12rem" padding="3rem">
              <CircularProgressLabel>
                <Text fontSize="2rem">
                  {data['labels'][index].charAt(0).toUpperCase() + data['labels'][index].slice(1)}
                </Text>
              </CircularProgressLabel>
            </CircularProgress>
          </div>
        ))}
      </Flex>
    </>
  );
}
