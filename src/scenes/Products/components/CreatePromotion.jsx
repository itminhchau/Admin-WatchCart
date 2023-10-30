import { Box, Typography } from '@mui/material';
import React from 'react';
import AddPromotionForm from './AddPromotionForm';
import promotionApi from 'api/promotionApi';
import { toast } from 'react-toastify';

const CreatePromotion = () => {
  const handleSubmit = async (values) => {
    try {
      let res = await promotionApi.createPromotion(values);
      if (res.data.errCode === 0) {
        toast.success('create promotion success');
        //   toggleRerender();
      }
    } catch (error) {
      console.log(error);
      toast.error('create promotion fail');
    }
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h2">create Promotion </Typography>

      <AddPromotionForm onSubmit={handleSubmit} />
    </Box>
  );
};

export default CreatePromotion;
