import { useNavigate } from 'react-router-dom';
import { HomeCss } from '../assets/css/home.js';

export default function Home() {
    const navigate = useNavigate();
    // 箭头函数
    const toList = () => {
        navigate('/list');
    };

    // 非箭头函数
    function redirectToNotFound() {
        // 随意一个没有定义的路由 验证是否重定向
        navigate('/sdf');
    }

    return (
        <HomeCss>
            <h1>this is home page</h1>
            {/* 点击事件为 onClick */}
            <button onClick={toList}>正常跳转至list页面</button>
            <button onClick={redirectToNotFound} className={'button'}>重定向跳转至404页面</button>
            <>

            </>
        </HomeCss>
    );
}