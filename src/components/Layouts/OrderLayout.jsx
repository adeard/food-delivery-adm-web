import React from 'react'
import { Space, Table, Button } from 'antd';

const OrderLayout = (props) => {
    const {columns, dataset} = props
    return (
        <>
            <Space wrap style={{float:'left', marginBottom:'16px'}}>
                <h2>Order List</h2>
            </Space>
            <Space wrap style={{float:'right', marginBottom:'16px'}}>
                <Button type="default">Add Order</Button>            
            </Space>
            <Table columns={columns} dataSource={dataset} size='small' />
        </>
    )
}

export default OrderLayout