/**
 * Created by belle on 2017/10/25.
 */
import React, {Component} from 'react';

class LoginTest extends Component {
    render() {
        return (
            <div className="main" style={{border:1}}>
                <div className="container-fluid ">
                    <div className="row">

                        <form className="form-group col-xs-12 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1  col-lg-8 col-lg-offset-2">

                            <div className="form-group  col-xs-10 col-xs-offset-1 col-md-3 col-md-offset-4 col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2">
                                <h3 className="text-center">欢迎登录</h3>

                            </div>

                            <div className="form-group col-xs-10 col-xs-offset-1 col-md-3 col-md-offset-4 col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                                <div className="input-group">
                                    <div className="input-group-addon glyphicon glyphicon-user" style={{top:0}}></div>
                                    <input type="text" className="form-control input-lg" id="name" placeholder="请输入用户名" />

                                </div>
                            </div>

                            <div className="form-group col-xs-10 col-xs-offset-1 col-md-3 col-md-offset-4 col-sm-8 col-sm-offset-2  col-lg-6 col-lg-offset-3">
                                <div className="input-group">
                                    <div className="input-group-addon glyphicon glyphicon-check" style={{top:0}}></div>
                                    <input type="text" className="form-control  input-lg" id="pwd" placeholder="请输入密码" />

                                </div>
                            </div>

                            <div className="form-group  col-xs-10 col-xs-offset-1 col-md-3 col-md-offset-4 col-sm-8 col-sm-offset-2  col-lg-6 col-lg-offset-3">
                                <div>
                                    <button type="submit" className="btn btn-lg btn-success col-md-12 col-xs-12 col-sm-12 col-lg-12">登录</button>
                                </div>

                            </div>

                            <div className="form-group col-xs-10 col-xs-offset-1 col-md-3 col-md-offset-4 col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                                <span className="pull-left"><a href="#">找回密码</a></span>
                                <div className="pull-right">
                                    <input type="checkbox"/>
                                    <span><a href="#" className="pull-right">记住我</a></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}


export default LoginTest;
