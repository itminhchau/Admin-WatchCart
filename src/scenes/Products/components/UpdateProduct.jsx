import { Card, CardContent, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import productsApi from 'api/productsApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const UpdateProduct = ({ itemProduct, openEdit, handleClose, handleCheckEdit }) => {
  const [inputEdit, setInputEdit] = useState();

  const handleSubmit = async () => {
    const res = await productsApi.updateProduct(inputEdit);
    console.log(res, 'res product');
    if (res && res?.data?.errCode === 0) {
      toast.success('update product success');
      handleClose();
      handleCheckEdit();
    }
  };
  const handleChangeProduct = (e) => {
    setInputEdit({
      ...inputEdit,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setInputEdit(itemProduct);
  }, [itemProduct]);

  return (
    <div>
      <Dialog open={openEdit} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h3">Update Product</Typography>
            <Grid>
              <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
                <CardContent>
                  <form>
                    <Grid container spacing={1}>
                      <Grid xs={12} item>
                        <TextField
                          disabled
                          type="number"
                          label="idBrand"
                          variant="outlined"
                          fullWidth
                          value={inputEdit?.idBrand}
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          name="idPromotion"
                          // type="number"
                          label="idPromotion	"
                          variant="outlined"
                          fullWidth
                          value={inputEdit?.idPromotion}
                          onChange={handleChangeProduct}
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          name="nameProduct"
                          label="nameProduct"
                          variant="outlined"
                          fullWidth
                          value={inputEdit?.nameProduct}
                          onChange={handleChangeProduct}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="number"
                          label="price"
                          name="price"
                          variant="outlined"
                          fullWidth
                          value={inputEdit?.price}
                          onChange={handleChangeProduct}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="number"
                          label="quantitySold"
                          variant="outlined"
                          fullWidth
                          value={inputEdit?.quantitySold || 0}
                          onChange={handleChangeProduct}
                          name="quantitySold"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="number"
                          label="rate"
                          rows={4}
                          variant="outlined"
                          fullWidth
                          value={inputEdit?.rate}
                          onChange={handleChangeProduct}
                          name="rate"
                        />
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateProduct;
