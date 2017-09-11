import React from 'react';
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom';
import LayoutCss from '../layout/layout.css';

import Todo from '../../modules/todo/todo.jsx';
import TodoNewDetail from '../../modules/todo/todoDetail.jsx';
import Car from '../../modules/car/car.jsx';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.userName = "";
    }

    componentWillMount(){
        this.userName = cachePub.get(CacheKeys.USERNAME);
        if(!this.userName){
            //this.props.history.push({pathname:"/"});
        }
    }

    logOut(){
        //cachePub.set(CacheKeys.USERNAME,"");
        //this.props.history.push({pathname:"/"});
    }

    render(){
        return(
            <div className={LayoutCss.container}>
                <div className={LayoutCss.nav}>
                    <ul>
                        <li><Link to={`${this.props.match.url}/car`}>Car</Link></li>
                        <li><Link to={`${this.props.match.url}/todo`}>Todo</Link></li>
                    </ul>
                </div>
                <div className={LayoutCss.rightBox}>
                    <div className={LayoutCss.top}>
                        <span>{this.userName}</span>
                        <span className={LayoutCss.logout} onClick={e=>this.logOut()}>退出</span>
                    </div>
                    <div className={LayoutCss.box}>
                        <Switch>
                            <Route path={`${this.props.match.url}/car`} component={Car} />
                            <Route path={`${this.props.match.url}/todo`} component={Todo}/>
                            <Route path={`${this.props.match.url}/todoDetail/:id`} component={TodoNewDetail}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}