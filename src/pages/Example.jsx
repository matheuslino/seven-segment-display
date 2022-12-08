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
        <div className={styles.card}>Card 2</div>
        <div className={styles.card}>Card 3</div>
        <div className={styles.card}>Card 4</div>
        <div className={styles.card}>Card 5</div>
        <div className={styles.card}>Card 6</div>
      </section>
    </>
  )

  return render
}

export default Example
