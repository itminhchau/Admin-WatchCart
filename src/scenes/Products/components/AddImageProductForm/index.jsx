import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldDropdown from 'components/InputFieldDropdown';
import InputFieldImage from 'components/InputFieldImage';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddImageProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function AddImageProductForm({ onSubmit, newListProduct, newListColor }) {
  const [checkReset, setCheckReset] = useState(false);
  const schema = yup
    .object({
      image: yup.string().required('please enter values'),
      imageProduct: yup.string().required('please enter values'),
      idColor: yup.number().positive('please enter number positive').required('please enter values'),
      idProduct: yup.number().positive('please enter number positive').required('please enter values'),
      stock: yup.number().positive('please enter number positive').required('please enter values'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      image: '',
      imageProduct: '',
      idColor: '',
      idProduct: '',
      stock: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    setCheckReset(!checkReset);
    onSubmit(values);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputFieldDropdown name="idProduct" label="idProduct" form={form} list={newListProduct} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputFieldDropdown name="idColor" label="idColor" form={form} list={newListColor} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputField name="stock" label="stock" form={form} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputFieldImage name="imageProduct" label="imageProduct" form={form} checkReset={checkReset} />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ m: '24px 10px', p: '8px ' }}>
        Add image
      </Button>
    </form>
  );
}

export default AddImageProductForm;
