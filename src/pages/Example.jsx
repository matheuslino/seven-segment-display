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
        <div className={styles.col}>
          {/* Example with a binary input */}
          <Wrapper>
            <Display digit={0b0} />
            <code>{'<Display digit={0b0} />'}</code>
          </Wrapper>

          {/* Example with a hexadecimal input */}
          <Wrapper>
            <Display digit={0x1} />
            <code>{'<Display digit={0b0} />'}</code>
          </Wrapper>

          {/* Example with an octal input */}
          <Wrapper>
            <Display digit={0o2} />
            <code>{'<Display digit={0b0} />'}</code>
          </Wrapper>

          {/* Example with a decimal input */}
          {[3, 4, 5, 6, 7, 8, 9].map((el, key) => (
            <Wrapper>
              <Display key={key} digit={el} />
              <code>{`<Display digit={${el}} />`}</code>
            </Wrapper>
          ))}
        </div>
        <div className={styles.col}>
          {[0xa, 0xb, 0xc, 0xd, 0xe, 0xf].map((el, key) => (
            <Wrapper>
              <Display key={key} digit={el} />
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
