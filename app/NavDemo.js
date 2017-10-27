/**
 * Created by belle on 2017/10/27.
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
class NavDemo extends React.Component {
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
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

export default  NavDemo;