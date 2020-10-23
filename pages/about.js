import BasePage from '../components/BasePage'

const { BaseLayout } = require('../components/layouts/BaseLayout')

class About extends React.Component {
  render() {
    return (
      <BaseLayout>
      <BasePage>
        <h1>About</h1>
      </BasePage>
      </BaseLayout>
    )
  }
}

export default About
