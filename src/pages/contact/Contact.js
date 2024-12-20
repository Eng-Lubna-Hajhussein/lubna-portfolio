import {
  Button,
  Grid,
  TextField,
  useMediaQueryMatch,
} from "@basetoolkit/ui";
import { useForm, Controller } from "@basetoolkit/ui/form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const Contact = () => {
  const form = useRef(null);
  const isNonMobile = useMediaQueryMatch("(min-width:600px)");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (data, e) => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_s1zyeer",
          "template_33a8fbs",
          form.current,
          "r4YwEmscEOLDmoNcm"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    alert("Thank you, your message has been received. We will reply to you.");
  };

  return (
    <Grid container spacing={3} pt={4} style={{ padding: "30px" }}>
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        style={{ width: "100%" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} mt={2} sm={6}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: {value:true,message:"First name is required"} }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="standard"
                  label="First Name"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} mt={2} sm={6}>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: {value:true,message:"Last name is required"} }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="standard"
                  label="Last Name"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: {value:true,message:"Email is required"},
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="standard"
                  label="Email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <Controller
              name="contact"
              control={control}
              rules={{
                required: {value:true,message:"Contact number is required"},
                pattern: {
                  value: phoneRegExp,
                  message: "Phone number is not valid",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="standard"
                  label="Contact Number"
                  error={!!errors.contact}
                  helperText={errors.contact?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <Controller
              name="message"
              control={control}
              rules={{
                required: { value: true, message: "Message is required" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  rows={4}
                  variant="standard"
                  label="Message"
                  error={!!errors.message?.message}
                  helperText={errors.message?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="end" mt={4}>
            <Button
              type="submit"
              style={{ backgroundColor: "var(--bg-dot)" }}
              variant="contained"
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Contact;
