import {Button, Input} from 'antd';

const Btn = () => {

    return (
            <div style={{display: 'flex' ,margin:'0px 17px'}}>
                <Button type="primary"> + 新增分组 </Button>
                <Input placeholder="关键字搜索" style={{width: '50%',marginLeft:"18px"}}></Input>
            </div>
    )
}

export default Btn
