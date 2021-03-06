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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import classes from "./../styles/men.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Addcart } from "../redux/actions";

const Men = () => {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(Addcart(product));
  };

  const [age, setAge] = React.useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
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
    console.log(id);
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

  useEffect(() => {
    men1();
  }, []);

  const men1 = async () => {
    const result = await fetch(
      "https://6262556c327d3896e28506cd.mockapi.io/closet"
    );
    let res = await result.json();
    res = res.map((data) => ({ ...data, isExpanded: false }));

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
                alt="product"
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
                    <b>Rating ????</b> {data.rating}
                  </Typography>
                  <Typography paragraph>
                    <b>Product Details:</b> {data.productdetails}
                  </Typography>
                  <Typography paragraph>
                    <b>Size and fit:</b> {data.sizefit}
                  </Typography>
                  <Typography paragraph>
                    <b>material and care:</b> {data.materialcare}
                  </Typography>
                  <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                    <InputLabel id="demo-simple-select-autowidth-label">
                      size
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="size"
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={10}>xs</MenuItem>
                      <MenuItem value={21}>s</MenuItem>
                      <MenuItem value={22}>m</MenuItem>
                      <MenuItem value={22}>L</MenuItem>
                      <MenuItem value={22}>xl</MenuItem>
                    </Select>
                  </FormControl>
                  <Stack spacing={2} sx={{ m: 1 }}>
                    <Button
                      style={{ backgroundColor: "#EED1BB", color: "#000000" }}
                      startIcon={<AddShoppingCartIcon />}
                      onClick={() => addProduct(data)}
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

export default Men;
