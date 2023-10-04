import { Box, LinearProgress, Typography } from '@mui/material';
import AddImageProductForm from './AddImageProductForm';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { imageDb } from 'storage/firseBase/config';
import { v4 } from 'uuid';
import { useState } from 'react';
import { set } from 'react-hook-form';
import { useEffect } from 'react';
import productsApi from 'api/productsApi';
import { useMemo } from 'react';
import colorApi from 'api/colorApi';
import { useContext } from 'react';
import { reRenderContext } from 'context/reRenderContext';
import { toast } from 'react-toastify';
import imageProductApi from 'api/imageProductApi';

CreateImageProduct.propTypes = {};

function CreateImageProduct(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [listProduct, setListProduct] = useState([]);
  const [listColor, setListColor] = useState([]);

  const context = useContext(reRenderContext);
  const { checkRender } = context;

  const handleSubmit = async (values) => {
    console.log('check value', values);
    // const arrayImage = values.arrayImageDetail;
    // const tempArrImgFirebase = [];
    // setIsLoading(true);

    // for (let i = 0; i < arrayImage.length; i++) {
    //   const storageRef = ref(imageDb, `files/${v4()}`);
    //   const urlImagePromise = uploadString(storageRef, arrayImage[i], 'data_url')
    //     .then((snapshot) => {
    //       console.log('Image uploaded successfully');
    //       // Get the download URL of the uploaded image
    //       return getDownloadURL(snapshot.ref);
    //     })
    //     .catch((error) => {
    //       console.error('Error uploading image:', error);
    //       throw error;
    //     });
    //   const urlImage = await urlImagePromise;
    //   tempArrImgFirebase.push(urlImage);
    // }
    // if (tempArrImgFirebase) {
    //   setIsLoading(false);
    // }
    // console.log('check arrImgeFirsebase: ', tempArrImgFirebase);

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

    if (urlImage && values) {
      const newValue = {
        ...values,
        url: urlImage,
      };
      delete newValue.image;
      delete newValue.imageProduct;
      console.log('check new value: ', newValue);
      try {
        console.log('after new value');
        let res = await imageProductApi.createImageProduct(newValue);
        if (res.data.errCode === 0) {
          toast.success('create color success');
        }
      } catch (error) {
        console.log(error);
        toast.error('create color fail');
      }
    }
  };

  useEffect(() => {
    (async () => {
      let res = await productsApi.getAll();
      setListProduct(res.data.data);
      console.log('res product', res);
    })();
  }, [checkRender]);

  const newListProduct = useMemo(() => {
    const data = listProduct?.map((item) => {
      const newdata = {
        id: item.id,
        value: item.id,
        name: item.nameProduct,
      };

      return newdata;
    });

    return data.reverse();
  }, [listProduct]);

  useEffect(() => {
    (async () => {
      let res = await colorApi.getAll();
      setListColor(res.data.data);
      console.log('res product', res);
    })();
  }, [checkRender]);

  const newListColor = useMemo(() => {
    const data = listColor?.map((item) => {
      const newdata = {
        id: item.id,
        value: item.id,
        name: item.nameColor,
      };

      return newdata;
    });

    return data.reverse();
  }, [listColor]);

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="h2">create Image Product</Typography>
        {isLoading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
        <AddImageProductForm onSubmit={handleSubmit} newListProduct={newListProduct} newListColor={newListColor} />
      </Box>
    </div>
  );
}

export default CreateImageProduct;
