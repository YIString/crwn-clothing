import { Outlet } from 'react-router-dom'

import Directory from '../../component/directory/directory'

const Home = () => {

  return (
    <div>
      <Directory  />
      <Outlet />
    </div>
  )
   
}

export default Home
