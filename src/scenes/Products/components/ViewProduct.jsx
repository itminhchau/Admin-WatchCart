import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  useTheme,
  useMediaQuery,
  Rating,
} from '@mui/material';

ViewProduct.propTypes = {};

function ViewProduct(props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: '16px 0' }}>
      <Typography variant="h2">View Product</Typography>
    </Box>
  );
}

export default ViewProduct;
