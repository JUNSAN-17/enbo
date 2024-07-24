import {useState} from 'react';
import {Button, Input, Drawer, Space, DatePicker, Form} from 'antd';

const Btn = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = (values) => {
        setOpen(false);
    };

    const [form] = Form.useForm();
    const addConfirm = (values) => {
        setOpen(false);
        console.log(form.getFieldValue());
    };



    return (
        <div style={{display: 'flex', margin: '0px 17px', width: '100%'}}>
            <Button type="primary" onClick={showDrawer}> + 新增分组 </Button>
            <Input placeholder="关键字搜索" style={{width: '54%', marginLeft: "18px"}}></Input>

            <Drawer
                title="新增分组"
                placement="right"
                width={500}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>取消</Button>
                        <Button type="primary" onClick={addConfirm}>确认</Button>
                    </Space>
                }
            >
                <Form layout="vertical" form={form} >

                    <Form.Item
                        name="name"
                        label="片区名"
                        rules={[
                            {
                                required: true,
                                message: '请输入片区名',
                            },
                        ]}
                    >
                        <Input placeholder="请输入片区名"/>
                    </Form.Item>

                    <Form.Item
                        name="number"
                        label="设备数量"
                        rules={[
                            {
                                required: true,
                                message: '请输入设备数量',
                            },
                        ]}
                    >
                        <Input placeholder="请输入设备数量" type="number" />
                    </Form.Item>

                    <Form.Item
                        name="dateTime"
                        label="日期"
                        rules={[
                            {
                                required: true,
                                message: '请选择日期',
                            },
                        ]}
                    >
                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请选择时间"/>
                    </Form.Item>

                </Form>
            </Drawer>
        </div>

    )
}

export default Btn
