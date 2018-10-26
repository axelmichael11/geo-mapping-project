import React from 'react'
import { connect } from 'react-redux'

import {  compose, branch, renderComponent } from 'recompose'
import classnames from 'classnames';


import randomColor from 'randomcolor'; // import the script


import CardCase from '../poll-card-design/card-case'


// import SimpleMap from '../google-maps/index'
import GoogleMap from '../google-maps/google-maps-react'
import GoogleMaps from '../google-maps/from-scratch'

// import SimpleMap from '../google-maps/index'

//These will be used, to store id of the user in the database...



//Style
import { withStyles } from '@material-ui/core/styles';

  
const styles = theme =>({
  container: theme.overrides.MuiPaper.root,
  cardHeader:theme.overrides.PollCard.cardHeader,
  // typography: theme.typography.text,
  expand: {
    color:theme.palette.secondary.main,
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actions: {
    display: 'flex',
  },
})

class App extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }

    render(){
        // console.log("MC DATA", this.state, this.state.pollData)
        const style={
          width: '97%',
          height: '80%',
          position: 'absolute',
          display: 'block',
          margin: '7px',

      }
        
        return(
            <div
            // style={style}
            >
                <CardCase 
                {...this.props}
                title={'Geo-Mapping-Project'}
                style={{
                  height:'100%'
                }}>

                {/* <GoogleMap
                  apiKey={__GOOGLE_MAPS_JS_API__}
                  language={'English'}
                  center={{
                    lat: 59.95,
                    lng: 30.33
                  }}
                  zoom={3}
                  initMap={this.initMap}
                /> */}
                <GoogleMaps/>

                </CardCase>
            </div>
        )
    }
}

  
  
  
  export default compose(
    withStyles(styles, {withTheme:true}),
  )(App);