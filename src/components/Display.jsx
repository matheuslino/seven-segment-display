import styles from './style.module.css'

const Display = ({ fluid, customClass }) => {
  const segments = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'dp']
  const getSegments = segments.map((e) => (
    <div className={styles[`segment-${e}`]} key={e}></div>
  ))

  const render = (
    <div
      className={`
        ${styles.wrapper} 
        ${customClass} 
        ${fluid ? styles.fluid : ''}
      `}
    >
      <div className={styles.box}>
        <div className={styles.container}>{getSegments}</div>
      </div>
    </div>
  )
  return render
}

export default Display
