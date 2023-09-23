import { Box } from '@mui/material';
import CreateProduct from './components/CreateProduct';
import ViewProduct from './components/ViewProduct';

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
