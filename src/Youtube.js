import React, {useState,useRef,useEffect} from 'react'
import {List,ListItem,ListItemIcon,ListItemText,Divider,Drawer,Backdrop, Avatar, Fab,AppBar,Toolbar,Typography,Input, Button, Grid, DialogTitle, IconButton,Collapse, ListItemAvatar, Chip, CardHeader, CardActions} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
import {Apps, Home, Label} from '@material-ui/icons'
import {Person} from '@material-ui/icons'
import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {YouTube, Apartment,FormatColorReset,PersonOutline,AccountBox,FolderOpen,Settings,FormatIndentIncrease,Forum,AddCircleOutline, PowerSettingsNew,ArrowBackIos,FlipToFront,FormatColorText,FormatPaint,ViewComfy,KeyboardArrowUp,KeyboardArrowDown} from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Modal from '@material-ui/core/Modal';
import {ShareIcon, Attachment, Call, CallEnd, CallMade, Sms,FormatListBulleted, Telegram} from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
    fab: {
      position: 'fixed',
      top: theme.spacing(2),
      right: theme.spacing(2),
    },
    form: {
        position: 'fixed',
        bottom: theme.spacing(40),
        right: theme.spacing(30),
      },
  }));

function Youtube() {
    const classes = useStyles();
    const[open,setOpen] =useState(false)
    const[expand,setExpand] =useState(false)
    const xrr = ["React Series","Spring series","Classes for web development","Classes for Python","Classes by telusko", "Classes by Smart Programming","Classes by Sourabh SUklah","JAVAScript Full Tutorial"]
    const arr = [
        {
         name:"Home",
         icon:<Apartment />
        },
        {
            name:"Trending",
            icon:<FormatColorReset />
           },
           {
            name:"Inbox",
            icon:<FolderOpen />
           }
    ]
   
    const brr = [
        {
         name:"Librery",
         icon:<FlipToFront />
        },
        {
            name:"History",
            icon:<FormatColorText />
           },
           {
            name:"Watch Later",
            icon:<FormatPaint />
           },
           {
            name:"JAVA CLasses",
            icon:<FormatIndentIncrease />
           }
    ]
    const[cu,setCu]=useState(false)
    const tolly = [
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image11.jpg",
            avatar:"TW",
            icon:<FormatListBulleted/>,
            title:"Borbad",
            sub:"12/04/17"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image12.jpg",
            avatar:"TW",
            icon:<FormatListBulleted/>,
            title:"Fighter",
            sub:"12/12/17"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image13.jpg",
            avatar:"TW",
            icon:<FormatListBulleted/>,
            title:"Ami Subhas Bolchi",
            sub:"12/04/19"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image14.jpg",
            avatar:"TW",
            icon:<FormatListBulleted/>,
            title:"Wanted",
            sub:"21/04/17"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image15.jpg",
            avatar:"TW",
            icon:<FormatListBulleted/>,
            title:"Bodnam",
            sub:"21/06/97"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image16.jpg",
            avatar:"TW",
            icon:<FormatListBulleted/>,
            title:"Ogo Bodu Sundori",
            sub:"04/09/77"
        }
    ]
    const bolly = [
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image11.jpg",
            avatar:"BW",
            icon:<FormatListBulleted/>,
            title:"Bahubali",
            sub:"12/04/17"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image12.jpg",
            avatar:"BW",
            icon:<FormatListBulleted/>,
            title:"Sholay",
            sub:"12/12/17"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image13.jpg",
            avatar:"BW",
            icon:<FormatListBulleted/>,
            title:"Deewar",
            sub:"12/04/19"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image14.jpg",
            avatar:"BW",
            icon:<FormatListBulleted/>,
            title:"Wanted",
            sub:"21/04/17"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image15.jpg",
            avatar:"BW",
            icon:<FormatListBulleted/>,
            title:"Asur",
            sub:"21/06/97"
        }
    ]
    const holly = [
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image11.jpg",
            avatar:"HW",
            icon:<FormatListBulleted/>,
            title:"Titanic",
            sub:"12/04/17"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image12.jpg",
            avatar:"HW",
            icon:<FormatListBulleted/>,
            title:"The Expendables",
            sub:"12/12/17"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image13.jpg",
            avatar:"HW",
            icon:<FormatListBulleted/>,
            title:"End Game",
            sub:"12/04/19"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image14.jpg",
            avatar:"HW",
            icon:<FormatListBulleted/>,
            title:"2012",
            sub:"21/04/17"
        },
        {
            content:"The flim is contains a hero a heroine and and a lovely story pease watch it you will love it.So guys Enjoy the movie",
            src:"./image15.jpg",
            avatar:"HW",
            icon:<FormatListBulleted/>,
            title:"Harry Potter And the Socers Stone",
            sub:"21/06/97"
        }
    ]
    const[out,setOut]=useState(false)
    const[tw,setTw] =useState(true)
    const[bw,setBw] =useState(false)
    const[hw,setHw] =useState(false)
    const setw = () => {
        setTw(true)
        setBw(false)
        setHw(false)
    }
    const sebw = () => {
        setTw(false)
        setBw(true)
        setHw(false)
    }
    const sehw = () => {
        setTw(false)
        setBw(false)
        setHw(true)
    }
    const box = () => {
        setComment([...comment,obj])
        setOut(!out)
        setMm(true)
    }
    const[num,setNum]=useState(10)
    const[bar,setBar] = useState(false)
    const[comment,setComment] = useState([
        {
            name:"Avikbishal Sarkar",
            email:"avikbishalsarkar@gmail.com",
            com:"Nice dude keep it up"
        },
        {
            name:"Avikbishal Sarkar",
            email:"avikbishalsarkar@gmail.com",
            com:"Nice dude keep it up"
        },
        {
            name:"Avikbishal Sarkar",
            email:"avikbishalsarkar@gmail.com",
            com:"Nice dude keep it up"
        },
        {
            name:"Avikbishal Sarkar",
            email:"avikbishalsarkar@gmail.com",
            com:"Nice dude keep it up"
        },
        {
            name:"Avikbishal Sarkar",
            email:"avikbishalsarkar@gmail.com",
            com:"Nice dude keep it up"
        },
        {
            name:"Avikbishal Sarkar",
            email:"avikbishalsarkar@gmail.com",
            com:"Nice dude keep it up"
        }      
    ])
    const[obj,setObj]=useState({name:"",email:"",com:""})
    const[mm,setMm]=useState(false)
    return(
         <div>
             <AppBar position="static">
                <Toolbar>
                    <Grid container>
                    <Grid item container sm={7}>
                    <Grid item sm={1}>
                    <IconButton onClick={()=>setOpen(true)}>
                        <ViewComfy/>
                    </IconButton>
                    </Grid>
                    <Grid item sm={4}></Grid>
                    <Grid item container sm={2}>
                    <Grid item sm={10}><Typography>My Youtube </Typography></Grid>
                    <Grid item sm={2}> <YouTube /> </Grid>
                    
                    </Grid>
                    </Grid>
                    <Grid item sm={4}></Grid>
                    <Grid item sm={1}>
                   <IconButton onClick={()=>setBar(true)}>
                       <ArrowBackIos></ArrowBackIos>
                   </IconButton>
                   <Menu
                     keepMounted
                     open={bar}
                     onClose={()=>setBar(false)}
                     className={classes.fab}
                   >
                   <MenuItem onClick={()=>setBar(false)}><PersonOutline/>Profile</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}><AccountBox/>My account</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}><Settings/>Settings</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}><Forum/>Channels</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}><AddCircleOutline/>Add</MenuItem>
                   <MenuItem onClick={()=>setBar(false)}><PowerSettingsNew/>Logout</MenuItem>
                   </Menu>
                   </Grid>
                   </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
            open={open}
            variant="temporary"
            anchor="left"
            onClose={()=>setOpen(false)}
            >
             <List>
                     {arr.map((item,index)=>(
                         <ListItem>
                         <ListItemIcon>{item.icon}</ListItemIcon>
                         <ListItemText>{item.name}</ListItemText>
                         </ListItem>
                     ))}
             </List>
             <Divider />
             <List>
                     {brr.map((item,index)=>(
                         <ListItem>
                         <ListItemIcon>{item.icon}</ListItemIcon>
                         <ListItemText>{item.name}</ListItemText>
                         </ListItem>
                     ))}
                     <ListItem>
                     <ListItemIcon><IconButton onClick={()=>setExpand(!expand)}>{expand?<KeyboardArrowUp/>:<KeyboardArrowDown/>}</IconButton></ListItemIcon>
                         <ListItemText>Show More</ListItemText>
                    </ListItem>
                    <ListItem>
                         <Collapse in={expand} timeout="auto" unmountOnExit>
                         
                         {xrr.map((item,index)=>(
                         <ListItem>
                         <ListItemIcon><FormatIndentIncrease></FormatIndentIncrease></ListItemIcon>
                         <ListItemText>{item}</ListItemText>
                         </ListItem>
                     ))}
                         </Collapse>
                         </ListItem>
             </List>
             <Divider /> 
             <List>
                 <ListItem>
                     <ListItemText>Subscription</ListItemText>
                 </ListItem>
                 <ListItem>
                     <ListItemAvatar >
                         <Avatar >S</Avatar>
                     </ListItemAvatar>
                     <ListItemText>Sourabh Suklah</ListItemText>
                 </ListItem>
                 <ListItem>
                     <ListItemAvatar >
                         <Avatar>J</Avatar>
                     </ListItemAvatar>
                     <ListItemText>Jeennys Lecture</ListItemText>
                 </ListItem>
                 <ListItem>
                     <ListItemAvatar >
                         <Avatar>SP</Avatar>
                     </ListItemAvatar>
                     <ListItemText>Smart Programming</ListItemText>
                 </ListItem>
                 <ListItem>
                     <ListItemAvatar >
                         <Avatar>T</Avatar>
                     </ListItemAvatar>
                     <ListItemText>Telusko Learning</ListItemText>
                 </ListItem>
            </List> 
            <Divider /> 
             </Drawer>   
             <div>
                 {/*<Button onClick={setw}><Chip button label="TollyWood Flims (English Flims)" /></Button>
                 <Button onClick={sebw}><Chip button label="BollyWood Flims (Hindi Flims)" /></Button>
                         <Button onClick={sehw}><Chip button label="HollyWood Flims (Bengali Flims)" /></Button>*/}
                 
                 <Chip button onClick={setw} label="TollyWood Flims (English Flims)" />
                 
                 <Chip onClick={sebw} button label="BollyWood Flims (Hindi Flims)" />
                
                 <Chip button onClick={sehw} label="HollyWood Flims (Bengali Flims)" />
                 
            </div>
            <Divider /> 
            {tw &&
            <Grid container > 
            <Grid item sm={2}></Grid> 
            <Grid item container spacing = {4}  sm={8}>
            <Grid item sm={4}>
            <Card >
      <CardHeader
        avatar={
        
            <Skeleton animation="wave" variant="circle" width={40} height={40}  />
        }
        action={null
        }
        title={
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
        subheader={ <Skeleton animation="wave" height={10} width="40%" />}
      />
      {
        <Skeleton animation="wave" variant="rect"  />
     }

      <CardContent>
        {
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>}
      </CardContent>
    </Card>
    </Grid> 
    <Grid item sm={4}>
            <Card >
      <CardHeader
        avatar={
        
            <Skeleton animation="wave" variant="circle" width={40} height={40}  />
        }
        action={null
        }
        title={
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
        subheader={ <Skeleton animation="wave" height={10} width="40%" />}
      />
      {
        <Skeleton animation="wave" variant="rect"  />
     }

      <CardContent>
        {
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>}
      </CardContent>
    </Card>
    </Grid> 
    {tolly.map((tol)=>(<Grid item sm={4}>
        <Card>
            <CardHeader
             avatar ={
                 <Avatar>{tol.avatar}</Avatar>
             }
             action={
                <IconButton aria-label="settings">
                  {tol.icon}
                </IconButton>
              }
              title={tol.title}
              subheader={tol.sub}
            ></CardHeader>
            <CardMedia image={tol.src}></CardMedia>
            <CardContent>
                {tol.content}
            </CardContent>
            <CardActions>
                <Button color="inherit">Watch</Button>
            </CardActions>
        </Card>
    </Grid>))}
    <Grid item sm={4}>
            <Card >
      <CardHeader
        avatar={
        
            <Skeleton animation="wave" variant="circle" width={40} height={40}  />
        }
        action={null
        }
        title={
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
        subheader={ <Skeleton animation="wave" height={10} width="40%" />}
      />
      {
        <Skeleton animation="wave" variant="rect"  />
     }

      <CardContent>
        {
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>}
      </CardContent>
    </Card>
    </Grid> 
    </Grid>
    <Grid item sm={2}></Grid>
    </Grid> 
  } 
              {bw &&
            <Grid container > 
            <Grid item sm={2}></Grid> 
            <Grid item container spacing = {4}  sm={8}>
            <Grid item sm={4}>
            <Card >
      <CardHeader
        avatar={
        
            <Skeleton animation="wave" variant="circle" width={40} height={40}  />
        }
        action={null
        }
        title={
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
        subheader={ <Skeleton animation="wave" height={10} width="40%" />}
      />
      {
        <Skeleton animation="wave" variant="rect"  />
     }

      <CardContent>
        {
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>}
      </CardContent>
    </Card>
    </Grid> 
    {bolly.map((tol)=>(<Grid item sm={4}>
        <Card>
            <CardHeader
             avatar ={
                 <Avatar>{tol.avatar}</Avatar>
             }
             action={
                <IconButton aria-label="settings">
                  {tol.icon}
                </IconButton>
              }
              title={tol.title}
              subheader={tol.sub}
            ></CardHeader>
            <CardMedia image={tol.src}></CardMedia>
            <CardContent>
                {tol.content}
            </CardContent>
            <CardActions>
                <Button color="inherit">Watch</Button>
            </CardActions>
        </Card>
    </Grid>))}
    <Grid item sm={4}>
            <Card >
      <CardHeader
        avatar={
        
            <Skeleton animation="wave" variant="circle" width={40} height={40}  />
        }
        action={null
        }
        title={
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
        subheader={ <Skeleton animation="wave" height={10} width="40%" />}
      />
      {
        <Skeleton animation="wave" variant="rect"  />
     }

      <CardContent>
        {
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>}
      </CardContent>
    </Card>
    </Grid> 
    </Grid>
    <Grid item sm={2}></Grid>
    </Grid> 
  } 
  {hw &&
            <Grid container > 
            <Grid item sm={2}></Grid> 
            <Grid item container spacing = {4}  sm={8}>
            <Grid item sm={4}>
            <Card >
      <CardHeader
        avatar={
        
            <Skeleton animation="wave" variant="circle" width={40} height={40}  />
        }
        action={null
        }
        title={
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
        subheader={ <Skeleton animation="wave" height={10} width="40%" />}
      />
      {
        <Skeleton animation="wave" variant="rect"  />
     }

      <CardContent>
        {
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>}
      </CardContent>
    </Card>
    </Grid> 
    {holly.map((tol)=>(<Grid item sm={4}>
        <Card>
            <CardHeader
             avatar ={
                 <Avatar>{tol.avatar}</Avatar>
             }
             action={
                <IconButton aria-label="settings">
                  {tol.icon}
                </IconButton>
              }
              title={tol.title}
              subheader={tol.sub}
            ></CardHeader>
            <CardMedia image={tol.src}></CardMedia>
            <CardContent>
                {tol.content}
            </CardContent>
            <CardActions>
                <Button color="inherit">Watch</Button>
            </CardActions>
        </Card>
    </Grid>))}
    </Grid>
    <Grid item sm={2}></Grid>
    </Grid> 
  } 
  <br/>
   <br/>
   <Divider></Divider>
   <br/>
   <div>
   <Badge color="secondary" badgeContent={comment.length} max={7}>
        <Button onClick={()=>setCu(!cu)}>Comment</Button>
      </Badge>
      <div></div>
      <Button color="primary" variant="outlined" onClick={()=>setOut(!out)}>Add new Comment</Button>
      <Dialog open={out} onClose={()=>setOut(!out)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your comment.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            fullWidth
            onChange={e=>setObj({ ...obj, name: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={e=>setObj({ ...obj, email: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            label="Your Comment"
            type="text"
            fullWidth
            onChange={e=>setObj({ ...obj, com: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={box} color="primary">
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    <Collapse in={cu} timeout="auto" unmountOnExit>
    <List>
        {comment.map((co)=>(
            <ListItem>
            <ListItemText><h5>{co.name}</h5>
            <a href="#">{co.email}</a>
            <p>{co.com}</p>
            <Divider></Divider></ListItemText>
            </ListItem>
        ))}
        </List>
    </Collapse>
   </div>
   <br/>
   <Divider></Divider>
   <br/>
   <br/>
   <br/>
   <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={mm}
        onClose={()=>setMm(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={mm}>
            
          <div >
            <h2 id="spring-modal-title">Thanks dude</h2>
            <p id="spring-modal-description">We heartily appreciate your comment.</p>
          </div>
        </Fade>
      </Modal>
        </div>
    )
}
export default Youtube