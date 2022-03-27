import React from "react"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function FoodCard() {
    return(
        <>
            <Card sx={{ maxWidth: 345 }}>
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
                <Typography variant="body2" color="text.secondary">
                    Rib eye is not a cheap cut of steak—we’ll just get that one out of the way right at the start. 
                    This grilled rib eye recipe is luxurious, it’s a splurge any which way you slice it. 
                    And when you shell out your hard-earned money for a fancy cut of steak, you want to be sure that you 
                    absolutely cook it perfectly and serve it just-so. 
                </Typography>
            </CardContent>
            </Card>
        </>
    )
}

export default FoodCard