
const CardBody = (props) => {
    return (
        <div>
            <p>设备数量：{props.number}</p>
            <p>检测开启状态：<span style={{color:"#199703" }}>28</span>/36</p>
            <p>AI判别开启状态：<span style={{color: "#199703" }}>28</span>/36</p>
            <p>AI判别方案：即时格点天气算法、实景天气识别算法</p>
            <p>创建时间：{props.time}</p>
        </div>
    )
}

export default CardBody