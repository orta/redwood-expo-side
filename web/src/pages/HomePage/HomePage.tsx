import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1>Home</h1>
      <p>
        Go to the app: <Link to={routes.app({ appRoute: '/' })}>here</Link>
      </p>
    </>
  )
}

export default HomePage
