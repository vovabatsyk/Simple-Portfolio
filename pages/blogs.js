const { BaseLayout } = require('../components/layouts/BaseLayout')
import BasePage from '../components/BasePage'

class Blogs extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>Blogs</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Blogs
