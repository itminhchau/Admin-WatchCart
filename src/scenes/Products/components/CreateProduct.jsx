import { Box, Typography } from '@mui/material';
import brandApi from 'api/brandApi';
import productsApi from 'api/productsApi';

import promotionApi from 'api/promotionApi';
import { reRenderContext } from 'context/reRenderContext';
import { useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import AddProductForm from './AddProductForm';

CreateProduct.propTypes = {};

function CreateProduct(props) {
  const [listBrand, setListBrand] = useState([]);
  const [listPromotion, setListPromotion] = useState([]);
  const context = useContext(reRenderContext);
  const { toggleRerender } = context;

  const handleSubmit = async (values) => {
    // const storage = getStorage();
    // const storageRef = ref(imageDb, `files/${v4()}`);

    // const urlImagePromise = uploadString(storageRef, values.image, 'data_url')
    //   .then((snapshot) => {
    //     console.log('Image uploaded successfully');
    //     // Get the download URL of the uploaded image
    //     return getDownloadURL(snapshot.ref);
    //   })
    //   .catch((error) => {
    //     console.error('Error uploading image:', error);
    //     throw error;
    //   });
    // const urlImage = await urlImagePromise;

    const res = await productsApi.createProduct(values);
    if (res && res.data.errCode === 0) {
      toast.success('create product success');
      toggleRerender();
    } else {
      toast.error('create product false');
    }
  };
  useEffect(() => {
    (async () => {
      let res = await promotionApi.getAll();
      setListPromotion(res.data.data);
    })();
  }, []);
  const newListPromotion = useMemo(() => {
    const data = listPromotion.map((item) => {
      return {
        id: item.id,
        value: item.id,
        name: item.description,
        // expDate: item.expDate,
      };
    });
    return data;
  }, [listPromotion]);
  useEffect(() => {
    (async () => {
      let res = await brandApi.getAll();
      setListBrand(res.data.data);
    })();
  }, []);

  const newListBrand = useMemo(() => {
    const data = listBrand.map((item) => {
      return {
        id: item.id,
        value: item.id,
        name: item.nameBrand,
      };
    });
    return data;
  }, [listBrand]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h2">Add Product</Typography>
      <AddProductForm onSubmit={handleSubmit} listBrand={newListBrand} listPromotion={newListPromotion} />
    </Box>
  );
}

export default CreateProduct;
