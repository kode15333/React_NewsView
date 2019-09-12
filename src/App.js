import React, { Component } from "react";
import NewsPage from "./Pages/NewsPage";
import { Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/:category?" component={NewsPage} />
            </div>
        );
    }
}

export default App;
