import {
    Layout,
    Menu,
    Breadcrumb,
    Icon,
    Row,
    Col,
    Button,
    MenuItem,
    Dropdown,
    Form,
    Input,
    Tabs,
    Table,
    Popconfirm
} from 'antd';

import React, {Component}from "react";
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
const TabPane = Tabs.TabPane;
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
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>后台</Breadcrumb.Item>
                                <Breadcrumb.Item>项目管理</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{padding: 24, background: '#fff', minHeight: '80vh'}}>

                                {/*<Menu selectedKeys={[this.state.current]} mode="horizontal">*/}
                                {/*<Menu.Item key="new">*/}
                                {/*<Link to="/add"><Icon type="mail"/>新增项目信息</Link>*/}
                                {/*</Menu.Item>*/}
                                {/*<Menu.Item key="search">*/}
                                {/*<Link to="/search"><Icon type="appstore"/>查询项目信息</Link>*/}
                                {/*</Menu.Item>*/}

                                {/*<Menu.Item key="edit">*/}
                                {/*<Link to="/edit"><Icon type="appstore"/>修改项目项目信息</Link>*/}
                                {/*</Menu.Item>*/}
                                {/*</Menu>*/}

                                {/*<Tabs>*/}
                                    {/*<TabPane tab="新增项目信息" key="1">*/}
                                        {/*<AddProject />*/}
                                    {/*</TabPane>*/}
                                    {/*<TabPane tab="修改项目信息" key="2">*/}
                                        {/*<EditProject />*/}
                                    {/*</TabPane>*/}
                                    {/*<TabPane tab="查询项目信息" key="3">*/}
                                        {/*<SearchProject />*/}
                                    {/*</TabPane>*/}
                                {/*</Tabs>*/}


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
                <Form>
                    <FormItem label="项目key:" labelCol={{xs: 24, sm: 6, md: 10, lg: 6}}
                              wrapperCol={{xs: 24, sm: 10, md: 8, lg: 8}}>
                        <Input placeholder="请输入项目key值"/>
                    </FormItem>
                    <FormItem label="项目名称:" labelCol={{xs: 24, sm: 6, md: 10, lg: 6}}
                              wrapperCol={{xs: 24, sm: 10, md: 8, lg: 8}}>
                        <Input placeholder="请输入项目名称"/>
                    </FormItem>
                    <FormItem wrapperCol={{xs: 8, offset: 6}}>
                        <Button type="primary">确定</Button>
                        <Button type="primary" style={{'margin-left': '25px'}}>取消</Button>
                    </FormItem>
                </Form>
            </Row>


        );
    }
}

// class EditProject extends React.Component {
//
//     render() {
//         return (
//             <div>edit</div>
//         )
//     }
// }


class EditableCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            editable: this.props.editable || false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editable !== this.state.editable) {
            this.setState({editable: nextProps.editable});
            if (nextProps.editable) {
                this.cacheValue = this.state.value;
            }
        }
        if (nextProps.status && nextProps.status !== this.props.status) {
            if (nextProps.status === 'save') {
                this.props.onChange(this.state.value);
            } else if (nextProps.status === 'cancel') {
                this.setState({value: this.cacheValue});
                this.props.onChange(this.cacheValue);
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.editable !== this.state.editable ||
            nextState.value !== this.state.value;
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({value});
    }

    render() {
        const {value, editable} = this.state;
        return (
            <div>
                {
                    editable ?
                        <div>
                            <Input
                                value={value}
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                        :
                        <div className="editable-row-text">
                            {value.toString() || ' '}
                        </div>
                }
            </div>
        );
    }
}

class EditProject extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'keyValue',
            dataIndex: 'keyValue',
            width: '30%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'keyValue', text),
        }, {
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record, index) => {
                const {editable} = this.state.data[index].name;
                return (
                    <div className="editable-row-operations">
                        {
                            editable ?
                                <span>
                  <a onClick={() => this.editDone(index, 'save')}>Save</a>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                    <a>Cancel</a>
                  </Popconfirm>
                </span>: <span>
                  <a onClick={() => this.edit(index)}>Edit</a>
                </span>
                        }
                    </div>
                );
            },
        }];
        this.state = {
            data: [{
                    key: '0',
                    keyValue: {
                        editable: false,
                        value: 'planet',
                    },
                    name: {
                        editable: false,
                        value: '转盘世家',
                    }
                },
                {
                    key: '1',
                    keyValue: {
                        editable: false,
                        value: 'Pet',
                    },
                    name: {
                        editable: false,
                        value: '宠物宝贝',
                    }
                }
            ]
        };
    }

    renderColumns(data, index, key, text) {
        const {editable, status} = data[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (<EditableCell
            editable={editable}
            value={text}
            onChange={value => this.handleChange(key, index, value)}
            status={status}
        />);
    }

    handleChange(key, index, value) {
        const {data} = this.state;
        data[index][key].value = value;
        this.setState({data});
    }

    edit(index) {
        const {data} = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = true;
            }
        });
        this.setState({data});
    }

    editDone(index, type) {
        const {data} = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = false;
                data[index][item].status = type;
            }
        });
        this.setState({data}, () => {
            Object.keys(data[index]).forEach((item) => {
                if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                    delete data[index][item].status;
                }
            });
        });
    }

    render() {
        const {data} = this.state;
        const dataSource = data.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });
        const columns = this.columns;
        return <Table bordered dataSource={dataSource} columns={columns}/>;
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