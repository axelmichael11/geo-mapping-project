import React from 'react';
import PropTypes from 'prop-types';
import Date from 'datejs'

import { Link, withRouter } from 'react-router-dom'
import {  compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles';


import {Paper,
classnames,
Card,
CardHeader,
CardMedia,
CardContent,
CardActions,
Collapse,
Avatar,
IconButton,
Typography,
red,
AppBar,
Toolbar,
Button } from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Delete from '@material-ui/icons/Delete';

const styles = theme =>({
    container: theme.overrides.MuiPaper.root,
    cardHeader:theme.overrides.PollCard.cardHeader,
    deleteButton: theme.overrides.MuiIcon,
    titleFont:{
        title: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        }
    },
    cardContent:{
        root:{
          wordWrap: 'break-word'
        }
      }
})


const CardCase = ({...props}) =>{
    //classes, theme, props.pollActions, poll,
    return (
    <div className={props.classes.container}>
    <Paper square elevation={2} className={props.classes.container}>
                <Card style={{padding:7}}>
                <CardHeader
                    // action={props.pollActions}
                    className={props.classes.cardHeader}
                    // title={props.poll.author_username}
                    classes={{
                        title: props.classes.cardHeader
                    }}
                />
                {props.children}
                <CardContent>
                <Typography variant="subheading" component="p">
                        Suhh dude
                    </Typography>
                <Typography variant="subheading" component="p">
                        Poll Expiration: NEVER
                    </Typography>
                </CardContent>
                </Card>
        </Paper>
    </div>
    )
}


export default compose(
    withStyles(styles, {withTheme:true}),
)(CardCase);