import React from "react"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
 
function FeedCard(props) {
 
   return(
       <>
           <Card sx={{ maxWidth: 345, mb: 5}}>
           <CardHeader style={{ textAlign: 'left' }}
               avatar={
               <Avatar sx={{ bgcolor: '#613DC1' }} aria-label="recipe">
                   {props.initials}
               </Avatar>
               }
               title={props.food}
               subheader={props.date}
           />
           <CardMedia
               component="img"
               height="194"
               image={props.image}
           />
           <CardContent>
               <CardActions disableSpacing>
                   <IconButton style={{ textAlign: 'left' }} aria-label="add to favorites">
                       <FavoriteIcon />
                   </IconButton>
                   <IconButton aria-label="share">
                       <ShareIcon />
                   </IconButton>
                   </CardActions>
                   <Typography variant="body4">
                       {props.description}
                   </Typography>
               </CardContent>
           </Card>
       </>
   )
}
 
export default FeedCard