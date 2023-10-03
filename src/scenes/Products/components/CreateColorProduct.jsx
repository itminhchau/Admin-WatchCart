import React from 'react';
import PropTypes from 'prop-types';
import AddColorProductForm from './AddColorProductForm';
import { Box, Typography } from '@mui/material';
import colorApi from 'api/colorApi';
import { toast } from 'react-toastify';

CreateColorProduct.propTypes = {};

function CreateColorProduct(props) {
  const handleSubmit = async (values) => {
    try {
      let res = await colorApi.createColor(values);
      console.log('🚀 ~ file: CreateColorProduct.jsx:13 ~ handleSubmit ~ res:', res);
      if (res.data.errCode === 0) {
        toast.success('create color success');
      }
    } catch (error) {
      console.log(error);
      toast.error('create color fail');
    }
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h2">create color Product</Typography>
      {/* {isLoading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )} */}
      <AddColorProductForm onSubmit={handleSubmit} />
    </Box>
  );
}

export default CreateColorProduct;
