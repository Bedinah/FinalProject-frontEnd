import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from "@mui/material/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[500],
  },
}));
const VideoCard1 = ({ Lesson }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid>
      <Card className={classes.root} style={{ marginTop: "2rem" }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              AN
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={Lesson.title11}
          subheader={Lesson.subheader1}
        />

        <CardMedia
          component="iframe"
          width="260"
          height="300"
          image={Lesson.video1}
          alt={Lesson.alt1}
          autoPlay
          controls
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {Lesson.description1}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={(Lunch) => {
              console.log(">>>>", Lesson.title21);
              handleExpandClick();
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{Lesson.title21}</Typography>
            <Typography paragraph>{Lesson.explanation1}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
export default VideoCard1;