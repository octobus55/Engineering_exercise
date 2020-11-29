import React from "react";
import differenceInWeeks from "date-fns/differenceInWeeks";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

interface ICourseCardProps {
  title: string;
  start_date: string;
  end_date: string;
  image: string;
  level: string;
}

const CourseCard: React.FC<ICourseCardProps> = ({
  title,
  start_date,
  end_date,
  image,
  level,
}) => {
  const classes = useStyles();
  const handleWeekText = () => {
    const week = differenceInWeeks(new Date(end_date), new Date(start_date));
    if (week) {
      return `for ${week} week${week ? "s" : ""}`;
    }
    return "";
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${title} class image`}
          height="140"
          src={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A {level} class that will start in {start_date} and end in{" "}
            {end_date} {handleWeekText()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography gutterBottom variant="h5" component="h2">
          Price: $0.00
        </Typography>
        <Button size="small" color="primary">
          Book
        </Button>
      </CardActions>
    </Card>
  );
};
export default CourseCard;
