import { ReloadOutlined, } from '@ant-design/icons';
import {  Button, ConfigProvider } from 'antd';
const CardHeader = (props) => {
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