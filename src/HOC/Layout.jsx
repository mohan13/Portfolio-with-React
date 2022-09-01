import Footer from '../Components/Navigation/Footer/footer'
import Toolbar from '../Components/Navigation/Toolbars/Toolbar'
const Layout = (props) => {
  return (
    <div>
        <Toolbar/>
        <div>{props.children}</div>
        <Footer/>
    </div>
  )
}

export default Layout