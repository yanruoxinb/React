import {Layout, Menu, Breadcrumb, Icon, Row, Col, Button, MenuItem, Dropdown, Form, Input} from 'antd';

import React, {Component}from "react";
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Search from "antd/lib/input/Search.d";
const FormItem = Form.Item;

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <SiderDemo/>
            </ul>

            <hr/>
            <Route exact path="/" component={SiderDemo}/>
            <Route path="/add" component={AddProject}/>
            <Route path="/edit" component={EditProject}/>
            <Route path="/search" component={SearchProject}/>
        </div>
    </Router>
)

class SiderDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
        this.onCollapse = (collapsed) => {
            console.log(collapsed);
            this.setState({collapsed});
        };
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
                <Row>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 6}} lg={{span: 4}}>
                        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
                              theme="light"
                              inlineCollapsed={this.state.collapsed} mode='inline' style={{margin: '5px 16px'}}>
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
                    </Col>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 18}} lg={{span: 20}} style={{minHeight: '100vh'}}>
                        <Header style={{background: '#fff', margin: '5px 16px', fontsize: 40}}>Aladin</Header>
                        <Content style={{margin: '0 16px', minHeight: '80vh'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>后台</Breadcrumb.Item>
                                <Breadcrumb.Item>项目管理</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{padding: 24, background: '#fff'}}>

                                <Menu selectedKeys={[this.state.current]} mode="horizontal">
                                    <Menu.Item key="new">
                                        <Link to="/add"><Icon type="mail"/>新增项目信息</Link>
                                    </Menu.Item>
                                    <Menu.Item key="search">
                                        <Link to="/search"><Icon type="appstore"/>查询项目信息</Link>
                                    </Menu.Item>

                                    <Menu.Item key="edit">
                                        <Link to="/edit"><Icon type="appstore"/>修改项目项目信息</Link>
                                    </Menu.Item>
                                </Menu>

                                <div>
                                    <AddProject />
                                    <EditProject />
                                    <SearchProject />

                                </div>

                            </div>
                            <div>

                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            萌蛋互动网络有限公司 ©2017 Created by Aladin
                        </Footer>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

class AddProject extends React.Component {
    render() {
        return (
            <Row>
                <col span={22}>
                    <div>
                        <Form>
                            <FormItem label="项目key:">
                                <Input placeholder="请输入项目key值"/>
                            </FormItem>
                            <FormItem label="项目名称:">
                                <Input placeholder="请输入项目名称"/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary">确定</Button>
                                <Button type="primary">取消</Button>
                            </FormItem>
                        </Form>
                    </div>
                </col>
            </Row>
        );
    }
}

class EditProject extends React.Component {

    render() {
        return (
            <div>edit</div>
        )
    }
}

class SearchProject extends React.Component {

    render() {
        return (
            <div>search</div>
        )
    }
}


export default BasicExample;