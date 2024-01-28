import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="main-container">
      <Header />
      <h1 className="heading">Home Route</h1>
      <LogoutButton />
    </div>
  )
}
export default Home
