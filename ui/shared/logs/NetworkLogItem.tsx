import { Grid, GridItem, useColorModeValue, Skeleton } from '@chakra-ui/react';
import React from 'react';

import type { NetworkLog } from 'types/api/log';


type Props = NetworkLog & {
  type: 'address' | 'transaction';
  isLoading?: boolean;
};

const RowHeader = ({ children, isLoading }: { children: React.ReactNode; isLoading?: boolean }) => (
  <GridItem _notFirst={{ my: { base: 4, lg: 0 } }}>
    <Skeleton fontWeight={ 500 } isLoaded={ !isLoading } display="inline-block">{ children }</Skeleton>
  </GridItem>
);

const NetworkLogItem = ({ destination, response_time, response, status_code, isLoading }: Props) => {

  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
  //const dataBgColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');

  return (
    <Grid
      gridTemplateColumns={{ base: 'minmax(0, 1fr)', lg: '200px minmax(0, 1fr)' }}
      gap={{ base: 2, lg: 8 }}
      py={ 8 }
      _notFirst={{
        borderTopWidth: '1px',
        borderTopColor: borderColor,
      }}
      _first={{
        pt: 0,
      }}
    >
      <RowHeader>Destination</RowHeader>
      <GridItem>
        { destination }
      </GridItem>
      <RowHeader>Status Code</RowHeader>
      <GridItem>
        { status_code }
      </GridItem>
      <RowHeader>Response Time</RowHeader>
      <GridItem>
        { response_time }
      </GridItem>
      <RowHeader>Response</RowHeader>
      <GridItem>
        { response }
      </GridItem>
    </Grid>
  );
};

export default React.memo(NetworkLogItem);
