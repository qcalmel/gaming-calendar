import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const Search = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get("https://dummyjson.com/products");
      setData(results.data);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <List>
      {data.products?.map((product) => {
        return (
          <Fragment>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={product.thumbnail} />
              </ListItemAvatar>
              <ListItemText
                primary={product.title}
                secondary={product.price + "$"}
              />
              <ListItemIcon>
                <StarOutlineIcon />
              </ListItemIcon>
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        );
      })}
    </List>
  );
};

export default Search;
