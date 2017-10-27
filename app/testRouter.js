/**
 * Created by belle on 2017/10/26.
 */
import React,{Component} from 'react'
import { Router, Route, Link } from 'react-router'
import ReactDOM from "react-dom";
import  {Lifecycle} from "react-router";

class TestRouter extends Component{
    mixins:[Lifecycle],

    routerWillLeave(){
        if(!this.state.isSaved){
            return "not saved";
        }
    }
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class About extends Component{
    render() {
        return <h3>About</h3>
    }
}

class Inbox extends Component{
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
}

class Message extends Component{
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
}

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={App} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>
), document.body)