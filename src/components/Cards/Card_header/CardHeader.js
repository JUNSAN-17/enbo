import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../../mock/mockData"

import { ReloadOutlined, } from '@ant-design/icons';
import { Button, ConfigProvider } from 'antd';


const CardHeader = (props) => {
    const [users, setUsers] = useState([]);
    const handleRefreshData = () => {
        useEffect(() => {
            axios.get('/api/users')
                .then(response => {
                    setUsers(response.data.list);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, []);
    }

    return (
        <div >
            {props.name}
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultBg: "black",
                            defaultColor: "#fff",
                        }
                    }
                }}
            >
                <Button size="small" shape="circle" icon={<ReloadOutlined />} style={{ marginLeft: 15 }}>
                </Button>
            </ConfigProvider>
        </div>
    )
}

export default CardHeader