import {
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import promotionApi from 'api/promotionApi';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const UpdatePromotion = ({ openEdit, handleClose, itemPromotion, handleCheckEdit }) => {
  const [inputEdit, setInputEdit] = useState();

  const handleSubmit = async () => {
    const res = await promotionApi.updatePromotion(inputEdit);
    if (res && res?.data?.errCode === 0) {
      toast.success('update promotopm success');
      handleClose();
      handleCheckEdit();
    }
  };

  const handleChangePromotion = (e) => {
    setInputEdit({
      ...inputEdit,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setInputEdit(itemPromotion);
  }, [itemPromotion]);
  return (
    <div>
      <Dialog open={openEdit} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h3">Update Promotion</Typography>
            <Grid>
              <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
                <CardContent>
                  <form>
                    <Grid container spacing={1}>
                      <Grid xs={12} item>
                        <TextField
                          name="description"
                          type="text"
                          label="description	"
                          variant="outlined"
                          fullWidth
                          value={inputEdit?.description}
                          onChange={handleChangePromotion}
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          type="number"
                          name="valuePromotion"
                          label="valuePromotion"
                          variant="outlined"
                          fullWidth
                          value={inputEdit?.valuePromotion}
                          onChange={handleChangePromotion}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="text"
                          label="expDate"
                          variant="outlined"
                          fullWidth
                          value={inputEdit?.expDate}
                          onChange={handleChangePromotion}
                          name="expDate"
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

export default UpdatePromotion;
