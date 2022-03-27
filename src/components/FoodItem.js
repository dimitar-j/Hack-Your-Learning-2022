import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

var stylingObject = {
    card: {
        minWidth: "200px",
        height: "200px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 30px 0px;",
        position: "relative",
        fontWeight: "600",
        textAlign: "left",
        borderRadius: "15px",
    },
    imageContainer: {

    }
}

export default class Listing extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Link to={`/recipe?name=${this.props.recipe.RecipeName}&mealType=${this.props.mealType}`}>
                <Card style={stylingObject.card}>
                    <CardContent>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Avatar src={this.props.recipe.thumbnail} sx={{ width: 100, height: 100 }}/>
                        </div>
                        <div style={{position: "absolute", bottom: "30px", borderTop: "2px solid #613DC1", width: "85%", paddingTop: "10px"}}>
                            {this.props.recipe.RecipeName}
                        </div>
                    </CardContent>
                </Card>
            </Link>
        )
    }
}