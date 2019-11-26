import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

export default class IndexComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<>
            <HeaderComponent></HeaderComponent>
            <BrowserRouter>

                <nav>
                    <Link style={{"marginRight": "10px"}} to="/home/10/Mayank/abc">Home for 10</Link>
                    <Link style={{"marginRight": "10px"}} to="/home/30/Ankit/xyz">Home for 30</Link>
                    <Link style={{"marginRight": "10px"}} to="/about">About</Link>
                    <Link style={{"marginRight": "10px"}} to="/help?age=10&name=mayank&type=abc">Help</Link>
                    <Link style={{"marginRight": "10px"}} to="/help?age=10&name=mayank&type=xyz">Help</Link>
                </nav>
                
                <Switch>
                    <Route exact path="/home/:id/:name/:data" component={HomePageComponent} />
                    <Route exact path="/help" component={HelpPageComponent} />
                    <Route exact path="/about" component={AboutPageComponent} />
                    <Route component={PageNotFound} />
                </Switch>

                
            </BrowserRouter>
            <FooterComponent></FooterComponent>
            </>
        )
    }
}

function PageNotFound() {
    return <h1>Page Not Found</h1>
}

function HelpPageComponent(props) {
    debugger;
    return <h3>This is Help Page</h3>
}

function AboutPageComponent() {
    return <h3>This is About Page</h3>
}

function XyzComponent() {
    return <h3>This is Xyz Page</h3>
}

function AbcComponent() {
    return (
    <>
        <Route exact path="/home/:id/:name/abc" component={XyzComponent} />
        <h3>This is Abc Page</h3></>
    )
}

class HomePageComponent extends React.Component {
    render() {
        debugger
        return (
            <>
                <Route exact path="/home/:id/:name/abc" component={AbcComponent} />
                <Route exact path="/home/:id/:name/xyz" component={XyzComponent} />
                <h1>Hello {this.props.match.params.name} for {this.props.match.params.id}</h1>
            </>
        )
    }
}

function HeaderComponent() {
    return (
        <>
            <h2>This is Header Component</h2>
            
            <h3>This is Sub Header...</h3>
        </>
    )
}

function FooterComponent() {
    return (
        <>
            <h2>This is Footer Component</h2>
        </>
    )
}