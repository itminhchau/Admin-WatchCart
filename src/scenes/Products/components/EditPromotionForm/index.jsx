import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldDate from 'components/InputFieldDate';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

EditPromotionForm.propTypes = {};

function EditPromotionForm({ onSubmit, itemPromotion }) {
  const schema = yup
    .object({
      valuePromotion: yup.number().required('please enter values'),
      date: yup.date().required('please enter values'),
      description: yup.string().required('please enter values'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      valuePromotion: itemPromotion.valuePromotion || 0,
      date: itemPromotion.expDate ? new Date(itemPromotion.expDate * 1000) : new Date(),
      description: itemPromotion.description || '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    onSubmit(values);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="description" label="description" form={form} />
      <InputField name="valuePromotion" label="valuePromotion" form={form} />
      <div style={{ marginLeft: '10px' }}>
        <InputFieldDate name="date" label="date" form={form} />
      </div>
      <Button type="submit" variant="contained" sx={{ m: '24px 10px', p: '8px ' }}>
        Edit
      </Button>
    </form>
  );
}

export default EditPromotionForm;
