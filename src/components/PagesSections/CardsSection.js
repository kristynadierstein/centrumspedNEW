import React, { useState } from "react";
import PropTypes from "prop-types";
import { CardsContainer } from "./CardsSection.css";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import { theme as localTheme } from "./../../styles";
import { Grid } from "@material-ui/core";
import Title from "./../Title/Title";
import Text from "./../Text/Text";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BackgroundImage from "gatsby-background-image";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    justifyContent: "flex-end",
  },
  item: {
    color: "black",
    padding: "10px",
    margin: "0 auto",
  },
  link: {
    fontFamily: localTheme.fontFamily.primary,
    color: localTheme.colors.primaryblue,
    fontSize: localTheme.fonts.m_small,
    textTransform: "uppercase",
    cursor: "pointer",
    margin: "0",
    marginRight: "30px",
    display: "inline",
    fontWeight: "500",
    border: "1px solid white",
    letterSpacing: "3px",
  },
  // root: {
  //   maxWidth: 345,
  // },
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
}));

const StyledBackground = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: contrast(50%)
  }
`

const CardsSection = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <CardsContainer>
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={12} md={6} justify="center" className={classes.item}>
          <Card justify="center" className={classes.root}>
            <StyledBackground
              fluid={data?.card_1_image?.localFile?.childImageSharp?.fluid}
              className="Cards__BGImage"
            >
              <Title> {data.card_1_title.text}</Title>
            </StyledBackground>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => handleExpandClick(1)}
                aria-expanded={expanded === 1}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded === 1} timeout="auto" unmountOnExit>
              <CardContent>
                <Text>{data.card_1_body.text}</Text>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} className={classes.item}>
          <Card className={classes.root}>
            <StyledBackground
              fluid={data?.card_2_image?.localFile?.childImageSharp?.fluid}
              className="Cards__BGImage"
            >
              <Title> {data.card_2_title.text}</Title>
            </StyledBackground>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => handleExpandClick(2)}
                aria-expanded={expanded === 2}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded === 2} timeout="auto" unmountOnExit>
              <CardContent>
                <Text>{data.card_2_body.text}</Text>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} className={classes.item}>
          <Card className={classes.root}>
            <StyledBackground
              fluid={data?.card_3_image?.localFile?.childImageSharp?.fluid}
              className="Cards__BGImage"
            >
              <Title> {data.card_3_title.text}</Title>
            </StyledBackground>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => handleExpandClick(3)}
                aria-expanded={expanded === 3}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded === 3} timeout="auto" unmountOnExit>
              <CardContent>
                <Text>{data.card_3_body.text}</Text>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} className={classes.item}>
          <Card className={classes.root}>
            <StyledBackground
              fluid={data?.card_4_image?.localFile?.childImageSharp?.fluid}
              className="Cards__BGImage"
            >
              <Title> {data.card_4_title.text}</Title>
            </StyledBackground>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => handleExpandClick(4)}
                aria-expanded={expanded === 4}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded === 4} timeout="auto" unmountOnExit>
              <CardContent>
                <Text>{data.card_4_body.text}</Text>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </CardsContainer>
  );
};

CardsSection.propTypes = {};

export default CardsSection;
