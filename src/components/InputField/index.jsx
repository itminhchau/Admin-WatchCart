import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

InputField.propTypes = {};

function InputField({ form, name, label }) {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <TextField
            {...field}
            error={invalid}
            id="outlined-basic"
            label={label}
            variant="outlined"
            sx={{ margin: '4px 8px', border: '2px' }}
            helperText={error?.message}
          />
        );
      }}
    />
  );
}

export default InputField;
