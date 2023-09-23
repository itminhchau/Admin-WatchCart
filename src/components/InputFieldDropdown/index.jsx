import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';

InputFieldDropdown.propTypes = {};

function InputFieldDropdown({ form, name, label, listCategorize }) {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <TextField
            {...field}
            id="outlined-select-currency"
            select
            label={label}
            defaultValue="1"
            sx={{ width: '210.4px', marginTop: '4px', marginLeft: '8px' }}
            error={invalid}
            helperText={error?.message}
          >
            {listCategorize?.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.nameCategorize}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    />
  );
}

export default InputFieldDropdown;
