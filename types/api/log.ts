import type { AddressParam } from './addressParams';
import type { DecodedInput } from './decodedInput';

export interface Log {
  address: AddressParam;
  topics: Array<string | null>;
  data: string;
  index: number;
  decoded: DecodedInput | null;
  tx_hash: string | null;
}

export interface NetworkLog {
  status_code: number;
  response_time: number;
  destination: string;
  response: string;
}

export interface LogsResponseTx {
  items: Array<Log>;
  next_page_params: {
    index: number;
    items_count: number;
    transaction_hash: string;
  } | null;
}

export interface NetworkLogsResponseTx {
  items: Array<Log>;
  next_page_params: {
    index: number;
    items_count: number;
    transaction_hash: string;
  } | null;
}

export interface LogsResponseAddress {
  items: Array<Log>;
  next_page_params: {
    index: number;
    items_count: number;
    transaction_index: number;
    block_number: number;
  } | null;
}
