/**
 * Created by belle on 2017/11/1.
 */
import React, {Component} from "react";
import {Icon, Row, Col, MenuItem, AutoComplete, Input, Table} from 'antd';
import TableContent from "./TableContent.js";
import AddProjectModal from "./AddProjectModal.js";

class TranslateKeyList extends Component {
    constructor() {
        super();
        this.dataSource = [{
            key: '1',
            langKey: 'lang.login.0',
            lans: '我是小鸟，我要飞',
            excludeLans: '我',
            createTime: 2016 - 12 - 13,
            lastTime: 2016 - 12 - 13,
            owner: 'wang',
            projectId: 3,
            status: '正常'
        }, {
            key: '2',
            langKey: 'lang.login.0',
            lans: '我是小鸟，我要飞',
            excludeLans: '我',
            createTime: 2016 - 12 - 13,
            lastTime: 2016 - 12 - 13,
            owner: 'wang',
            projectId: 3,
            status: '正常'
        },
            {
                key: '3',
                langKey: 'lang.login.0',
                lans: '我是小鸟，我要飞',
                excludeLans: '我',
                createTime: 2016 - 12 - 13,
                lastTime: 2016 - 12 - 13,
                owner: 'wang',
                projectId: 3,
                status: '正常'
            },
            {
                key: '4',
                langKey: 'lang.login.0',
                lans: '我是小鸟，我要飞',
                excludeLans: '我',
                createTime: 2016 - 12 - 13,
                lastTime: 2016 - 12 - 13,
                owner: 'wang',
                projectId: 3,
                status: '正常'
            },
            {
                key: '5',
                langKey: 'lang.login.0',
                lans: '我是小鸟，我要飞',
                excludeLans: '我',
                createTime: 2016 - 12 - 13,
                lastTime: 2016 - 12 - 13,
                owner: 'wang',
                projectId: 3,
                status: '正常'
            }

        ];

        this.columns = [{
            title: 'langKey',
            dataIndex: 'langKey',
            key: 'langKey'
        }, {
            title: '需要翻译的语言',
            dataIndex: 'lans',
            key: 'lans'
        }, {
            title: '不需要翻译的语言',
            dataIndex: 'excludeLans',
            key: 'excludeLans'
        }, {
            title: '添加时间',
            dataIndex: 'createTime',
            key: 'createTime'
        },
            {
                title: '最后修改时间',
                dataIndex: 'lastTime',
                key: 'lastTime'
            }, {
                title: '修改者',
                dataIndex: 'owner',
                key: 'owner'
            }, {
                title: '项目id',
                dataIndex: 'projectId',
                key: 'projectId'
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            }


        ];
    }

    render() {

        return (
            <div>
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
                <Col span={24} gutter={16}>
                    <Table dataSource={this.dataSource} columns={this.columns}/>
                </Col>
            </div>

        )
    }
}

export default  TranslateKeyList;