import React from 'react';
import {Marker} from 'react-map-gl';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';


import styles from '../../styles/MyMarker.module.css'


const MyMarker = props => {
  return (
    <Marker {...props}>
      <Tooltip title={props.data.location}>
        <IconButton className={styles.markerButton}>
          <Icon color="primary" className={styles.markerIcon}>place</Icon>
        </IconButton>
      </Tooltip>
    </Marker>
  );
}

export default MyMarker;