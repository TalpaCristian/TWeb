import {Card, Col, Menu} from 'antd'
import {Header} from "antd/es/layout/layout";
function HeaderIn() {

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">navbar 1</Menu.Item>
                <Menu.Item key="2">navbar 2</Menu.Item>
                <Menu.Item key="3">navbar 3</Menu.Item>
                <Menu.Item key="4">navbar 4</Menu.Item>
                <Menu.Item key="5">navbar 5</Menu.Item>
                <Menu.Item key="6">navbar 6</Menu.Item>
                <Menu.Item key="7">navbar 7</Menu.Item>
            </Menu>
        </Header>

    )
}

export default HeaderIn