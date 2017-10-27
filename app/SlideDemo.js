/**
 * Created by belle on 2017/10/27.
 */
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Button} from 'antd';

import React, {Component}from "react";
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
        this.onCollapse = (collapsed) => {
            console.log(collapsed);
            this.setState({collapsed});
        };
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'- '100px'}}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"></div>
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

                            <Menu.Item key="2">3d_funplus</Menu.Item>
                            <Menu.Item key="3">R2网页版</Menu.Item>
                            <Menu.Item key="4">vk</Menu.Item>
                            <Menu.Item key="5">弹弹手Q版</Menu.Item>
                            <Menu.Item key="5">弹弹微信版</Menu.Item>
                            <Menu.Item key="6">支付宝H5</Menu.Item>
                            <Menu.Item key="2">kakao</Menu.Item>
                            <Menu.Item key="3">龙城网络</Menu.Item>
                            <Menu.Item key="4">中东</Menu.Item>
                            <Menu.Item key="5">空间微信版</Menu.Item>


                        </SubMenu>

                        <SubMenu key="sub2" title=
                            {<span><Icon type="appstore"/><span>新版转盘(3D)</span></span>}>
                            <Menu.Item key="7">鲨鱼很忙测试环境</Menu.Item>
                            <Menu.Item key="8">鲨鱼很忙(轻测版本) 6</Menu.Item>
                            <Menu.Item key="9">SharkBoom</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub3" title={<span><Icon type="appstore"/><span>三只小猪</span></span>}>
                            <Menu.Item key="10">三只小猪多语言</Menu.Item>

                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon
                            type="appstore"/><span>强袭阵列</span></span>}>
                            <Menu.Item key="11">强袭阵列之英语</Menu.Item>
                            <Menu.Item key="12">强袭阵列之繁体</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>

        // {/*<Layout>*/}
        // {/*<Row>*/}
        // {/*<Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>*/}
        // {/*/!*<Header style={{background: "#49a9ee"}}>*!/*/}
        // {/*/!*<Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>*!/*/}
        // {/*/!*<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>*!/*/}
        // {/*/!*</Button>*!/*/}
        // {/*/!*<span>深圳萌蛋互动网络科技有限公司</span>*!/*/}
        //
        // {/*/!*</Header>*!/*/}
        // {/*</Col>*/}
        // {/*</Row>*/}
        // {/*</Layout>*/}
        );
    }
}

export default SiderDemo;