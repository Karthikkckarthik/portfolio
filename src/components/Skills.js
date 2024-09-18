import React from 'react';
import { Container, Typography, Chip, Box } from '@mui/material';

function Skills() {
  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript"],
    "Technologies": ["Machine Learning", "SQL", "Power BI", "Data Analytics", "HTML", "CSS"],
    "IDEs": ["Jupiter Notebook", "Google-Colab", "VS Code"],
    "Version Control Tools": ["Git", "GitHub"]
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
        Skills
      </Typography>
      {Object.entries(skills).map(([category, skillList]) => (
        <Box key={category} sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>{category}:</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skillList.map((skill, index) => (
              <Chip key={index} label={skill} color="primary" variant="outlined" />
            ))}
          </Box>
        </Box>
      ))}
    </Container>
  );
}

export default Skills;