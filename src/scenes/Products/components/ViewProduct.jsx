import { Box, Typography } from '@mui/material';

ViewProduct.propTypes = {};

function ViewProduct(props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h2">Add Product</Typography>
    </Box>
  );
}

export default ViewProduct;
