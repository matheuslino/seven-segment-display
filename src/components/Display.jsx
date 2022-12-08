import styles from './style.module.css'

const segments = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'dp']

const truthTabel = {
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 1, 1, 0, 0, 0, 0],
  2: [1, 1, 0, 1, 1, 0, 1],
  3: [1, 1, 1, 1, 0, 0, 1],
  4: [0, 1, 1, 0, 0, 1, 1],
  5: [1, 0, 1, 1, 0, 1, 1],
  6: [1, 0, 1, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 0, 0, 1, 1],
  a: [1, 1, 1, 0, 1, 1, 1],
  b: [0, 0, 1, 1, 1, 1, 1],
  c: [1, 0, 0, 1, 1, 1, 0],
  d: [0, 1, 1, 1, 1, 0, 1],
  e: [1, 0, 0, 1, 1, 1, 1],
  f: [1, 0, 0, 0, 1, 1, 1],
}

const Segment = ({ code, isOn }) => {
  const render = (
    <div
      className={`
        ${styles[`segment-${code}`]}
        ${isOn ? styles.isOn : ''}
      `}
    />
  )

  return render
}

const decodeDecimal = (e) => {}

const Display = ({ digit, fluid, customClass }) => {
  const getSegments = (digit) => {
    console.log('digit', truthTabel[digit])
    return segments.map((e, key) => (
      <Segment key={key} code={e} isOn={truthTabel[digit][key]} />
    ))
  }

  const render = (
    <div
      className={`
        ${styles.wrapper} 
        ${fluid ? styles.fluid : ''}
        ${customClass} 
      `}
    >
      <div className={styles.box}>
        <div className={styles.container}>{getSegments(digit)}</div>
      </div>
    </div>
  )
  return render
}

export default Display
