import { Button, ConfigProvider } from 'antd';
const CardActions = (props) => {
    return (
        <div style={{ borderRight: "1px solid #d9d9d9" }}>
            <Button type='link' style={{ marginLeft: -20 }}>{props.test}</Button>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultColor: "#fff",
                            defaultBg: '#079f14',
                            paddingInlineSM: 3,
                            contentFontSizeSM: 12
                        }
                    }
                }}
            >
                <Button size="small" style={{ marginRight: 8 }}>{props.edit}</Button>
            </ConfigProvider>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultColor: "#fff",
                            defaultBg: '#d40909',
                            paddingInlineSM: 3,
                            contentFontSizeSM: 12
                        }
                    }
                }}
            >
                <Button size="small">{props.close}</Button>
            </ConfigProvider>
        </div>
    )
}

export default CardActions