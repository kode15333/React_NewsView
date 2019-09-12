import React, { Component } from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

class NewsPage extends Component {
    render() {
        const { match } = this.props;
        const category = match.params.category || "all";

        return (
            <div>
                <Categories />
                <NewsList category={category} />
            </div>
        );
    }
}

export default NewsPage;
