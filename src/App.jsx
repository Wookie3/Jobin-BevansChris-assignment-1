import './App.css'
import Services from './Services.jsx'
// import { ReactComponent as BurgerIcon } from './icons/burger-menu.svg';

const App = () => {
  
  return (
    <main>
      <NavBar>
        <NavItem/>
      </NavBar>
      <Services/>
    </main>
  )
}

const NavBar = () => {
  return (
    <nav>
      <div id="title">
        <p>Yard Keeper</p>
        <div id="subtitle">
            <p1>Keep</p1><p2> your yard, living better!</p2>
        </div>
      </div>
        <NavDropdown/>
      </nav>
  )
}

const NavDropdown = () => {
  return (
    <ul class="dropdown">
      {/* <span className="navbar-burger">
      <BurgerIcon/>
      </span> */}
      <img className="navbar-burger" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/menu.png">
      </img>
        <div class="dropdown-content">
          <NavItem link="#" text="Login"/>
          <NavItem link="#" text="Help"/>
        </div>
    </ul>
  )
}

const NavItem = ({text, link}) => {
  // const [open, setOpen] = useState(false);
//  onClick={() => setOpen(!open)}
  return (
    <li className= "nav-item">
    <a href={link} className="nav-button">{text}</a>
    </li>
  )
}


export default App;