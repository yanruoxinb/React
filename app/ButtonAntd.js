/**
 * Created by belle on 2017/10/25.
 */

import React, {Component} from "react";
import {Button, Dropdown, Menu, Icon} from "antd";
import "./App.css";

class ButtonAntd extends Component {

    handleMenuClick(e) {
        console.log("click", e);
    }

    menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">1st item</Menu.Item>
            <Menu.Item key="2">2nd item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
    );

    render() {
        return (
            <div>
                <Button type="primary">primary</Button>
                <Button>secondary</Button>
                <Dropdown overlay={menu}>
                    <Button>
                        more <Icon type="down"/>
                    </Button>
                </Dropdown>
            </div>
        );
    }
}

export  default  ButtonAntd;