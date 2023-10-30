import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputFieldDate = ({ name, label, form }) => {
  const handleChangeDate = (event) => {
    form.setValue('expDate', Date.parse(event) / 1000);
  };

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <>
            <DatePicker
              className="text-white h-[52px] bg-[#191F45] border rounded border-[#4E5370]  mt-1"
              placeholderText="Select date"
              onChange={(e) => {
                field.onChange(e);
                handleChangeDate(e);
              }}
              selected={field.value}
              minDate={new Date()}
            />
          </>
        );
      }}
    />
  );
};

export default InputFieldDate;
