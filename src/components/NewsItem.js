import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
    margin-bottom: 2rem;
    overflow: hidden;

    .thumbnail {
        margin-right: 1rem;
        float: left;
        width: 160px;
        height: 100px;
        // image url은 props(aritcles의 속성 값중이 urlToImage를 불러와서 적용한다.)
        background-image: url(${props => props.urlToImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .contents {
        .title {
            margin-top: 0.5rem;
            margin-bottom: 1rem;

            a {
                color: inherit;
                text-decoration: none;
            }
        }

        .description {
            line-height: 1.3;
        }
    }
`;

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock urlToImage={urlToImage} color="blue">
            {urlToImage && <div className="thumbnail" />}
            <div className="contents">
                <h3 className="title">
                    <a href={url}>{title}</a>
                </h3>
                <div className="description">{description}</div>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;
