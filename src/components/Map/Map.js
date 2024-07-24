import {useState} from 'react';
import {Button, Input, Drawer, Space, DatePicker, Form} from 'antd';

const Map = () => {

    return (
        <div style={{display: 'flex', margin: '0px 17px', width: '100%'}}>
            <Button type="primary" > + 新增分组 </Button>
            <Input placeholder="关键字搜索" style={{width: '54%', marginLeft: "18px"}}></Input>
        </div>

    )
}

export default Map
