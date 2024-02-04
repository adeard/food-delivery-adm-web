import React,{ useState } from 'react'
import { useParams } from "react-router"
import ContentLayout from '../components/Layouts/ContentLayout'
import OrderLayout from '../components/Layouts/OrderLayout'


const OrderPage = () => {
    const [tasks, setTasks] = useState([])
    const [tasklogs, setTaskLogs] = useState([])

    const columns = [
        { title: 'No', align:'center', dataIndex: 'no', key: 'no', width: 40},
        { title: 'Username', align:'center', dataIndex: 'username', key: 'username'},
        { title: 'Merchant', align:'center', dataIndex: 'merchant', key: 'merchant'},
        { title: 'Status', align:'center', dataIndex: 'status', key: 'status'},
        { title: 'Order Date', align:'center', dataIndex: 'order_date', key: 'order_date'},
        { title: 'Total', align:'center', dataIndex: 'total', key: 'total'},
        { title: 'Quantity', align:'center', dataIndex: 'quantity', key: 'quantity'},
        { title: 'Action', align:'center', dataIndex: 'action', key: 'action'},
    ];

    const dataset = tasks.map((obj, index) =>  {
        let bldat = obj.bldat.split("T")
        let datas = {
            "no" : index + 1,
            "key" : index + 1,
            "username" : obj.username, 
            "merchant" : obj.merchant, 
            "status" : obj.status,
            "order_date" : obj.order_date,
            "total" : obj.total,
            "quantity" : obj.quantity
        }

        return datas
    });

    return (
        <ContentLayout current_page="order">
            <OrderLayout columns={columns} dataset={dataset}></OrderLayout>
        </ContentLayout>
    )
}

export default OrderPage