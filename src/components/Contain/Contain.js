import React, {useState} from 'react';
import Btn from "../Btn/Btn";
import Cards from "../Cards/Cards";
import Map from "../Map/Map";
import {
    DatabaseOutlined,
    AlertOutlined,
    FireOutlined,
    EnvironmentOutlined,
    SunOutlined,
    FileDoneOutlined,
    SettingOutlined
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
    getItem('监控设备', '1', <span><i className="ri-camera-line"></i></span>, [
        getItem('设备状态', '2'),
        getItem('设备分组', '3'),
    ])
];
const items2 = [
    getItem('地图显示', '4', <span><i className="ri-earth-line"></i></span>),
    getItem('监控设备管理', '5', <span><i className="ri-camera-line"></i></span>),
    getItem('防火资源管理', '6', <DatabaseOutlined/>),
    getItem('报警管理', '7', <AlertOutlined/>),
    getItem('历史火情', '8', <FireOutlined/>),
    getItem('巡护管理', '9', <EnvironmentOutlined/>),
    getItem('实景天气', '10', <SunOutlined/>),
    getItem('考核管理', '11', <FileDoneOutlined/>),
    getItem('算法调度管理', '12', <span><i className="ri-reactjs-fill"></i></span>),
    getItem('系统管理', '13', <SettingOutlined/>),
]

const nameArr = [
    {
        id: "01",
        name:"丰都北部片区",
        number:150,
        time:"2024-07-23 15:52:37"
    },
    {
        id: "02",
        name:"丰都南部片区",
        number:180,
        time:"2024-07-24 15:52:37"
    },
    {
        id: "03",
        name:"丰都东部片区",
        number:180,
        time:"2024-07-22 15:52:37"
    },
    {
        id: "04",
        name:"丰都西部片区",
        number:160,
        time:"2024-07-21 15:52:37"
    },
]

const Contain = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG,},
    } = theme.useToken();

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        // darkItemColor:"#bfa",
                        itemColor: "#fff",
                        itemSelectedColor: "#1890ff",
                        itemBorderRadius: 0,
                        darkItemSelectedBg: "#1890ff"
                    }
                }

            }}
        >
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
                    <div className="demo-logo" style={{color: "#fff", fontSize: '18px'}}>
                        <i className="ri-tree-fill"></i>
                        恩博森林资源管理平台
                    </div>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['5']}
                        items={items2}
                        style={{
                            backgroundColor: '#333b46',
                            flex: 1,
                            minWidth: 0,
                            fontSize: "15px"
                        }}

                    />
                </Header>
                <Layout>
                    <Sider
                        style={{backgroundColor: '#3c4551', color: 'white'}}
                        collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                    >
                        <Menu
                            theme="dark"
                            defaultOpenKeys={['1']}
                            defaultSelectedKeys={['2']}
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
                                display: "flex",
                                padding: "17px 0px",
                                minHeight: 360,
                                height: '100%',
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <div style={{width: "50%"}}>
                                <div style={{width: "50%"}}>
                                    <Btn></Btn>
                                </div>
                                <div style={{width: "100%", display: "grid", gridTemplateColumns: " repeat(2, 1fr)"}}>
                                    {nameArr.map((item) =><Cards number={item.number} time={item.time} key={item.id}>{item.name} </Cards>)}
                                </div>
                            </div>

                            <div style={{width: "50%"}}>
                                <Map></Map>
                            </div>

                        </div>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}

export default Contain