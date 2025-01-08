import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]*)|(\([0-9]{2,3}\)[ -]*)|([0-9]{2,4})[ -]*)*?[0-9]{3,4}?[ -]*[0-9]{3,4}?$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Invalid contact number")
    .required("Contact number is required"),
  address1: yup.string().required("Address is required"),
  address2: yup.string().required("Address is required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? "span 2" : "span 4" },
              }}
            >
              <TextField
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                label="First Name"
                name="firstName"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!errors.firstName && !!touched.firstName}
                helperText={
                  errors.firstName && touched.firstName && errors.firstName
                }
                sx={{ girdColumn: "span 2" }}
              />
              <TextField
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!errors.lastName && !!touched.lastName}
                helperText={
                  errors.lastName && touched.lastName && errors.lastName
                }
                sx={{ girdColumn: "span 2" }}
              />
              <TextField
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                label="Email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!errors.email && !!touched.email}
                helperText={errors.email && touched.email && errors.email}
                sx={{ girdColumn: "span 4" }}
              />
              <TextField
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                label="Contact Number"
                name="contact"
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!errors.contact && !!touched.contact}
                helperText={errors.contact && touched.contact && errors.contact}
                sx={{ girdColumn: "span 4" }}
              />
              <TextField
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                label="Address 1"
                name="address1"
                value={values.address1}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!errors.address1 && !!touched.address1}
                helperText={
                  errors.address1 && touched.address1 && errors.address1
                }
                sx={{ girdColumn: "span 4" }}
              />
              <TextField
                fullWidth
                margin="normal"
                variant="filled"
                type="text"
                label="Address 2"
                name="address2"
                value={values.address2}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!errors.address2 && !!touched.address2}
                helperText={
                  errors.address2 && touched.address2 && errors.address2
                }
                sx={{ girdColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
