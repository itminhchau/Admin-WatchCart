import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldDropdown from 'components/InputFieldDropdown';
import InputFieldImage from 'components/InputFieldImage';
import InputFieldMarkDown from 'components/InputFieldMarkDown';
import InputFieldMultipleImage from 'components/InputFieldMultipleImage';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddImageProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function AddImageProductForm({ onSubmit, listCategorize, listSize }) {
  const [checkReset, setCheckReset] = useState(false);
  const schema = yup
    .object({
      // arrayImageDetail: yup.array(),
      image: yup.string().required('please enter values'),
      imageProduct: yup.string().required('please enter values'),
      typeImage: yup.string().required('please enter values'),
      idProduct: yup.number().positive('please enter number positive').required('please enter values'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      // arrayImageDetail: '',
      image: '',
      imageProduct: '',
      typeImage: '',
      idProduct: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    setCheckReset(!checkReset);
    onSubmit(values);
    form.reset();
  };

  console.log(form.formState.errors);
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputFieldMultipleImage name="detailImage" label="DetailImageProduct" form={form} checkReset={checkReset} />
        </Grid> */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputField name="idProduct" label="idProduct" form={form} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputField name="typeImage" label="typeImage" form={form} />
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
