import Display from '../components/Display'
import styles from './style.module.css'

const Wrapper = (props) => (
  <div className={styles.wrapper}>{props.children}</div>
)

const Example = () => {
  const render = (
    <>
      <nav />
      <header>
        <h1>Seven Segment Display</h1>
        <span>A simple component built for ReactJS Apps</span>
      </header>
      <section className={styles.row}>
        <div className={`${styles.col} ${styles['col-A']}`}>
          {/* Examples with binary, hexadecimal, octal and decimal inputs */}
          {[
            0,
            1,
            2,
            '0b011',
            '0b100',
            '0b101',
            '0x6',
            '0x7',
            '0x8',
            '0o11',
            'null',
          ].map((el, key) => (
            <Wrapper key={key}>
              <Display digit={Number(el).toString(16)} />
              <code>{`<Display digit={${el}} />`}</code>
            </Wrapper>
          ))}
        </div>
        <div className={`${styles.col} ${styles['col-B']}`}>
          {[0xa, 0xb, 0xc, 0xd, 0xe, 0xf].map((el, key) => (
            <Wrapper key={key}>
              <Display digit={el} />
              <code>{`<Display digit={0x${el.toString(16)}} />`}</code>
            </Wrapper>
          ))}
        </div>
      </section>
    </>
  )

  return render
}

export default Example
