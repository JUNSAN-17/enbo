import React, {useState} from 'react';
import moment from 'moment';
import {Card, Button, ConfigProvider, Input, Drawer, Space, DatePicker, Form, Modal} from 'antd';
import {ExclamationCircleFilled} from '@ant-design/icons';


import CardHeader from './Card_header/CardHeader';
import CardBody from './Card_body/CardBody';
import CardActions from './Card_actions/CardActions';

const {confirm} = Modal;


const Cards = (props) => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = (values) => {
        setOpen(false);
    };

    const [form] = Form.useForm();

    // 获取input中的内容
    let formData
    //定义新增确认按钮
    const addConfirm = (values) => {
        setOpen(false);
        formData = form.getFieldValue()
    };

    // 定义删除确认按钮
    const showDeleteConfirm = () => {
        confirm({
            title: '你确定要删除吗?',
            icon: <ExclamationCircleFilled/>,
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };


    return (
        <div>
            <ConfigProvider
                theme={{
                    components: {
                        Card: {
                            actionsBg: "#ededed",
                        }
                    }
                }}
            ></ConfigProvider>
            <Card
                title={
                    <CardHeader name={props.children}></CardHeader>
                }
                extra={
                    <div>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        fontWeight: 550
                                    }
                                }
                            }}
                        >
                            <Button href="#" type="link" style={{margin: "0px 0px 0px 10px"}}
                                    onClick={showDrawer}>编辑</Button>
                            <Button href="#" type="link" danger style={{margin: "-16px"}} onClick={showDeleteConfirm} >删除</Button>
                        </ConfigProvider>
                    </div>}
                style={{
                    margin: "17px 14px 0px 17px"
                }}
                actions={[
                    <CardActions test="检测" edit="开启" close="关闭"></CardActions>,
                    <CardActions test="AI判别" edit="开启" close="关闭"></CardActions>
                ]}
            >
                <CardBody number={props.number} time={props.time}></CardBody>


                <Drawer
                    title={props.children}
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
                    <Form layout="vertical" form={form} initialValues={{
                        name: props.children,
                        number: props.number,
                        dateTime: moment(props.time, 'YYYY-MM-DD HH:mm:ss')
                    }}>
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
                            <Input></Input>
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
                            <Input type="number"/>
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
            </Card>
        </div>
    );
};

export default Cards;