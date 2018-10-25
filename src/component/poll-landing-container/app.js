import React from 'react'
import { connect } from 'react-redux'

import {  compose, branch, renderComponent } from 'recompose'
import classnames from 'classnames';


import randomColor from 'randomcolor'; // import the script


import CardCase from '../poll-card-design/card-case'


import Chart from '../charts/d3-bar/chart'
import ResponsiveChart from '../charts/d3-bar/responsive-chart'

import SimpleMap from '../google-maps/index'



//These will be used, to store id of the user in the database...



//Style
import { withStyles } from '@material-ui/core/styles';

  
const ResponsiveBarChart = ResponsiveChart(Chart)

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
     
        this.renderGraphData = this.renderGraphData.bind(this)
    }


  renderGraphData() {
        return [
          {x:'A', y:20},
          {x:'B', y:30},
          {x:'C', y:40},
      ]
  }

  renderTotalVotes(){

    console.log('GRAPH DATA', this.renderGraphData())
      return (
        <ResponsiveBarChart 
          data={this.renderGraphData()}/>
        
          
      )
  }


    render(){
        // console.log("MC DATA", this.state, this.state.pollData)
        return(
            <div>
                <CardCase 
                {...this.props}
                style={{
                    height:'100%'
                }}>
                <SimpleMap
                center={{
                    lat: 59.95,
                    lng: 30.33
                }}
                zoom={1}
                />
                </CardCase>
            </div>
        )
    }
}

  
  
  
  export default compose(
    withStyles(styles, {withTheme:true}),
  )(App);