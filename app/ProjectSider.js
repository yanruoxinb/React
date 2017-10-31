/**
 * Created by belle on 2017/10/26.
 */

import React, {Component}from "react";
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Button} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

/**
 * xs <768
 * sm >=768
 * md >=992
 * lg >=1200
 * xl >=1600
 */

class ProjectSider extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };

        this.toggleCollapsed = () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        };
    }

    render() {
        return (

            <Row>
                <Col span={24}>
                    <Layout style={{minHeight: '100vh', background: '#f5f5f5'}}>
                        <Sider>

                            <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline"
                                  theme="light"
                                  inlineCollapsed={this.state.collapsed}>
                                <SubMenu key="sub1" title={<span>
                                                     <Icon
                                                         type="appstore"/><span>转盘世家</span></span>}>
                                    <Menu.Item key="alipay">支付宝</Menu.Item>
                                    <Menu.Item key="zh-TW">繁体版</Menu.Item>
                                    <Menu.Item key="newMahe">新马</Menu.Item>
                                    <Menu.Item key="elex">Elex</Menu.Item>
                                    <Menu.Item key="multiLanguage">多语言版</Menu.Item>
                                    <Menu.Item key="euler">欧拉</Menu.Item>
                                    <Menu.Item key="yogrt">yogrt</Menu.Item>
                                    <Menu.Item key="1">越语版</Menu.Item>
                                    <Menu.Item key="2">阿凡提</Menu.Item>
                                    <Menu.Item key="3">宠物版</Menu.Item>
                                    <Menu.Item key="4">Qzone</Menu.Item>
                                    <Menu.Item key="5">官方联运</Menu.Item>
                                    <Menu.Item key="6">腾讯游戏大厅</Menu.Item>

                                </SubMenu>

                                <SubMenu key="sub2" title={<span>
                                                     <Icon
                                                         type="appstore"/><span>新版转盘</span></span>}>
                                    <Menu.Item key="7">鲨鱼很忙测试环境</Menu.Item>
                                    <Menu.Item key="8">鲨鱼很忙(轻测版本) 6</Menu.Item>
                                    <Menu.Item key="9">SharkBoom</Menu.Item>
                                </SubMenu>

                                <SubMenu key="sub3" title={<span>
                                                     <Icon
                                                         type="appstore"/><span>三只小猪</span></span>}>
                                    <Menu.Item key="10">三只小猪多语言</Menu.Item>

                                </SubMenu>
                                <SubMenu key="sub4" title={<span>
                                                     <Icon
                                                         type="appstore"/><span>强袭阵列</span></span>}>
                                    <Menu.Item key="11">强袭阵列之英语</Menu.Item>
                                    <Menu.Item key="12">强袭阵列之繁体</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                    </Layout>
                </Col>
            </Row>
        );
    }
}

export default ProjectSider;