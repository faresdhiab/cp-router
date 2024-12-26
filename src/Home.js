import React from 'react'
import App from './App'
import {Route, Routes} from'react-router-dom';
import NavigationBar from './Component/NavigationBar';
import MovieDescription from './Component/MovieDescription';
import Error from './Component/Error';
const Home = () => {
  return (
    <div>
        <NavigationBar/>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/movie/:id' element={<MovieDescription/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
        
    </div>
  )
}

export default Home