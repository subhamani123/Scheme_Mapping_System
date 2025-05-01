import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#09697a' }}>
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Left Side - Contact Info */}
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ p: 4, borderRadius: "12px", boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              📞 Phone: <strong>+91 98765 43210</strong>
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              📧 Email: <strong>nammatnschemes@gmail.com</strong>
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Connect with us:
            </Typography>
            <Stack direction="row" spacing={3}>
              <IconButton color="primary" href="https://facebook.com" target="_blank" sx={{ '&:hover': { transform: 'scale(1.1)', transition: '0.3s' } }}>
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton color="primary" href="https://twitter.com" target="_blank" sx={{ '&:hover': { transform: 'scale(1.1)', transition: '0.3s' } }}>
                <Twitter fontSize="large" />
              </IconButton>
              <IconButton color="primary" href="https://instagram.com" target="_blank" sx={{ '&:hover': { transform: 'scale(1.1)', transition: '0.3s' } }}>
                <Instagram fontSize="large" />
              </IconButton>
              <IconButton color="primary" href="https://linkedin.com" target="_blank" sx={{ '&:hover': { transform: 'scale(1.1)', transition: '0.3s' } }}>
                <LinkedIn fontSize="large" />
              </IconButton>
            </Stack>
          </Paper>
        </Grid>

        {/* Right Side - Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ p: 4, borderRadius: "12px", boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Send Us a Message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    name="name"
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    name="message"
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#09697a",
                      "&:hover": { backgroundColor: "#074f5b" },
                      borderRadius: "8px",
                      padding: "10px 30px",
                      fontWeight: 'bold',
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
