import React from 'react';
import { Container, Typography, Box, Link, Paper, IconButton, Grid, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8, pt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Karthik K C"
              src="/images/profile.jpg"
              sx={{
                width: 200,
                height: 200,
                margin: 'auto',
                border: '4px solid',
                borderColor: 'primary.main',
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
              About Me
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
              I am looking to work in a stimulating & challenging environment that would facilitate the maximum utilization & application of my skills & expertise in making a positive difference in the organization.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton color="primary" aria-label="Email" sx={{ mr: 1 }}>
                  <EmailIcon />
                </IconButton>
                <Typography variant="body1">
                  <Link href="mailto:karthikkckarthik02@gmail.com">karthikkckarthik02@gmail.com</Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton color="primary" aria-label="Phone" sx={{ mr: 1 }}>
                  <PhoneIcon />
                </IconButton>
                <Typography variant="body1">
                  +91 7483396805
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  component={Link}
                  href="https://www.linkedin.com/in/karthik-k-c-695540209/"
                  target="_blank"
                  rel="noopener"
                  color="primary"
                  aria-label="LinkedIn"
                  sx={{ mr: 1 }}
                >
                  <LinkedInIcon />
                </IconButton>
                <Typography variant="body1">
                  <Link href="https://www.linkedin.com/in/karthik-k-c-695540209/" target="_blank" rel="noopener">
                    LinkedIn Profile
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  component={Link}
                  href="https://github.com/Karthikkckarthik"
                  target="_blank"
                  rel="noopener"
                  color="primary"
                  aria-label="GitHub"
                  sx={{ mr: 1 }}
                >
                  <GitHubIcon />
                </IconButton>
                <Typography variant="body1">
                  <Link href="https://github.com/Karthikkckarthik" target="_blank" rel="noopener">
                    GitHub Profile
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default About;