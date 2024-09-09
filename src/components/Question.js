import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box'; // Import Box for layout

function Question({ question, onNext }) {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [dropdownValue, setDropdownValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.name;
    setCheckedOptions((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  const handleNext = () => {
    // Implement logic to handle the different question types and store responses
    onNext();
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'text':
        return (
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Your answer..."
            value={inputValue}
            onChange={handleInputChange}
            style={{ marginBottom: '20px' }}
          />
        );
      case 'multiple-choice':
        return (
          <FormControl component="fieldset" style={{ marginBottom: '20px' }}>
            <FormLabel component="legend">{question.text}</FormLabel>
            <RadioGroup value={selectedOption} onChange={handleOptionChange}>
              {question.options.map((option) => (
                <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
        );
      case 'checkbox':
        return (
          <FormControl component="fieldset" style={{ marginBottom: '20px' }}>
            <FormLabel component="legend">{question.text}</FormLabel>
            {question.options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={checkedOptions.includes(option)}
                    onChange={handleCheckboxChange}
                    name={option}
                  />
                }
                label={option}
              />
            ))}
          </FormControl>
        );
      case 'dropdown':
        return (
          <Box style={{ width: '100%', marginBottom: '20px' }}> {/* Use Box for full width and spacing */}
            <FormControl fullWidth variant="outlined">
              <InputLabel>{question.text}</InputLabel>
              <Select
                value={dropdownValue}
                onChange={handleDropdownChange}
                label={question.text}
              >
                {question.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <div className="question-container">
      {question.type !== 'multiple-choice' && question.type !== 'checkbox' && question.type !== 'dropdown' && (
        <Typography variant="h6" component="p" gutterBottom>
          {question.text}
        </Typography>
      )}
      {renderQuestion()}
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default Question;
