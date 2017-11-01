import {
    Layout, Menu, Breadcrumb, Icon,
    Row,
    Col,
    Button,
    MenuItem,
    Dropdown,
    AutoComplete,
    Form,
    Input,
    Tabs,
    Table,
    Popconfirm, Cascader
} from 'antd';
import TableContent from "./TableContent.js";
import React, {Component}from "react";
import AddProjectModal from "./AddProjectModal.js";
import TranslateKeyList from './TranslateKeyList';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class Back extends React.Component {
    constructor(props) {
        super(props);
        this.options = [{
            value: '转盘世家',
            label: '转盘世家',
            children: [{
                value: 'alipay',
                label: 'alipay',
            }, {
                value: 'elex',
                label: 'elex',
            }
            ]
        }, {
            value: '三只小猪',
            label: '三只小猪',
            children: [{
                value: 'yogrt',
                label: 'yogrt'
            }]
        }];
        this.onChange = function (value, selectedOptions) {
            console.log(value, selectedOptions);
        }
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header style={{background: '#f5f5f5'}}>
                        <Cascader options={this.options} onChange={this.onChange} placeholder="请选择项目平台" showSearch/>

                    </Header>
                    <Layout style={{minHeight: '85vh'}}>
                        <Row gutter={24}>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 6}} lg={{span: 4}}>
                                <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
                                      theme="light"
                                      mode='inline' style={{margin: '5px 16px'}}>
                                    <SubMenu key="sub1" title={<span><Icon type="appstore"/><span>模块管理</span></span>}>
                                        <Menu.Item key="zh-TW">宠物</Menu.Item>
                                        <Menu.Item key="newMahe">岛屿</Menu.Item>
                                        <Menu.Item key="elex">转盘</Menu.Item>
                                    </SubMenu>

                                    <SubMenu key="sub2" title=
                                        {<span><Icon type="appstore"/><span>翻译管理</span></span>}>
                                        <Menu.Item key="7">上传</Menu.Item>
                                        <Menu.Item key="8">下载</Menu.Item>
                                        <Menu.Item key="9">查询</Menu.Item>
                                    </SubMenu>
                                    <menuitem key="menu3" title=
                                        {<span><Icon type="appstore"/><span>项目管理</span></span>}></menuitem>

                                </Menu>
                            </Col>
                            <Col gutter={24} xs={{span: 24}} sm={{span: 24}} md={{span: 18}} lg={{span: 20}}
                                 style={{}}>
                                {/*<Header style={{background: '#fff', margin: '5px 16px', fontsize: 40}}>Aladin</Header>*/}
                                <Content>

                                    <div style={{background: '#fff', minHeight: '85vh'}}>
                                        <Tabs style={{marginLeft: '20px'}}>
                                            <TabPane tab={<span><Icon type="apple"/>翻译管理</span>} key="1">

                                                <Col xs={{span: 8}} sm={{span: 6}} md={{span: 6}} lg={{span: 6}}>
                                                    <AddProjectModal/>
                                                </Col>
                                                <Col xs={{span: 16}} sm={{span: 8, offset: 10}}
                                                     md={{span: 6, offset: 12}} lg={{span: 6, offset: 12}}>
                                                    <AutoComplete
                                                        className="certain-category-search"
                                                        dropdownClassName="certain-category-search-dropdown"
                                                        dropdownMatchSelectWidth={false}
                                                        dropdownStyle={{width: 300}}
                                                        size="large"
                                                        placeholder="请输入项目名称或key值"
                                                        optionLabelProp="value">
                                                        <Input size={80}
                                                               suffix={<Icon type="search"
                                                                             className="certain-category-icon"/>}/>
                                                    </AutoComplete>

                                                </Col>
                                                <Col span={24}>
                                                    <TableContent/>
                                                </Col>
                                            </TabPane>
                                            <TabPane tab={<span><Icon type="android"/>翻译key管理</span>} key="2">
                                                <TranslateKeyList/>
                                            </TabPane>
                                            <TabPane tab={<span><Icon type="appstore"/>模块管理</span>} key="3">
                                                模块管理
                                            </TabPane>
                                        </Tabs>
                                    </div>
                                </Content>
                            </Col>
                        </Row>
                    </Layout>
                    <Footer style={{textAlign: 'center'}}>
                        萌蛋互动网络有限公司 ©2017 Created by Aladin
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default  Back;


