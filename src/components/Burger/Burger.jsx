import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";

import style from "./Burger.module.scss";

import { ROUTES } from "../Routes";
import { LinkName } from "constants/link.js";
import {
  selectCurrentUser,
  toggleForm,
  toggleFormType,
} from "auth/redux/authSlice";
import ActiveUser from "components/ActiveUser/ActiveUser";

const Burger = ({ isOpenBurger, closeBurger }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVisibleAuth = useSelector(selectCurrentUser);

  const openRegistration = (type) => {
    dispatch(toggleFormType(type));
    dispatch(toggleForm(true));
    closeBurger();
  };
  const isAuth = () => {
    if (!isVisibleAuth) {
      dispatch(toggleFormType("signup"));
      dispatch(toggleForm(true));
      closeBurger();
      

    } else {
      closeBurger();
    }
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpenBurger}
        onClose={closeBurger}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "var(--bg)",
            color: "#ffff",
            flexDirection: "row",
            pt: "20px",
          },
        }}
      >
        <List
          className={style.list}
          sx={{
            width: { xs: "350px", sm: "400px", md: "534px" },
          }}
        >
          <ListItemIcon className={style.icon}>
            <CloseIcon onClick={closeBurger} />
          </ListItemIcon>
          {LinkName.map((item) => (
            <ListItem key={item.name}>
              {item.name === "personal office" ? (
                <Link className={style.link}  onClick={isAuth} to={ROUTES[item.rout]}>
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={ROUTES[item.rout]}
                  className={style.link}
                  onClick={closeBurger}
                >
                  {item.name}
                </Link>
              )}
            </ListItem>
          ))}
          {isVisibleAuth ? (
            <div className={style.activeUser}>
              <ActiveUser />
            </div>
          ) : (
            <>
              <ListItem>
                <button
                  className={style.linkLogin}
                  onClick={() => openRegistration("register")}
                >
                  log in
                </button>
              </ListItem>
              <ListItem>
                <button
                  className={style.linkSign}
                  onClick={() => openRegistration("signup")}
                >
                  sign up
                </button>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Burger;
