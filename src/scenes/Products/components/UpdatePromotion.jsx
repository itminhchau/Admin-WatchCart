import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Typography,
} from '@mui/material';
import promotionApi from 'api/promotionApi';

import { toast } from 'react-toastify';
import EditPromotionForm from './EditPromotionForm';

const UpdatePromotion = ({ openEdit, handleClose, itemPromotion, handleCheckEdit }) => {
  const handleSubmit = async (values) => {
    const newValue = {
      id: itemPromotion.id,
      valuePromotion: values.valuePromotion,
      description: values.description,
      expDate: values.expDate,
    };
    const res = await promotionApi.updatePromotion(newValue);
    if (res && res?.data?.errCode === 0) {
      toast.success('update promotopm success');
      handleClose();
      handleCheckEdit();
    }
  };

  return (
    <div>
      <Dialog open={openEdit} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h3">Update Promotion</Typography>
            <Grid>
              <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
                <CardContent>
                  <EditPromotionForm onSubmit={handleSubmit} itemPromotion={itemPromotion} />
                </CardContent>
              </Card>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdatePromotion;
