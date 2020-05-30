import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import './CustomTabs.scss'

const TabPanel = props => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
}));

const CustomTabs = ({tabTitleArray, tabContentArray, handleChangeTab, index, keys}) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    handleChangeTab(newValue);
  };

  return (
    <div className={`${classes.root} custom-tab`}>
      <AppBar position="static" color="default" className="custom-tab__buttons-wrapper">
        <Tabs
          fullWidth={false}
          value={index}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="full width tabs example"
        >
          {
            keys.map((item, index) => (
              <Tab key={item} label={item} {...a11yProps(index)} />
            ))
          }
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={index}
        onChangeIndex={handleChangeTab}
      >
        {
          tabContentArray.map((item, index) => (
            <TabPanel key={index} value={index} index={index} dir={theme.direction}>
              {item}
            </TabPanel>
          ))
        }
      </SwipeableViews>
    </div>
  )
}

export default CustomTabs
