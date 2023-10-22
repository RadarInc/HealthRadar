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
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useState } from "react";

export default function Log() {
  const [data, setData] = useState([]);
  const toast = useToast();

  return (
    <>
      <div>
        {" "}
        <Center minH="100vh">
          <Formik
            initialValues={{ name: "" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);

                // Send a post request to backend
                axios
                  .post("/api/v1/users", {
                    namemess: "Fred",
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
                        <Center>
                          <FormLabel fontSize="3xl">
                            Tell us about your day:
                          </FormLabel>
                        </Center>
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
        {data}
      </div>
    </>
  );
}
