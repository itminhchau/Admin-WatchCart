import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldDropdown from 'components/InputFieldDropdown';
import InputFieldImage from 'components/InputFieldImage';
import InputFieldMarkDown from 'components/InputFieldMarkDown';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function AddProductForm({ onSubmit, listBrand }) {
  const [checkReset, setCheckReset] = useState(false);
  const schema = yup
    .object({
      nameProduct: yup.string().required('please enter values'),
      shortDescription: yup.string().required('please enter values'),
      description: yup.string().required('please enter values'),
      quantitySold: yup.number().positive('please enter number positive').required('please enter values'),
      totalStock: yup.number().positive('please enter number positive').required('please enter values'),
      rate: yup.number().positive('please enter number positive').required('please enter values'),
      price: yup.number().positive('please enter number positive').required('please enter values'),
      idBrand: yup.number().positive('please enter number positive').required('please enter values'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      nameProduct: '',
      shortDescription: '',
      quantitySold: '',
      totalStock: '',
      price: '',
      markDownContent: '',
      idBrand: '',
      rate: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    // setCheckReset(!checkReset);
    onSubmit(values);
    form.reset();
  };

  console.log(form.formState.errors);
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputField name="nameProduct" label="nameProduct" form={form} />
          <InputField name="price" label="price" form={form} />
          <InputField name="rate" label="rate" form={form} />
          <InputField name="quantitySold" label="quantitySold" form={form} />
          <InputField name="totalStock" label="totalStock" form={form} />
          <InputField name="shortDescription" label="shortDescription" form={form} />
          <InputFieldDropdown name="idBrand" label="Brand" form={form} list={listBrand} />
        </Grid>
      </Grid>
      <InputFieldMarkDown name="markDownContent" label="markDownContent" form={form} />
      <Button type="submit" variant="contained" sx={{ m: '24px 10px', p: '8px ' }}>
        Add Product
      </Button>
    </form>
  );
}

export default AddProductForm;
