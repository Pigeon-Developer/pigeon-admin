import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styles from './index.module.scss'
import Sidebar from '../sidebar'
import Bread from '../bread'

import { Layout } from 'antd'
const { Header, Footer, Content } = Layout

const MainLayout = props => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Layout>
          <Header className={styles.header}>
            <Bread />
            <div className={styles.tools}>
              <img
                className={styles.avatar}
                src='http://online.njtech.edu.cn/resource/2020/1/30/c13cc18e-40b3-44af-b049-d32642169438.jpeg'
                alt=''
              />
              <span>admin</span>
            </div>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Pigeon Admin ©2020 Created by Pigeon Developer
          </Footer>
        </Layout>
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(MainLayout)
