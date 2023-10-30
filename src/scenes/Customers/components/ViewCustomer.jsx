import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import customersApi from 'api/customersApi';
import React from 'react';
import { useEffect, useState } from 'react';

let listProduct = [];
const ViewCustomer = () => {
  const [listCustomer, setListCustomer] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await customersApi.getAll();
      console.log('res :', res);
      setListCustomer(res.data.data);
    })();
  }, []);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: '16px 0' }}>
      <Typography variant="h2">View Customers</Typography>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>firstName</TableCell>
                <TableCell>lastName</TableCell>
                <TableCell>email</TableCell>
                <TableCell>shipAddress</TableCell>
                <TableCell>phoneNumber</TableCell>
                <TableCell>gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listCustomer &&
                listCustomer.length > 0 &&
                listCustomer.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.firstName}</TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.shipAddress}</TableCell>
                    <TableCell>{item.phoneNumber}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <div className="text-center flex  mt-[20px] ">
          <Pagination
            onChange={handleOnChangePage}
            sx={{ margin: 'auto' }}
            page={Number.parseInt(filter.page) || 1}
            count={totalPages || 10}
            color="primary"
          />
        </div> */}
      </Paper>
    </Box>
  );
};

export default ViewCustomer;
