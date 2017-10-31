/**
 * Created by belle on 2017/10/27.
 */
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Button, MenuItem, Dropdown} from 'antd';

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
        this.option = <Menu>
            <Menu.Item>
                <a target="_blank">新增项目</a>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item>
                <a target="_blank">查询项目信息</a>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item>
                <a target="_blank">修改项目信息</a>
            </Menu.Item>
        </Menu>;
    }


    /**
     * xs <768
     * sm >=768
     * md >=992
     * lg >=1200
     * xl >=1600
     */

    render() {

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo"/>
                    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
                          theme="light"
                          inlineCollapsed={this.state.collapsed} mode='inline'>
                        <SubMenu key="sub1" title={<span><Icon type="appstore"/><span>转盘世家</span></span>}>

                            <Menu.Item key="zh-TW">繁体版</Menu.Item>
                            <Menu.Item key="newMahe">新马</Menu.Item>
                            <Menu.Item key="elex">Elex</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" title=
                            {<span><Icon type="appstore"/><span>新版转盘(3D)</span></span>}>
                            <Menu.Item key="7">鲨鱼很忙测试环境</Menu.Item>
                            <Menu.Item key="8">鲨鱼很忙(轻测版本) 6</Menu.Item>
                            <Menu.Item key="9">SharkBoom</Menu.Item>
                        </SubMenu>

                        <SubMenu mode='vertical' key="sub3"
                                 title={<span><Icon type="appstore"/><span>三只小猪</span></span>}>
                            <SubMenu key="10" title="三只小猪多语言">
                                <Menu.Item >bbbbbb</Menu.Item>
                                <Menu.Item mode='horizal'>aaaaa</Menu.Item>
                            </SubMenu>

                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon
                            type="appstore"/><span>强袭阵列</span></span>}>
                            <Menu.Item key="11">强袭阵列之英语</Menu.Item>
                            <Menu.Item key="12">强袭阵列之繁体</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0,fontsize:40}}>Aladin</Header>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>后台</Breadcrumb.Item>
                            <Breadcrumb.Item>项目管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {/*<Dropdown overlay={this.option}>*/}
                                {/*<button className="ant-btn ant-btn-menu">*/}
                                    {/*请选择将要进行的操作<i className="anticon anticon-down"></i></button>*/}
                            {/*</Dropdown>*/}

                            <Menu  selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item key="new">
                                    <Icon type="mail" />新增项目信息
                                </Menu.Item>
                                <Menu.Item key="search" >
                                    <Icon type="appstore" />查询项目信息
                                </Menu.Item>
                                <Menu.Item key="edit" >
                                    <Icon type="appstore" />修改项目项目信息
                                </Menu.Item>

                            </Menu>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        萌蛋互动网络有限公司 ©20178 Created by Aladin
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo;