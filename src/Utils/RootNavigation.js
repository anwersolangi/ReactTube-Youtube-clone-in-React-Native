import * as React from 'react';

export const navigationRef = React.createRef();

export const isReadyRef = React.createRef();

export function getRouteName() {
  if (isReadyRef.current && navigationRef.current) {
    //Perform navigation if the app has mounted;
    return navigationRef.current;
  } else {
    console.log('App is not ready yet!!!');
  }
}
