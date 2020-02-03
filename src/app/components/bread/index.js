import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Breadcrumb, Icon } from 'antd'

const Bread = ({ location }) => {
  const pathnames = location.pathname.split('/').filter(x => x)
  const { breadcrumbNameMap } = useSelector(state => state.app)

  return (
    <Breadcrumb>
      <Breadcrumb.Item href='#/'>
        <Icon type='home' />
        <span>Dashboard</span>
      </Breadcrumb.Item>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`

        return last ? (
          <Breadcrumb.Item key={index}>{breadcrumbNameMap[to]}</Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={index} href={`#${to}`}>
            <span>{breadcrumbNameMap[to]}</span>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

Bread.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(Bread)
