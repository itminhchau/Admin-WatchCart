import { Box, Typography } from '@mui/material';
import CategorizeApi from 'api/categorizeApi';
import productsApi from 'api/productsApi';
import sizeApi from 'api/sizeApi';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { imageDb } from 'storage/firseBase/config';
import { v4 } from 'uuid';
import AddProductForm from './AddProductForm';

CreateProduct.propTypes = {};

function CreateProduct(props) {
  const [listCategorize, setListCategorize] = useState([]);
  const [listSize, setListSize] = useState([]);

  const handleSubmit = async (values) => {
    // const storage = getStorage();
    const storageRef = ref(imageDb, `files/${v4()}`);

    const urlImagePromise = uploadString(storageRef, values.image, 'data_url')
      .then((snapshot) => {
        console.log('Image uploaded successfully');
        // Get the download URL of the uploaded image
        return getDownloadURL(snapshot.ref);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        throw error;
      });
    const urlImage = await urlImagePromise;

    const newValue = {
      ...values,
      idCategorize: parseInt(values.idCategorize),
      image: urlImage,
    };
    const res = await productsApi.createProduct(newValue);
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

  const newListCategory = useMemo(() => {
    const data = listCategorize.map((item) => {
      return {
        id: item.id,
        value: item.id,
        name: item.nameCategorize,
      };
    });
    return data;
  }, [listCategorize]);

  useEffect(() => {
    (async () => {
      let res = await sizeApi.getAll();
      setListSize(res.data.data);
    })();
  }, []);

  const newListSize = useMemo(() => {
    const data = listSize.map((item) => {
      return {
        id: item.id,
        value: item.shoeSize,
        name: item.nameSize,
      };
    });
    return data;
  }, [listSize]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h2">Add Product</Typography>
      <AddProductForm onSubmit={handleSubmit} listCategorize={newListCategory} listSize={newListSize} />
    </Box>
  );
}

export default CreateProduct;
