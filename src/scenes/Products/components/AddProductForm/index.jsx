import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldDropdown from 'components/InputFieldDropdown';
import InputFieldImage from 'components/InputFieldImage';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function AddProductForm({ onSubmit, listCategorize, listSize }) {
  const [checkReset, setCheckReset] = useState(false);
  const schema = yup
    .object({
      nameProduct: yup.string().required('please enter values'),
      image: yup.string().required('please enter values'),
      description: yup.string().required('please enter values'),
      gender: yup.string().required('please enter values'),
      size: yup.string().required('please enter values'),
      count: yup.number().positive('please enter number positive').required('please enter values'),
      price: yup.number().positive('please enter number positive').required('please enter values'),
      idCategorize: yup.string().required('please enter values'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      nameProduct: '',
      price: '',
      image: '',
      gender: '',
      size: '',
      description: '',
      count: '',
      idCategorize: '',
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
        <Grid item xs={12}>
          <InputField name="nameProduct" label="nameProduct" form={form} />
          <InputField name="price" label="price" form={form} />
          <InputField name="count" label="count" form={form} />
          <InputFieldDropdown name="size" label="size" form={form} list={listSize} />
          <InputField name="gender" label="gender" form={form} />
          <InputField name="description" label="description" form={form} />

          <InputFieldDropdown name="idCategorize" label="Categorize" form={form} list={listCategorize} />
        </Grid>
        {/* <Grid item xs={2} sx={{ margin: '0px 10px' }}>
         
        </Grid> */}
        <Grid item sx={{ margin: '0px 10px' }}>
          <Grid container direction="row" justifyContent="flex-end" alignItems="center">
            <InputFieldImage name="imageProduct" label="imageProduct" form={form} checkReset={checkReset} />
          </Grid>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ m: '24px 10px', p: '8px ' }}>
        Add Product
      </Button>
    </form>
  );
}

export default AddProductForm;
