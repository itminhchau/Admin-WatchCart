import { Box, LinearProgress, Typography } from '@mui/material';
import AddImageProductForm from './AddImageProductForm';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { imageDb } from 'storage/firseBase/config';
import { v4 } from 'uuid';
import { useState } from 'react';
import { set } from 'react-hook-form';

CreateImageProduct.propTypes = {};

function CreateImageProduct(props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    console.log('check value', values);
    const arrayImage = values.arrayImageDetail;
    const tempArrImgFirebase = [];
    setIsLoading(true);

    for (let i = 0; i < arrayImage.length; i++) {
      const storageRef = ref(imageDb, `files/${v4()}`);
      const urlImagePromise = uploadString(storageRef, arrayImage[i], 'data_url')
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
      tempArrImgFirebase.push(urlImage);
    }
    if (tempArrImgFirebase) {
      setIsLoading(false);
    }
    console.log('check arrImgeFirsebase: ', tempArrImgFirebase);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Typography variant="h2">create Image Product</Typography>
        {isLoading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
        <AddImageProductForm onSubmit={handleSubmit} />
      </Box>
    </div>
  );
}

export default CreateImageProduct;
