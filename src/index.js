import ReactDOM from 'react-dom/client';
import App from './APP.js';
import "./index.css"

//mock数据
import "./mock/mockData"
//antd样式
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)