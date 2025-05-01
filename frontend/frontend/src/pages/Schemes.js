import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Agriculture",
    description: "Schemes related to agriculture and farming development.",
    schemes: [
      { name: "TN Soil Health Management Scheme" },
      { name: "TN Crop Insurance Scheme" },
      { name: "Farmers Welfare Fund" },
      { name: "Micro Irrigation Scheme (Drip/Sprinkler)" },
      { name: "Subsidy for Farm Machinery and Tools" },
    ],
  },
  {
    title: "Education",
    description: "Scholarships, fee waivers, and education-related assistance.",
    schemes: [
      { name: "Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme" },
      { name: "Free Bicycle Scheme for Students" },
      { name: "Free Bus Pass Scheme for School & College Students" },
      { name: "Post Matric Scholarship for SC/ST/OBC" },
      { name: "Chief Minister’s Merit Award" },
    ],
  },
  {
    title: "Employment",
    description: "Job opportunities and skill development programs.",
    schemes: [
      { name: "TN Velai Vaippu Employment Exchange Scheme" },
      { name: "Naan Mudhalvan – Skill Development Program" },
      { name: "Unemployed Youth Monthly Allowance Scheme" },
      { name: "New Entrepreneur-cum-Enterprise Development Scheme (NEEDS)" },
      { name: "Skill Training through TNSDC" },
    ],
  },
  {
    title: "Empowerment",
    description: "Programs for empowering women, SC/ST, and minority groups.",
    schemes: [
      { name: "Tamil Nadu Mahalir Thittam (Women Empowerment Mission)" },
      { name: "Self Help Group (SHG) Bank Linkage Scheme" },
      { name: "Free Sewing Machine Scheme" },
      { name: "Marriage Assistance Scheme for SC/ST Girls" },
      { name: "Free Laptop Scheme for SC/ST Students" },
    ],
  },
  {
    title: "Healthcare",
    description: "Health insurance, medical assistance, and wellness schemes.",
    schemes: [
      { name: "Chief Minister’s Comprehensive Health Insurance Scheme (CMCHIS)" },
      { name: "Muthulakshmi Reddy Maternity Benefit Scheme" },
      { name: "Dr. MGR Nutrition Meal Programme" },
      { name: "Free Master Health Check-up in Govt. Hospitals" },
      { name: "Mobile Medical Units in Rural Areas" },
    ],
  },
];

const SchemePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 8 }}>
  Tamil Nadu Government Schemes
</Typography>


      {/* Search Bar */}
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search schemes..."
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#09697a",
                    color: "white",
                    "&:hover": { backgroundColor: "#074f5b" },
                  }}
                >
                  <SearchIcon />
                </Button>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* Content Area */}
      {selectedCategory ? (
        <>
          <Typography variant="h5" align="center" sx={{ mb: 3 }}>
            {selectedCategory.title} Schemes
          </Typography>
          <Grid container spacing={3}>
            {selectedCategory.schemes.map((scheme, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ border: "1px solid #ccc", borderRadius: "8px" }}>
                  <CardContent>
                    <Typography variant="h6">{scheme.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container justifyContent="center" sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              onClick={() => setSelectedCategory(null)}
              sx={{
                borderColor: "#09697a",
                color: "#09697a",
                "&:hover": { borderColor: "#09697a" },
              }}
            >
              ⬅ Back to Categories
            </Button>
          </Grid>
        </>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {categories.map((category, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={2.4}
              sx={{
                flexBasis: {
                  xs: '100%',
                  sm: '48%',
                  md: '30%',
                  lg: '19%',
                },
                maxWidth: {
                  xs: '100%',
                  sm: '48%',
                  md: '30%',
                  lg: '19%',
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  padding: 2,
                  backgroundColor: "#09697a",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {category.description}
                  </Typography>
                  <Button
                    onClick={() => handleCategoryClick(category)}
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      fontWeight: "bold",
                      border: "1px solid black",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    View Schemes
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Home Button */}
    </Container>
  );
};

export default SchemePage;
