import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

export default function Navbar() {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">MSS</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='/'>
                <a class="nav-link" aria-current="page">Home</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/avbl-mentors'>
                <a class="nav-link">Available Mentors</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/my-mentors'>
                <a class="nav-link">My Mentors</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/vouch'>
                <a class="nav-link" href="vouch">Vouch</a>
                </Link>
              </li>
            </ul>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/avbl-mentors' element={<AvblMentors/>}></Route>
                <Route exact path='/my-mentors' element={<MyMentors/>}></Route>
                <Route exact path='/vouch' element={<Vouch/>}></Route>
            </Routes>
          </div>
        </div>
      </nav>
    );
}