import React from 'react';
import Count from 'react-moment-countdown';

export default function Count () {
  const dateInFuture = new Date('2017-12-31');

  return (
    <Count toDate={dateInFuture} />
  );
};