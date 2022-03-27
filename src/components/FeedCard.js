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

function FoodCard() {
    return(
        <>
            <Card sx={{ maxWidth: 345, boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
            <CardHeader style={{ textAlign: 'left' }}
                avatar={
                <Avatar sx={{ bgcolor: '#613DC1' }} aria-label="recipe">
                    BN
                </Avatar>
                }
                title="Rib Eye Steak"
                subheader="March 26, 2022"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://firebasestorage.googleapis.com/v0/b/hack-your-learning-2022.appspot.com/o/RecipeName%2FDinner%2Fcarneasada.jpeg?alt=media&token=f95e01bf-afdb-423a-bfce-031307f9b320"
                alt="Rib Eye Steak"
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
                    Brian Nguyen made Rib Eye Steaks! Yummy!
                </Typography>
            </CardContent>
            </Card>
        </>
    )
}

export default FoodCard