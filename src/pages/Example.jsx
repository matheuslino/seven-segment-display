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
      <section className={`${styles.row} ${styles.section}`}>
        <div className={`${styles.col} ${styles['ft-gap']}`}>
          <div className={styles.row}>
            <div className={`${styles.col} ${styles['container-A']}`}>
              <Wrapper>
                <Display />
                <code>{`<Display />`}</code>
              </Wrapper>
              <Wrapper>
                <Display isDp />
                <code>{`<Display isDp />`}</code>
              </Wrapper>
              <Wrapper>
                <Display is3D />
                <code>{`<Display is3D />`}</code>
              </Wrapper>
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.col} ${styles['container-A']}`}>
              {/* Examples with binary, hexadecimal, octal and decimal inputs */}
              {[1, 2, 3, '0b100', '0b101', '0b110', '0o7', '0o10', '0o11'].map(
                (el, key) => (
                  <Wrapper key={key}>
                    <Display digit={Number(el).toString(16)} />
                    <code>{`<Display digit={${el}} />`}</code>
                  </Wrapper>
                )
              )}
            </div>
          </div>
        </div>

        <div className={`${styles.col} ${styles['container-B']}`}>
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
