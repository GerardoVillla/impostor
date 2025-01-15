import React, { useState } from 'react';
import { Box, CardContent, Typography, FormControlLabel, Checkbox } from '@mui/material';

interface Statement {
  id: number;
  text: string;
}

const TestInformationSection: React.FC = () => {
  const [checkedStatements, setCheckedStatements] = useState<number[]>([]);

  const statements: Statement[] = [
    { id: 1, text: 'I have many doubts about my abilities.' },
    { id: 2, text: 'Other people are much more capable and talented than me.' },
    { id: 3, text: 'I rarely talk about my achievements.' },
    { id: 4, text: 'I feel uncomfortable receiving compliments about my work.' },
    { id: 5, text: 'I downplay my achievements.' },
    { id: 6, text: "I haven't earned the good comments I receive." },
    { id: 7, text: 'I attribute my achievements to luck.' },
  ];

  const handleCheckboxChange = (id: number) => {
    setCheckedStatements(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: 'auto',
        boxShadow: 3,
        padding: 5,
        backgroundColor: '#ffbe0b',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <CardContent sx={{ padding: 2, color: 'white' }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Are You Really Experiencing Imposter Syndrome?
        </Typography>
        <Typography variant="h5" color="white" sx={{ width: '100%' }}>
          It is common for many people to assume they are experiencing impostor syndrome simply because they occasionally doubt themselves, but the reality is more complex. Feeling insecure or questioning our abilities from time to time is a natural part of personal and professional growth and does not necessarily mean we have this syndrome.
          Impostor syndrome is not just a fleeting lack of confidence; it is characterized by a persistent belief that our achievements are not legitimate, accompanied by a constant fear of being "found out" as a fraud. Below, I have compiled a small list of questions that people experiencing this syndrome often ask themselves. It is important to emphasize that these questions are not definitive, and it is always advisable to consult a psychologist for a more accurate assessment.
        </Typography>
        <Box sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,

        }}>
          {statements.map(statement => (
            <FormControlLabel
              key={statement.id}
              control={
                <Checkbox
                  checked={checkedStatements.includes(statement.id)}
                  onChange={() => handleCheckboxChange(statement.id)}
                  name={`statement-${statement.id}`}
                  color='white'
                  sx={{
                  }}

                />
              }
              label={<Typography variant="body1" sx={{ fontSize: '1.5rem' }}>
                {statement.text}
              </Typography>}

            />
          ))}
        </Box>
      </CardContent>
    </Box>
  );
}

export default TestInformationSection;