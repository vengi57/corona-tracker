import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (
    <div style={{padding:'2.5%'}}>
      <Skeleton variant="text" width={210} height={140}/>
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
    </div>
  );
}