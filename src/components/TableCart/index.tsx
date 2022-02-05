/* eslint-disable */
import React, { useContext, useState, useEffect, useRef, useDebugValue } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};


const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const [dataCart, setDataCart] = useState([]);
  const inputRef = useRef<Input>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component<EditableTableProps & Props, EditableTableState> {
  columns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[];

  constructor(props: EditableTableProps & any) {
    super(props);

    this.columns = [
      {
        title: 'Product',
        dataIndex: 'product',
        width: 450,
        render: (_, record: any) => 
        <div className='productName'>
          <div>
            <img src="//:0" alt="" title="Gold" />
          </div>
          <div>
          <div className='head'>
            {record.product}
          </div>
            <div>
            {record.detail}
          </div>
          </div>
        </div>
      },
      {
        title: 'Price',
        dataIndex: 'price',
        align: 'center' as const,
        width: 50,
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        align: 'center' as const,
        width: 50,
        editable: true,
      },
      {
        title: 'Subtotal',
        dataIndex: 'subtotal',
        align: 'center' as const,
        width: 50,
        render: (_, record:any) => <div>{record.price * record.quantity}</div>
      },
      {
        title: '',
        dataIndex: 'operation',
        align: 'center' as const,
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record)}>
              <a><DeleteOutlined className="DeleteOut" /></a>
            </Popconfirm>
          ) : null,
      },
    ];

    this.state = {
      dataSource: [
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
      ],
      count: 2,
      tableCart: [],
    };
  }

  handleDelete = (value: any) => {
    const dataSource = [...this.state.dataSource];
    const findSelectCart = this.state.tableCart.find(element => element.key === value.key)
    if(findSelectCart){
      this.setState({tableCart: this.state.tableCart.filter(item => item.key !== value.key)})
    }
    const setDataSource = { dataSource: dataSource.filter(item => item.key !== value.key) }
    this.setState(setDataSource);
  };

  handleSave = (row: DataType) => {
    const newData = [...this.state.dataSource];
    const findSelectCartSave = this.state.tableCart.find(element => element.key === row.key)
    if(findSelectCartSave){
      this.setState({tableCart: this.state.tableCart.map(item => {
        if(item.key === row.key){
          return row;
        }else{
          return item;
        }
      })})
    }
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };
 
  render() {
    const { dataSource } = this.state;

    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: DataType) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    console.log(this.state.tableCart);
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          rowSelection={{
            onChange: (selectedRowKeys, selectedRows) => {
                let setSelectData = dataSource.filter(value => selectedRows.includes(value));
                this.setState({tableCart: setSelectData});
             },
          }}
          dataSource={dataSource}
          columns={columns as ColumnTypes}
        />
      </div>
    );
  }
}

export default EditableTable;

interface Props extends React.Props<any> {
  cartSave: any;
  store: string;
}

interface Item {
    key: string;
    product: string;
    price: string;
    quantity: string;
    subtotal: number;
    store: string;
    detail?: string;
  }
  
  interface EditableRowProps {
    index: number;
  }
  
  interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item) => void;
  }
  
  type EditableTableProps = Parameters<typeof Table>[0];
  
  interface DataType {
    key: React.Key;
    product: string;
    price: string;
    quantity: string;
    subtotal: number;
    store: string;
    detail?: string;
  }
  
  interface EditableTableState {
    dataSource: DataType[];
    count: number;
    tableCart: Array<any>;
  }
  
  type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;