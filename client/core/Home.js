import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
    overflow:'hidden'
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    } 
  },
btnprimary:{
  width:' 100px',
  borderRadius: '20px',
  padding: '10px',
  fontSize: 'bold',
  color: 'white',
  marginTop:'20px',
  marginLeft: '10px',
    backgroundColor: 'blue'
}
,btnsuccess:{
  width:' 100px',
  borderRadius: '20px',
  padding: '10px',
  fontSize: 'bold',
  color: 'white',
  marginTop:'20px',
  marginLeft: '10px',
    backgroundColor: 'green'
},

}))

export default function Home({history}){
  const classes = useStyles()
  const [defaultPage, setDefaultPage] = useState(false)

  useEffect(()=> {
    setDefaultPage(auth.isAuthenticated())
    const unlisten = history.listen (() => {
      setDefaultPage(auth.isAuthenticated())
    })
    return () => {
      unlisten()
    }
  }, [])

    return (
      <div className={classes.root}>
        { !defaultPage &&
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <Typography variant="h6" className={classes.title}>
                 SOCIAL MEDIA WEB BASED APPLICATION
                </Typography>
                {/* <CardMedia className={classes.media} image={unicornbikeImg} title="Unicorn Bicycle"/> */}
                {/* <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">Photo by <a href="https://unsplash.com/@boudewijn_huysmans" target="_blank" rel="noopener noreferrer">Boudewijn Huysmans</a> on Unsplash</Typography> */}
                <CardContent>
                  <Typography type="body1" component="p">
                  This project aims to create a dynamic social media platform connecting users and fostering communities.
                   We'll focus on user experience, thorough research, and strategic planning to build a seamless website and application. With user feedback guiding us, we'll ensure continuous improvements, making the platform engaging and user-friendly.
                  </Typography>
                  <Link to="/signup"><button className={classes.btnprimary}>Signup</button></Link>
                  <Link to="/signin"><button className={classes.btnsuccess}>Login</button></Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        }
        {defaultPage &&
          <Grid container spacing={8}>
            <Grid item xs={8} sm={7}>
              <Newsfeed/>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FindPeople/>
            </Grid>
          </Grid>
        }
      </div>
    )
}
