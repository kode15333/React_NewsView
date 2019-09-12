import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
    {
        name: "all",
        text: "전체보기"
    },
    {
        name: "business",
        text: "비즈니스"
    },
    {
        name: "entertainment",
        text: "엔터테인먼트"
    },
    {
        name: "health",
        text: "건강"
    },
    {
        name: "science",
        text: "과학"
    }
];

const CategoriesBlock = styled.div`
    padding-bottom: 3rem;
    width: 960px;
    margin: 0 auto;
    margin-top: 1rem;

    ul {
        overflow: hidden;
        padding: 0;
        margin: 0;
    }
`;

const Category = styled(NavLink)`
    float: left;
    list-style-type: none;
    color: inherit;
    text-decoration: none;

    &.active {
        color: blue;
    }

    span {
        display: block;
        padding: 0.25rem 0.5rem;
    }
`;

const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map(item => {
                return (
                    <Category
                        key={item.name}
                        to={item.name === "all" ? "/" : `/${item.name}`}
                        exact={item.name === "all"}
                        activeClassName="active"
                    >
                        <span>{item.text}</span>
                    </Category>
                );
            })}
        </CategoriesBlock>
    );
};

export default Categories;
