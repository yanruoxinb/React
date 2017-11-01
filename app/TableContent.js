/**
 * Created by belle on 2017/11/1.
 */

import {
    Icon,
    Button,
    MenuItem,
    Input,
    Table,
    Popconfirm
} from 'antd';

import React, {Component}from "react";

class EditableCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            editable: this.props.editable || false
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
                            <Input value={value} onChange={e => this.handleChange(e)}/>
                        </div> :
                        <div className="editable-row-text">
                            {value.toString() || ' '}
                        </div>
                }
            </div>
        );
    }
}

class TableContent extends React.Component {
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

            filterDropdown: (
                <div className="custom-filter-dropdown">
                    <Input
                        placeholder="Search name"
                    />
                    <Button type="primary">Search</Button>
                </div>
            ),
            filterIcon: <Icon type="smile-o"  />,

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
                  <Button type="primary" style={{marginRight:'5px'}} onClick={() => this.editDone(index, 'save')}>Save</Button>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                      <Button type="primary">Cancel</Button>
                  </Popconfirm>
                </span>: <span>
                  <Button type="primary" onClick={() => this.edit(index)}>Edit</Button>
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
export default  TableContent;