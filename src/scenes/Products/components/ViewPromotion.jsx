import {
  Box,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from '@mui/material';
import promotionApi from 'api/promotionApi';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UpdatePromotion from './UpdatePromotion';

const ViewPromotion = () => {
  const [listPromotion, setListPromotion] = useState([]);
  const [itemPromotion, setItemPromotion] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  const [checkEdit, setCheckEdit] = useState(false);

  const handleClose = () => {
    setOpenEdit(false);
  };
  const editModalShow = (promotion) => {
    setItemPromotion(promotion);
    setOpenEdit(true);
  };

  useEffect(() => {
    (async () => {
      let res = await promotionApi.getAll();
      setListPromotion(res.data.data);
    })();
  }, [checkEdit]);
  const handleCheckEdit = () => {
    setCheckEdit(!checkEdit);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: '16px 0' }}>
      <Typography variant="h2">View Promotion</Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>description</TableCell>
                <TableCell>valuePromotion</TableCell>
                <TableCell>expDate</TableCell>
                <TableCell>actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listPromotion &&
                listPromotion.length > 0 &&
                listPromotion.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.valuePromotion}</TableCell>
                    <TableCell>{new Date(item.expDate * 1000).toLocaleDateString('en-GB')}</TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => editModalShow(item)}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <UpdatePromotion
        itemPromotion={itemPromotion}
        openEdit={openEdit}
        handleClose={handleClose}
        handleCheckEdit={handleCheckEdit}
      />
      {/* <UpdateProduct
        deleteModalShow={deleteModalShow}
        handleClose={handleClose}
        itemProduct={itemProduct}
        openEdit={openEdit}
        handleCheckEdit={handleCheckEdit}
      /> */}
    </Box>
  );
};

export default ViewPromotion;
