import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Stack from "@mui/material/Stack";
import classes from "./../styles/men.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Addcart } from "../redux/actions";

const Beauty = () => {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(Addcart(product));
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (id) => {
    let actualData = [...data];
    let updatedData = actualData.map((data) =>
      data.id === id ? { ...data, isExpanded: !data.isExpanded } : data
    );
    setData(updatedData);
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Bebas Neue", "cursive"].join(","),
    },
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    men1();
  }, []);

  const men1 = async () => {
    const result = await fetch(
      "https://6262556c327d3896e28506cd.mockapi.io/closetbeauty"
    );

    let res = await result.json();
    res = res.map((data) => ({ ...data, isExpanded: false }));
    console.log("res", res);
    setData(res);
  };

  return (
    <div className={classes.box}>
      {data.map((data) => {
        return (
          <ThemeProvider theme={theme}>
            <Card sx={{ maxWidth: 345 }} className={classes.box1}>
              <CardHeader title={data.product} subheader={data.pname} />
              <CardMedia
                component="img"
                height="500"
                image={data.image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                
                <ExpandMore
                  expand={data.isExpanded}
                  onClick={() => handleExpandClick(data.id)}
                  aria-expanded={data.isExpanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  width: "14.4em",
                }}
                in={data.isExpanded}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Typography paragraph>
                    <b>Price:</b> Rs. {data.price}
                  </Typography>

                  <Typography paragraph>
                    <b>Rating 🌟</b> {data.rating}
                  </Typography>
                  <Typography paragraph>
                    <b>Product Details:</b> {data.productdetails}
                  </Typography>
                  <Stack spacing={2} sx={{ m: 1 }}>
                    <Button
                      onClick={() => addProduct(data)}
                      style={{ backgroundColor: "#EED1BB", color: "#000000" }}
                      startIcon={<AddShoppingCartIcon />}
                    >
                      add to cart
                    </Button>
                  </Stack>
                </CardContent>
              </Collapse>
            </Card>
          </ThemeProvider>
        );
      })}
    </div>
  );
};

export default Beauty;
