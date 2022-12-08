import Display from '../components/Display'
import styles from './style.module.css'

const Example = () => {
  const render = (
    <>
      <nav />
      <header>
        <h1>Seven Segment Display</h1>
        <span>A simple component built for ReactJS Apps</span>
      </header>
      <section className={styles.container}>
        <div className={styles.card}>
          <Display />
        </div>
        <div className={styles.card}>
          <Display />
        </div>
        <div className={styles.card}>
          <Display />
        </div>
      </section>
    </>
  )

  return render
}

export default Example
