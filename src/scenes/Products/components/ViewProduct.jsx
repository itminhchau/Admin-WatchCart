import {
  Box,
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import productsApi from 'api/productsApi';
import { useEffect, useState } from 'react';
import UpdateProduct from './UpdateProduct';
ViewProduct.propTypes = {};

function ViewProduct(props) {
  const [listProduct, setListProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [dataDelete, setDataDelete] = useState();
  const [itemProduct, setItemProduct] = useState();
  const [total, setTotal] = useState();
  const [checkEdit, setCheckEdit] = useState(false);
  const [checkDelete, setCheckDelete] = useState(false);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 12,
  });
  const totalPages = Math.ceil(total / filter.limit);
  const handleClose = () => {
    setOpen(false);
    setOpenEdit(false);
  };

  useEffect(() => {
    (async () => {
      const res = await productsApi.getAll(filter);
      setListProduct(res.data.data);
      setTotal(res.data.pagination?.total);
    })();
  }, [filter, checkEdit, checkDelete]);

  const deleteModalShow = (product) => {
    setOpen(true);
    setDataDelete(product);
  };
  const editModalShow = (product) => {
    setItemProduct(product);
    setOpenEdit(true);
  };
  const handleDeleteProduct = async () => {
    try {
      const res = await productsApi.deleteProduct(dataDelete.id);
      if (res && res.data.errCode === 0) {
        setCheckDelete(!checkDelete);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnChangePage = (e, newPage) => {
    setFilter({
      ...filter,
      page: newPage,
    });
  };

  const handleCheckEdit = () => {
    setCheckEdit(!checkEdit);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: '16px 0' }}>
      <Typography variant="h2">View Product</Typography>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Bạn có chắc muốn xóa sản phẩm này không ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Không
            </Button>
            <Button onClick={handleDeleteProduct} variant="contained" autoFocus>
              Xóa
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Paper sx={{ width: '100%' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>idBrand</TableCell>
                <TableCell>nameProduct</TableCell>
                <TableCell>price</TableCell>
                <TableCell>quantitySold</TableCell>
                <TableCell>rate</TableCell>
                <TableCell>actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listProduct &&
                listProduct.length > 0 &&
                listProduct.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.idBrand}</TableCell>
                    <TableCell>{item.nameProduct}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.quantitySold === null ? 0 : item.quantitySold}</TableCell>
                    <TableCell>{item.rate}</TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => editModalShow(item)}>
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => deleteModalShow(item)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="text-center flex  mt-[20px] ">
          <Pagination
            onChange={handleOnChangePage}
            sx={{ margin: 'auto' }}
            page={Number.parseInt(filter.page) || 1}
            count={totalPages || 10}
            color="primary"
          />
        </div>
      </Paper>
      <UpdateProduct
        deleteModalShow={deleteModalShow}
        handleClose={handleClose}
        itemProduct={itemProduct}
        openEdit={openEdit}
        handleCheckEdit={handleCheckEdit}
      />
    </Box>
  );
}

export default ViewProduct;
