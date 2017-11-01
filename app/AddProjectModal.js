/**
 * Created by belle on 2017/11/1.
 */

import {Modal, Button, Row, Col, Form, Input} from 'antd';
import React from "react";
const FormItem = Form.Item;
class AddProjectModal extends React.Component {
    constructor() {
        super();
        this.state = {visible: false}
        this.showModal = () => {
            this.setState({
                visible: true,
            });
        }
        this.handleOk = (e) => {
            console.log(e);
            this.setState({
                visible: false,
            });
        }
        this.handleCancel = (e) => {
            console.log(e);
            this.setState({
                visible: false,
            });
        }
    }

    render() {
        return (
            <div>
                <Button type="primary" style={{marginBottom:'10px'}} onClick={this.showModal}>添加</Button>
                <Modal title="添加项目信息" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} style={{textAlign:'center'}}>
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
                        </Form>
                    </Row>

                </Modal>
            </div>
        );
    }
}
export  default  AddProjectModal;