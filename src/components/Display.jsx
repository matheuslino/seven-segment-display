import styles from './style.module.css'

const Display = () => {
  const segments = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'dp']
  const getSegments = segments.map((e) => (
    <div className={styles[`segment-${e}`]}></div>
  ))

  const render = (
    <div className={styles.box}>
      <div className={styles.container}>{getSegments}</div>
    </div>
  )
  return render
}

export default Display
