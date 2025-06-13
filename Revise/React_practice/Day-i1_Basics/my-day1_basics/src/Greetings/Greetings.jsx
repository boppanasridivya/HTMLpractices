import React from 'react'
import styles from "./greetings.module.css"

const Greetings = () => {
  return (
    <div>
      <h1 className="greetings">Greetings</h1>
      <h3 className={styles.app}>Hello</h3>
    </div>
  )
}

export default Greetings
