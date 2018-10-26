import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app/app'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MaterialStyles from './style/material-ui-style'

import './style/index.scss'

const theme = createMuiTheme(MaterialStyles.pollerTheme)



class Main extends React.Component {
  componentWillUpdate() {
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
            <App />
      </MuiThemeProvider>
      </div>
    )
  }
}


ReactDom.render(<Main/>, document.getElementById('root'))