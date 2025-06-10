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
      { name: "Tamil Nadu Mission on Sustainable Dryland Agriculture (TNSDA)" },
      { name: "Chief Minister's Solar Powered Pump Set Scheme" },
      { name: "Micro Irrigation Scheme" },
      { name: "Integrated Farming System (IFS)" },
      { name: "Kalaignar All Village Integrated Agriculture Development Programme" },
      { name: "Chief Minister’s Mannuyir Kaathu Mannuyir Kaappom Scheme" },
      { name: "Tamil Nadu Millet Mission" },
      { name: "Tamil Nadu Oilseed Mission" },
      { name: "Nutrition Farming Mission" },
      { name: "Malaivazh Uzhavar Munnetra Thittam" },
      { name: "One Village One Crop Scheme" },
      { name: "Alternative Crop Cultivation Scheme" },
      { name: "Kudimaramathu Scheme" },
      { name: "Summer Ploughing Scheme" },
      { name: "Uzhavar Angadis" },
      { name: "Agri-Entrepreneurship Support" },
      { name: "Aavin Collaboration" },
      { name: "Mini Dairy Scheme" },
      { name: "Increased Subsidies for SC/ST Farmers" },
      { name: "Chief Minister’s Farmers Service Centres" },
      { name: "Seed Processing Units" },
      { name: "Sugarcane Farmers Incentive" },
      { name: "Geographical Indication (GI) Tags" },
      { name: "Maize Production Enhancement" },
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
      { name: "Pudhumai Penn Scheme" },
      { name: "Tamil Pudhalvan Scheme" },
      { name: "Naan Mudhalvan Scheme" },
      { name: "Illam Thedi Kalvi (Education at Doorstep)" },
      { name: "Ennum Ezhuthum Mission" },
      { name: "Vaanavil Mandram" },
      { name: "Free Laptop Scheme" },
      { name: "Free Education Scheme" },
      { name: "Midday Meal Scheme" },
      { name: "Distribution of Free Textbooks and Uniforms" },
      { name: "Early Childhood Care and Education (ECCE)" },
      { name: "Integrated Education for the Disabled (IED)" },
      { name: "Kasturba Gandhi Balika Vidyalaya (KGBV)" },
      { name: "National Programme for Education of Girls at Elementary Level (NPEGEL)" },
      { name: "Educational Satellite (EDUSAT)" },
      { name: "TTT (Thulir Thiran Thittam)" },
      { name: "Parent-Teacher Association (PTA) Support" },
      { name: "Scholarship Programs for SC/ST Students" },
      { name: "Financial Assistance for Top 10th Grade Students" },
      { name: "Free Education for First-Generation Graduates" },
      { name: "Higher Education Guidance Cells" },
      { name: "Competitive Exams Coaching Centers" },
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
      { name: "Migrants Employment Generation Programme (MEGP)" },
      { name: "Prime Minister’s Employment Generation Programme (PMEGP)" },
      { name: "Amma Two-Wheeler Scheme" },
      { name: "E-Scooter Subsidy for Gig Workers" },
      { name: "Amma Unavagam" },
      { name: "Tamil Nadu Urban Employment Scheme" },
      { name: "Rural Employment Guarantee Scheme (MGNREGA)" },
      { name: "Job Fairs and Placement Drives" },
      { name: "Industrial Training Institutes (ITIs)" },
      { name: "Skill Training for Differently-Abled Persons" },
      { name: "Apprenticeship Training Scheme" },
      { name: "Vocational Education in Schools" },
      { name: "Women Empowerment Training Programs" },
      { name: "Entrepreneurship Development Programs" },
      { name: "Digital Literacy Campaigns" },
      { name: "Language and Communication Skills Training" },
      { name: "New Entrepreneur cum Enterprise Development Scheme (NEEDS)" },
      { name: "Tamil Nadu Industrial Investment Corporation (TIIC) Schemes" },
      { name: "Micro, Small and Medium Enterprises (MSME) Support" },
      { name: "Startup Tamil Nadu" },
      { name: "Khadi and Village Industries Promotion" },
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
      { name: "Kalaignar Magalir Urimai Thogai Scheme" },
      { name: "Chief Minister’s Girl Child Protection Scheme" },
      { name: "Marriage Assistance Schemes" },
      { name: "Dharmambal Ammaiyar Ninaivu Widow Remarriage Assistance Scheme" },
      { name: "Free Bus Pass for Women" },
      { name: "Working Women Hostels" },
      { name: "Government Service Homes" },
      { name: "Women Helpline 181" },
      { name: "Transgender Welfare Board Initiatives" },
      { name: "Free Housing Scheme for Transgender Persons" },
      { name: "Skill Development Programs for Transgender Persons" },
      { name: "Unemployed Youth Employment Generation Programme (UYEGP)" },
      { name: "New Entrepreneur cum Enterprise Development Scheme (NEEDS)" },
      { name: "Tamil Nadu Corporation for Development of Women (TNCDW) Initiatives" },
      { name: "Amma Maternity Nutrition Kit Scheme" },
      { name: "Integrated Livelihood Support Scheme" },
      { name: "Micro Credit Scheme for Women Entrepreneurs" },
      { name: "Self-Employment Scheme for Women" },
      { name: "Hostels for Working Women with Children" },
      { name: "Destitute Widow Pension Scheme" },
      { name: "Old Age Pension Scheme" },
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
      { name: "Kalaignar Kapitu Thittam" },
      { name: "New Health Insurance Scheme (NHIS) for Government Employees and Pensioners" },
      { name: "Amma Baby Care Kit Scheme" },
      { name: "Ensure Nutrition Scheme" },
      { name: "Chief Minister’s Breakfast Scheme" },
      { name: "Rehabilitation Centers for Mentally Challenged Individuals" },
      { name: "Emergency Medical Services (EMS)" },
      { name: "Trauma Accident and Emergency Initiative" },
      { name: "PET Scan Facilities in Government Hospitals" },
      { name: "MRI Scan Services in Government Hospitals" },
      { name: "Tamil Nadu Health System Reform Program (TNHSRP)" },
      { name: "Tamil Nadu Urban Healthcare Project (TNUHP)" },
      { name: "Tamil Nadu Health Systems Project (TNHSP)" },
      { name: "National Health Mission (NHM) – Tamil Nadu" },
      { name: "Integrated Disease Surveillance Programme (IDSP)" },
      { name: "National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases and Stroke (NPCDCS)" },
      { name: "Grief Counseling Services in Government Hospitals" },
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
