import { Box } from '@mui/material';
import CreateColorProduct from './components/CreateColorProduct';
import CreateImageProduct from './components/CreateImageProduct';
import CreateProduct from './components/CreateProduct';
import ViewProduct from './components/ViewProduct';

Products.propTypes = {};

function Products(props) {
  return (
    <Box m="1.5rem 2.5rem">
      <CreateColorProduct />
      <CreateProduct />
      <CreateImageProduct />
      <ViewProduct />
    </Box>
  );
}

export default Products;
