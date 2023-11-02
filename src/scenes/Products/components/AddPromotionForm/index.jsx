import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldDate from 'components/InputFieldDate';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
AddPromotionForm.propTypes = {};

function AddPromotionForm({ onSubmit }) {
  const schema = yup
    .object({
      description: yup.string().required('please enter values'),
      valuePromotion: yup.number().positive('please enter number positive').required('please enter values'),
      date: yup.string().required('please enter values'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      description: '',
      valuePromotion: '',
      date: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    onSubmit(values);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputField name="description" label="description" form={form} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputField name="valuePromotion" label="valuePromotion" form={form} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputFieldDate name="date" label="expDate" form={form} />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ m: '24px 10px', p: '8px ' }}>
        Add Promotion
      </Button>
    </form>
  );
}

export default AddPromotionForm;
