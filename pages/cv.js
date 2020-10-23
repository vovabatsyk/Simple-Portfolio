const { BaseLayout } = require('../components/layouts/BaseLayout')
import BasePage from '../components/BasePage'

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>CV</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Cv
