import React from "react";

import styles from "./Button.module.css"

export const Button = ({onClick}) => (<button type="button" className={styles.Button} onClick={onClick}>Load more</button>)
   
