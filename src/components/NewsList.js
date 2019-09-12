import React, { Component } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
    padding-bottom: 3rem;
    width: 960px;
    margin: 0 auto;
`;

class NewsList extends Component {
    state = {
        articles: null,
        loading: false
    };
    loadData = async () => {
        try {
            this.setState({
                loading: true
            });
            const { category } = this.props;
            const query = category === "all" ? "" : `&category=${category}`;
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e559a391e668415ba81e581688bdefe4`
            );
            this.setState({
                articles: response.data.articles
            });
        } catch (e) {
            console.error(e);
        }

        this.setState({
            loading: false
        });
    };
    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.category !== prevProps.category) {
            this.loadData();
        }
    }

    render() {
        const { loading, articles } = this.state;

        if (loading || !articles)
            return (
                <NewsListBlock>
                    <div>로딩중입니다...</div>
                </NewsListBlock>
            );
        return (
            <NewsListBlock>
                {articles.map(article => (
                    <NewsItem key={article.url} article={article} />
                ))}
            </NewsListBlock>
        );
    }
}

export default NewsList;
