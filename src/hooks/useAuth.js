import { useSelector } from "react-redux";


export function useAuth () {
    const {currentUser, showForm, formType, showBurger} = useSelector(state => state.user);

    return {
        isAuth: !!currentUser
    }
}