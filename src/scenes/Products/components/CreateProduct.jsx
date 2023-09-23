import { Box, Typography } from '@mui/material';
import CategorizeApi from 'api/categorizeApi';
import productsApi from 'api/productsApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddProductForm from './AddProductForm';

CreateProduct.propTypes = {};

function CreateProduct(props) {
  const [listCategorize, setListCategorize] = useState([]);
  console.log('listCategorize:', listCategorize);
  const handleSubmit = async (values) => {
    console.log('check value form', values);
    const newValue = {
      ...values,
      idCategorize: parseInt(values.idCategorize),
    };
    const res = await productsApi.createProduct(newValue);
    console.log('check create', res);
    if (res && res.data.errCode === 0) {
      toast.success('create product success');
    } else {
      toast.error('create product false');
    }
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
