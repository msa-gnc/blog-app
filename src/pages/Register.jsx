import { Password } from "@mui/icons-material";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import { Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container
    maxWidth="lg"
    sx={{p:4}}
    >
      <Grid container
        direction="column"
        alignItems="center"
        sx={{mt:10}}
       >
        <Grid item>

          <Avatar sx={{ background: "#64068f"}}>
            <LockTwoToneIcon /> 
          </Avatar>
        </Grid>

        <Grid item>
            <Typography variant="h4">Sign up</Typography>
        </Grid>

        <Grid item

         > 
            
          <Formik
          initialValues={{
        username:"",
        firstname:"",
        lastname:"",
        email:"",
        image:"",
        bio:"",
        Password:"",
          }}
          validate={{}}
          onSubmit={{}}
          
          >
          
            {(
                {
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
               
                  }
            )=>(
                <form action="">
                    <TextField 
                    name="username"
                    label="Username"
                     variant="outlined" 
                     fullWidth={true}
                     value={values.username}
                     onChange={handleChange}
                     helperText={touched.username && errors.username}
                     onBlur={handleBlur}
                     error={touched.username && errors.username}
                     margin="normal"

                     />

                    <TextField 
                    name="firstname"
                    label="First Name"
                     variant="outlined" 
                     fullWidth={true}
                     value={values.firstname}
                     onChange={handleChange}
                     helperText={touched.firstname && errors.firstname}
                     onBlur={handleBlur}
                     error={touched.firstname && errors.firstname}
                     margin="normal"
                     />
                    <TextField 
                    name="lastname"
                    label="Last Name"
                     variant="outlined" 
                     fullWidth={true}
                     value={values.lastname}
                     onChange={handleChange}
                     helperText={touched.lastname && errors.lastname}
                     onBlur={handleBlur}
                     error={touched.lastname && errors.lastname}
                     margin="normal"
                     />
                    <TextField 
                    name="email"
                    label="Email Address"
                     variant="outlined" 
                     fullWidth={true}
                     value={values.email}
                     onChange={handleChange}
                     helperText={touched.email && errors.email}
                     onBlur={handleBlur}
                     error={touched.email && errors.email}
                     margin="normal"
                     type="email"
                     />
                    <TextField 
                    name="image"
                    label="Image"
                     variant="outlined" 
                     fullWidth={true}
                     value={values.image}
                     onChange={handleChange}
                     helperText={touched.image && errors.image}
                     onBlur={handleBlur}
                     error={touched.image && errors.image}
                     margin="normal"
                     />
                    <TextField 
                    name="bio"
                    label="Bio"
                     variant="outlined" 
                     fullWidth={true}
                     value={values.bio}
                     onChange={handleChange}
                     helperText={touched.bio && errors.bio}
                     onBlur={handleBlur}
                     error={touched.bio && errors.bio}
                     margin="normal"
                     />
                    <TextField 
                    name="bio"
                    label="Password"
                     variant="outlined" 
                     fullWidth
                     value={values.bio}
                     onChange={handleChange}
                     helperText={touched.bio && errors.bio}
                     onBlur={handleBlur}
                     error={touched.bio && errors.bio}
                     margin="normal"
                     type="password"
                     />
                     <Button variant="contained"   fullWidth type="submit" sx={{background:"#64068f"}} >Sign up</Button>
                </form>
                
                
            )}
          </Formik>
          <Box sx={{textAlign:"center"}}>
            <>Already have an acoount? Sign in</>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Register;
