import React from 'react';
import { Card, Button, ConfigProvider } from 'antd';

import CardHeader from './Card_header/CardHeader';
import CardBody from './Card_body/CardBody';
import CardActions from './Card_actions/CardActions';



const Cards = () => {
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
                    <CardHeader name="丰都北部片区"></CardHeader>
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
                            <Button href="#" type="link" style={{ margin: "0px 0px 0px 10px" }}>编辑</Button>
                            <Button href="#" type="link" danger style={{ margin: "-16px" }}>删除</Button>
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
                <CardBody></CardBody>
            </Card>
        </div>
    );
};

export default Cards;