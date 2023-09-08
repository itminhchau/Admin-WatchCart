import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material'

Layout.propTypes = {

};

function Layout(props) {
    return (
        <div>
            layout
            xxxxx
            <Outlet />
        </div>
    );
}

export default Layout;