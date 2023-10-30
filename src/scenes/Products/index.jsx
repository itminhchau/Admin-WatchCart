import { Box } from '@mui/material';
import CreateColorProduct from './components/CreateColorProduct';
import CreateImageProduct from './components/CreateImageProduct';
import CreateProduct from './components/CreateProduct';
import ViewProduct from './components/ViewProduct';
import CreatePromotion from './components/CreatePromotion';
import ViewPromotion from './components/ViewPromotion';

Products.propTypes = {};

function Products(props) {
  return (
    <Box m="1.5rem 2.5rem">
      <CreateColorProduct />
      <CreatePromotion />
      <CreateProduct />
      <CreateImageProduct />
      <ViewPromotion />
      <ViewProduct />
    </Box>
  );
}

export default Products;
