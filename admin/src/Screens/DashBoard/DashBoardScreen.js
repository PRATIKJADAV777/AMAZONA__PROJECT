import React, { useState } from 'react';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import { IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import MultiTaskDisplay from '../../Component/MultiTaskDisplay/MutliTaskDisplay';
import CARd from '../Card';
import IntegrationNotistack from '../User/Snackbar';
import BasicTabs from '../Tabs';

export default function DashBoardScreen() {
  const location = useLocation();
  const [isCARdVisible, setIsCARdVisible] = useState(false); // Initial visibility state

  const toggleCARdVisibility = () => {
    setIsCARdVisible(!isCARdVisible);
  };

  return (
    <div>
      <IconButton onClick={toggleCARdVisibility}>
        <SplitscreenIcon />
      </IconButton>


      {isCARdVisible && <BasicTabs />}

    </div>
  );
}
