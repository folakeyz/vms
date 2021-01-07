import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from '../styles.module.css';

export default class Navbar extends Component {
 
 render() {
    return (
      <nav className={styles.navBar}>
          <ul>
            <li className={styles.btn}>
              <Link to="/">CHECK IN</Link>
            </li>
            <li  className={styles.btn}>
              <Link to="/">RETURNING GUEST</Link>
            </li>
            <li  className={styles.btn}>
              <Link to="/">CHECK OUT</Link>
            </li>
          </ul>
  
      </nav>
    );
  }
}
