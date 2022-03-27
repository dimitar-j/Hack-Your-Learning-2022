import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
    container: {
        width: "100%",
        background: "#ffffff",
        margin: "20px",
        height: "100px"
    },
    tagContainer: {
        display: "inline-flex",
        gap: "8px",
        textAlign:"center",
        color:"white",
    },
    tag: {
        background: "#0A891F80",
        borderRadius: "10px",
        padding: "5px 15px",
    }
}

export default class Listing extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                Hello
            </React.Fragment>
        )
    }
}