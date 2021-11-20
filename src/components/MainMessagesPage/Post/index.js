import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Directmessagespage from "../../Directmessagespage"
import GroupChats from "../../GroupChats"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MainMessagesPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} style={{marginTop:70}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} style={{width: "100%"}} aria-label="basic tabs example">
          <Tab label="Direct Messages (3)" {...a11yProps(0)} style={{width:"50%",border:"1px solid #3f51b5"}}/>
          <Tab label="Group Messages (2)" {...a11yProps(1)} style={{width:"50%",border:"1px solid #3f51b5"}}/>
        </Tabs>
      </Box>
      <TabPanel value={value}  index={0}>
        <Directmessagespage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GroupChats />
      </TabPanel>

    </Box>
  );
}