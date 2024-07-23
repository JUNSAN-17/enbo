import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined, ReloadOutlined} from '@ant-design/icons';
import {Card, Button, ConfigProvider} from 'antd';

const {Meta} = Card;

const Cards = () => {
    return (
        <div>
            <Card
                title={
                    <div style={{display: "flex", alignItems: "center"}}>
                        丰都北部片区
                        <div style={{
                            cursor: "pointer",
                            height: "27px",
                            width: "27px",
                            backgroundColor: "black",
                            marginLeft: "20px",
                            borderRadius: "50%",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            color: "white"
                        }}>
                            <ReloadOutlined/>
                        </div>
                    </div>
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
                            <Button href="#" type="link" style={{margin: "0px 10px 0px 10px"}}>编辑</Button>
                            <Button href="#" type="link" danger style={{margin: "-25px"}}>删除</Button>
                        </ConfigProvider>
                    </div>}

                style={{
                    margin: "17px"
                }}

                actions={[
                    <div>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        fontWeight: 600,
                                        paddingBlock: '3',
                                        defaultColor: "#1890ff",
                                        defaultBorderColor:"rgba(255, 255, 255, 0)",
                                    }
                                }
                            }}
                        >
                            <Button>检测</Button>
                        </ConfigProvider>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        fontWeight: 600,
                                        defaultColor: "#fff",
                                        defaultBg: '#079f14',
                                        paddingBlock: '3'
                                    }
                                }
                            }}
                        >
                            <Button>开启</Button>
                        </ConfigProvider>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        fontWeight: 600,
                                        defaultColor: "#fff",
                                        defaultBg: '#d40909',
                                        paddingBlock: '3'
                                    }
                                }
                            }}
                        >
                            <Button>关闭</Button>
                        </ConfigProvider>
                    </div>,
                    <div>
                        <Button>hh</Button>
                        <Button>hh</Button>
                        <Button>hh</Button>
                    </div>,


                ]}
            >
                <p>设备数量：36</p>
                <p>检测开启状态：36/36</p>
                <p>AI判别开启状态：28/36</p>
                <p>AI判别方案：即时格点天气算法、实景天气识别算法</p>
                <p>AI判别方案：即时格点天气算法、实景天气识别算法</p>
                <p>创建时间：</p>
            </Card>
        </div>
    );
};

export default Cards;