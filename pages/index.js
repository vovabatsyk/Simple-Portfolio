import { BaseLayout } from '../components/layouts/BaseLayout'
import { Container, Row, Col } from 'reactstrap'
import Typed from 'react-typed'

class Home extends React.Component {
  render() {
    return (
      <BaseLayout className='cover'>
        <div className='main-section'>
          <div className='background-image'>
            <img src='/images/background-index.png' />
          </div>

          <Container>
            <Row>
              <Col md='6'>
                <div className='hero-section'>
                  <div className={`flipper`}>
                    <div className='back'>
                      <div className='hero-section-content'>
                        <h2>  <Typed
                      strings={['Have a look at my portfolio.']}
                      typeSpeed={70}
                    /> </h2>
                    {/* Full Stack Web Developer */}
                        {/* <div className='hero-section-content-intro'>
                          Have a look at my portfolio.
                        </div> */}
                      </div>
                      <img className='image' src='/images/personal.jpg' />
                      <div className='shadow-custom'>
                        <div className='shadow-inner'> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md='6' className='hero-welcome-wrapper'>
                <div className='hero-welcome-text'>
                  <h1>
                    Welcome to the portfolio website of Volodymyr Batsyk. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>
                </div>
                <div className='hero-welcome-bio'>
                  <h1>
                    <Typed
                      loop
                      strings={['JavaScript', 'Node.JS', '.NET', 'C++']}
                      typeSpeed={70}
                      backDelay={2000}
                    />
                  </h1>
                  <h2>Let's take a look on my work.</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}

export default Home
