import styles from './style.module.css'

const Segment = ({ code, isOn }) => {
  const render = (
    <div
      className={`
        ${styles[`segment-${code}`]}
        ${isOn ? styles.isOn : ''}
      `}
    >
      <div></div>
    </div>
  )

  return render
}

const Display = ({ digit, fluid, customClass }) => {
  const segments = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'dp']
  const getSegments = segments.map((e, key) => (
    <Segment code={e} isOn={key % 2 === 0} />
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
