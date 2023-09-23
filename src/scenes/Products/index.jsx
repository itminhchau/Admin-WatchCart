import React from 'react';
import PropTypes from 'prop-types';
import CreateProduct from './components/CreateProduct';
import ViewProduct from './components/ViewProduct';
import { Box } from '@mui/material';

Products.propTypes = {};

function Products(props) {
  return (
    <Box m="1.5rem 2.5rem">
      <CreateProduct />
      <ViewProduct />
    </Box>
  );
}

export default Products;
