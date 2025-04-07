import React from "react";
import { TextField, Button, Card, CardContent, Typography, Grid, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom"; // Import Link for navigation

const categories = [
  { title: "Agriculture" },
  { title: "Education" },
  { title: "Employment" },
  { title: "Empowerment" },
  { title: "Healthcare" },
];

const SchemePage = () => {
  return (
    <Container maxWidth="lg" style={{ padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Tamil Nadu Government Schemes
      </Typography>

      {/* Search Bar */}
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search schemes..."
            InputProps={{
              endAdornment: (
                <Button 
  variant="contained" 
  sx={{ backgroundColor: "#09697a", color: "white", '&:hover': { backgroundColor: "#074f5b" } }} 
>
  <SearchIcon />
</Button>

              ),
            }}
          />
        </Grid>
      </Grid>

      {/* Categories */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#09697a", // Background color for categories
                color: "white", // White text for better contrast
              }}
            >
              <CardContent>
                <Typography variant="h6">{category.title}</Typography>
                <Button
                  style={{
                    backgroundColor: "white", // Button background white
                    color: "black", // Text color black
                    marginTop: "10px",
                    fontWeight: "bold",
                    border: "1px solid black", // Optional: add a border for better visibility
                  }}
                >
                  View Schemes
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Home Button */}
      <Grid container justifyContent="center" style={{ marginTop: "30px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
        <Button 
  variant="contained" 
  sx={{ backgroundColor: "#09697a", color: "white", '&:hover': { backgroundColor: "#074f5b" } }} 
  size="large"
>
  🏠 Home
</Button>

        </Link>
      </Grid>
    </Container>
  );
};

export default SchemePage;
