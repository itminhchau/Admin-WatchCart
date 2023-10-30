import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from 'components/InputField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
const EditProductForm = ({ onSubmit }) => {
  const schema = yup
    .object({
      idBrand: yup.number().positive('please enter number positive').required('please enter values'),
      idPromotion: yup.number().positive('please enter number positive').required('please enter values'),
      nameProduct: yup.string().required('please enter values'),
      price: yup.number().positive('please enter number positive').required('please enter values'),
      quantitySold: yup.number().positive('please enter number positive').required('please enter values'),
      rate: yup.number().positive('please enter number positive').required('please enter values'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      idBrand: '',
      idPromotion: '',
      nameProduct: '',
      price: '',
      quantitySold: '',
      rate: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    onSubmit(values);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="idBrand" label="idBrand" form={form} />
      <InputField name="hexCode" label="hexCode" form={form} />
      <InputField name="hexCode" label="hexCode" form={form} />
      <InputField name="hexCode" label="hexCode" form={form} />
      <InputField name="hexCode" label="hexCode" form={form} />
      <InputField name="hexCode" label="hexCode" form={form} />
      <Button type="submit" variant="contained" sx={{ m: '24px 10px', p: '8px ' }}>
        Add color
      </Button>
    </form>
  );
};

export default EditProductForm;
