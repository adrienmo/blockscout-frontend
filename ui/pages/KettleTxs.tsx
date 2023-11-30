import { useRouter } from 'next/router';
import React from 'react';

import getQueryParamString from 'lib/router/getQueryParamString';
import { TX } from 'stubs/tx';
import { generateListStub } from 'stubs/utils';
import AddressEntity from 'ui/shared/entities/address/AddressEntity';
import PageTitle from 'ui/shared/Page/PageTitle';
import useQueryWithPages from 'ui/shared/pagination/useQueryWithPages';
import TxsContent from 'ui/txs/TxsContent';

const KettleTxs = () => {
  const router = useRouter();

  const hash = router.query.hash && getQueryParamString(router.query.hash);

  const query = useQueryWithPages({
    resourceName: 'txs_kettle_transactions',
    pathParams: { hash },
    options: {
      placeholderData: generateListStub<'txs_kettle_transactions'>(TX, 50, { next_page_params: {
        block_number: 0,
        index: 5,
        items_count: 50,
        filter: 'validated',
      } }),
    },
  });

  return (
    <>
      <PageTitle title="Kettle transactions" withTextAd/>
      { hash == null ? null : <AddressEntity address={{ hash }} mb={ 6 }/> }
      <TxsContent
        query={ query }
        showSocketInfo={ false }
      />
    </>
  );
};

export default KettleTxs;
