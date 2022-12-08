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
const isOctal = (n) => {
  if (!n?.includes(`0o`) || !n?.includes(`0O`)) return false
  return !isNaN(n)
}

const isBinary = (n) => {
  if (!n?.includes(`0b`) || !n?.includes(`0B`)) return false
  return !isNaN(n)
}

const isHexadecimal = (n) => {
  if (!n?.includes(`0x`) || !n?.includes(`0X`)) return false
  return !isNaN(n)
}

const isInteger = (n) => Number.isInteger(n)

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

const Display = ({ digit, fluid, customClass }) => {
  const decodeDecimal = (e) => {
    return segments.map((e, key) => (
      <Segment key={key} code={e} isOn={truthTabel[digit][key]} />
    ))
  }

  // TODO: handle other data types
  const getSegments = (digit) => {
    console.log('isBinary', digit, isBinary(digit))
    // return decodeDecimal(digit)
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
