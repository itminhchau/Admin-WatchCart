import { Box, Typography } from '@mui/material';
import colorApi from 'api/colorApi';
import { reRenderContext } from 'context/reRenderContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import AddColorProductForm from './AddColorProductForm';

CreateColorProduct.propTypes = {};

function CreateColorProduct(props) {
  const context = useContext(reRenderContext);
  const { toggleRerender } = context;
  const handleSubmit = async (values) => {
    try {
      let res = await colorApi.createColor(values);
      if (res.data.errCode === 0) {
        toast.success('create color success');
        toggleRerender();
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
