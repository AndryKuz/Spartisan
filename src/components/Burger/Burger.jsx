import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";

import style from "./Burger.module.scss";

import { ROUTES } from "../Routes";
import { LinkName } from "constants/link.js";
import { selectFormType, selectShowBurger, selectShowForm, toggleBurger, toggleForm } from "auth/redux/authSlice";


const Burger = ({openBurger, closeBurger}) => {

  // const dispatch = useDispatch();

  // const formType = useSelector(selectFormType);
  // const showForm = useSelector(selectShowForm);

  // const openBurger = () => dispatch(toggleBurger(true));
  // const closeBurger = () => dispatch(toggleBurger(false));

  const openRegistration = (type) => {
    // dispatch(toggleForm(true));
    console.log(type);
    
    
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
            <CloseIcon onClick={closeBurger}/>
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
            <Link className={style.linkLogin} onClick={openRegistration('login')}>log in</Link>
          </ListItem>
          <ListItem>
            <Link className={style.linkSign} onClick={openRegistration('signup')}>sign up</Link>
          </ListItem>
        </List>
        
      </Drawer>
    </>
  );
};

export default Burger;
