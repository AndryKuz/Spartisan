import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";

import style from "./Burger.module.scss";

import { ROUTES } from "../Routes";
import { LinkName } from "constants/link.js";
import { selectFormType, selectShowBurger, selectShowForm, toggleForm } from "auth/redux/authSlice";


const Burger = ({closeBurger, openBurger}) => {

  const dispatch = useDispatch();

  const formType = useSelector(selectFormType);
  const showForm = useSelector(selectShowForm);
  const isOpenBurger = useSelector(selectShowBurger);

  const toggleCurrentFormType = (type) => dispatch(toggleForm(type));

  const openRegistration = () => {
    dispatch(toggleForm(true));
    toggleCurrentFormType('login');
    closeBurger();
  }

  

  return (
    <>
      <Drawer
        anchor="right"
        open={openBurger}
        onClose={closeBurger}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "var(--bg)",
            color: "#ffff",
            flexDirection:'row',
            pt:'20px'  
          },
        }}
      >
       
        <List className={style.list}
          sx={{
            width: { xs: "350px", sm: "400px", md: "534px" },
          }}
        >
          <ListItemIcon className={style.icon}>
            <CloseIcon onClick={closeBurger} />
          </ListItemIcon>
          {LinkName.map((item) => (
            <ListItem key={item.name}>
              <Link
                to={ROUTES[item.rout]}
                className={style.link}
                onClick={closeBurger}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
          <ListItem>
            <button className={style.linkLogin} onClick={openRegistration}>log in</button>
          </ListItem>
          <ListItem>
            <button className={style.linkSign}onClick={openRegistration}>sign up</button>
          </ListItem>
        </List>
        
      </Drawer>
    </>
  );
};

export default Burger;
