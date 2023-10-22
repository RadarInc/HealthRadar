import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

export default function Log() {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);

          // TODO: Send data to backend
          axios.post('/api/log', { name: values.name })
        }, 1000);
      }}
    >
      {(props) => (
        <Center>
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Tell us about your day:</FormLabel>
                  <Input {...field} placeholder="Name" width="85rem" height="35rem"/>
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
  );
}
