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
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, key) => (
            <Display key={key} digit={e} />
          ))}
        </div>
        <div className={styles.card}>
          {['a', 'b', 'c', 'd', 'e', 'f'].map((e, key) => (
            <Display key={key} digit={e} />
          ))}
        </div>
      </section>
    </>
  )

  return render
}

export default Example
