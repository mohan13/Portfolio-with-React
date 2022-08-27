import Toolbar from '../Components/Navigation/Toolbars/Toolbar'
const Layout = (props) => {
  return (
    <div>
        <Toolbar/>
        <div>{props.children}</div>
    </div>
  )
}

export default Layout