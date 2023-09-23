import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import AddProductForm from './AddProductForm';
import CategorizeApi from 'api/categorizeApi';

CreateProduct.propTypes = {};

function CreateProduct(props) {
  const [listCategorize, setListCategorize] = useState([]);
  const handleSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    (async () => {
      let res = await CategorizeApi.getAll();
      setListCategorize(res.data.data);
    })();
  }, []);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h2">Add Product</Typography>
      <AddProductForm onSubmit={handleSubmit} listCategorize={listCategorize} />
    </Box>
  );
}

export default CreateProduct;
