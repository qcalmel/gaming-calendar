import { Fragment, useEffect } from "react";
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { getGamesFromSearch } from "../../api/game";
import { useQuery } from "react-query";

const Search = ({ searchQuery }) => {
  const { isLoading, isError, error, data, refetch, remove } = useQuery(
    "data",
    () => getGamesFromSearch(searchQuery),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    const fetchTimeout = setTimeout(() => {
      remove();
      refetch();
    }, 500);

    return () => clearTimeout(fetchTimeout);
  }, [searchQuery]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />;
      </Box>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const games = data?.data || [];
  return (
    <List>
      {games.map((game) => {
        return (
          <Fragment>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={game?.cover?.url} />
              </ListItemAvatar>
              <ListItemText primary={game?.name} />
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
