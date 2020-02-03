import React, { useEffect } from 'react'
import { Layout } from 'src/app/components'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import request from 'src/app/util/request'
import allActions from 'src/actions'
import routes from './routes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // 请求用户信息
    const fetchUserInfo = async () => {
      const res = await request.get('/user/detail')
      dispatch(allActions.app.setLogin(res))
    }
    fetchUserInfo()
  }, [dispatch])

  return (
    <Layout>
      <Switch>
        {routes.map((item, index) => (
          <Route
            exact={item.exact || false}
            key={index}
            path={item.path}
            component={item.component}
          />
        ))}
        <Redirect from='/user' to='/user/list' />
        <Redirect to='/' />
      </Switch>
    </Layout>
  )
}

export default App
