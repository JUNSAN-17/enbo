import React, {useState} from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme, ConfigProvider} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('监控设备', '1', <PieChartOutlined/>,[
        getItem('设备状态', '2'),
        getItem('设备分组', '3'),
    ]),
];


const Contain = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG,},
    } = theme.useToken();

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#333b46',
                }}
            >
                <div className="demo-logo" style={{color: "#fff" ,fontSize: '17px'}}>
                        恩博森林资源管理平台
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        backgroundColor: '#333b46',
                        flex: 1,
                        minWidth: 0,
                    }}

                />
            </Header>
            <Layout>
                <Sider
                    style={{backgroundColor: '#3c4551', color: 'white',}}
                    collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    {/*<div className="demo-logo-vertical"/>*/}
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={items}
                        style={{
                            backgroundColor: '#3c4551',
                        }}
                    />
                </Sider>
                <Content
                    style={{
                        margin: '10px 10px',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            height: '100%',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>

            </Layout>
        </Layout>
    )
}

export default Contain