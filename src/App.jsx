import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
import Courses from './components/Courses';
import CourseData from './components/CourseData';


function App() {
  return (
  <Router>

    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/videos' element={<Videos />} />
      <Route path='/course/:id/:index/:videoid' element={<Videos />} />
      <Route path='/course/:id/:index' element={<Videos />} />
      <Route path='/upload' element={<Upload />} />
      <Route path='/login' element={<Login />} />
      <Route path='/course' element={<Courses />} />
      <Route path='/course/:id' element={<CourseData />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>

    <Footer />
  </Router>
  );
}

export default App;
