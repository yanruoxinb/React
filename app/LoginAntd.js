/**
 * Created by belle on 2017/10/25.
 */
import React, {Component} from 'react';
import {Col,Row} from "antd";

/**
 * xs <768
 * sm >=768
 * md >=992
 * lg >=1200
 * xl >=1600
 */
class LoginAntd extends Component{

    render(){
        return (
            <div className="gutter-example">
                <Row type="flex" justify="center" align="middle">
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} offset={6}>


                    </Col>
                </Row>
            </div>

        );
    }

}