import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = (props) => {
    let pagesAmount = Math.ceil(props.totalUsersCount / props.pageUsersCount);
    let numbers = [];
    for (let i = 1; i <= pagesAmount; i++) {
        numbers.push(i);
    }

    let pagination = numbers.map((num) => {
        return (
            <span
                className={
                    num === props.selectedPage ? styles.selected : undefined
                }
                onClick={() => props.getAllUsers(num, props.pageUsersCount)}
                key={num}
            >
                {num}
            </span>
        );
    });

    return <div>{pagination}</div>;
};
