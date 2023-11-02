import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import InputField from 'components/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddColorProductForm.propTypes = {};

function AddColorProductForm({ onSubmit }) {
  const schema = yup
    .object({
      nameColor: yup.string().required('please enter values'),
      hexCode: yup.string().required('please enter values'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      hexCode: '',
      nameColor: '',
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
          <InputField name="nameColor" label="nameColor" form={form} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <InputField name="hexCode" label="hexCode" form={form} />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ m: '24px 10px', p: '8px ' }}>
        Add color
      </Button>
    </form>
  );
}

export default AddColorProductForm;
