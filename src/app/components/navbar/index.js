import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter, matchPath } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout

// 引入子菜单组件
const SubMenu = Menu.SubMenu

const NavBar = ({ history, location }) => {
  const menuItems = useSelector(state => state.app.menuItems)
  const [menus, setMenus] = useState([])
  const [selectedKey, setSelectedKey] = useState('')
  const [openKey, setOpenKey] = useState('')

  useEffect(() => {
    const generateMenus = (nodes, parentKey) => {
      return (
        Array.isArray(nodes) &&
        nodes.map(item => {
          if (item.link && isActive(item.link, history)) {
            setSelectedKey(item.key)
            setOpenKey(parentKey)
          }
          const menu = generateMenus(item.items, item.key)
          if (menu.length > 0) {
            return (
              <SubMenu
                key={item.key}
                title={
                  <span>
                    <Icon type={item.icon} />
                    <span className='nav-text'>{item.name}</span>
                  </span>
                }
              >
                {menu}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item key={item.key}>
                {item.link ? (
                  <Link to={item.link}>
                    {item.icon && <Icon type={item.icon} />}
                    {item.name}
                  </Link>
                ) : (
                  <span>
                    {item.icon && <Icon type={item.icon} />}
                    {item.name}
                  </span>
                )}
              </Menu.Item>
            )
          }
        })
      )
    }
    setMenus(generateMenus(menuItems))
  }, [history, location, menuItems])

  const isActive = (path, history) => {
    return matchPath(path, {
      path: history.location.pathname,
      exact: true,
      strict: false,
    })
  }

  return (
    <Layout>
      <Sider width={256} style={{ minHeight: '100vh' }}>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={[selectedKey]}
          openKeys={[openKey]}
          onOpenChange={res => setOpenKey(res[res.length - 1])}
          onClick={obj => setSelectedKey(obj.key)}
        >
          {menus}
        </Menu>
      </Sider>
    </Layout>
  )
}

NavBar.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(NavBar)
