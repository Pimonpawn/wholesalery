/* eslint-disable  */
import { Table, Space } from 'antd';

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    width: 250,
    render: (_: any, record: any) => 
    <div className='productName'>
      <div>
        <img src="//:0" alt="" title="Gold" />
      </div>
      <div>
      <div className='head'>
        {record.product}
      </div>
        <div className='body'>
        {record.detail}
      </div>
      </div>
    </div>
  },
  {
    title: 'Qty',
    dataIndex: 'quantity',
    align: 'center' as const,
    width: 20,
    editable: true,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    align: 'center' as const,
    width: 20,
  },
  {
    title: 'Subtotal',
    dataIndex: 'subtotal',
    align: 'center' as const,
    width: 20,
    render: (_: any, record:any) => <div>{record.price * record.quantity}</div>
  },
];

const data = [
  {
    key: '0',
    product: 'Edward King 0',
    price: '32',
    quantity: '1',
    subtotal: 12,
    store: 'Abo',
    detail: 'it good'
  },
  {
    key: '1',
    product: 'Edward King 1',
    price: '32',
    quantity: '2',
    subtotal: 10,
    store: 'Tab',
  },
  {
    key: '2',
    product: 'Edward King 2',
    price: '32',
    quantity: '2',
    subtotal: 10,
    store: 'Tab',
  },
  {
    key: '3',
    product: 'Edward King 3',
    price: '32',
    quantity: '2',
    subtotal: 10,
    store: 'Tab',
  },
];

const TableConfirm = ():JSX.Element => (
  <Table columns={columns} dataSource={data} />
);

export default TableConfirm;
