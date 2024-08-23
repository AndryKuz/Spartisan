import { Drawer, List, ListItem } from "@mui/material";
import style from "./Burger.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../Routes";

const Burger = (props) => {
    const {openBurger, closeBurger} = props;
  return (
    <>
      <Drawer anchor="right" open={openBurger} onClose={closeBurger}>
        <List sx={{ width: "834px" }}>
          <ListItem>
            <Link to={ROUTES.ABOUT}>book now</Link>
          </ListItem>

        </List>
      </Drawer>
    </>
  );
};

export default Burger;
