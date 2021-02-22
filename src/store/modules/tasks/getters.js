import { state } from "./state"

const getters = {
    userLogin: state => state.userLogin,
    loggedUser: state => state.loggedUser,
    token: state => state.token,
    wrongUserOrPassword: state => state.wrongUserOrPassword,
    loadingButtonLogin: state => state.loadingButtonLogin,
    sidebarMenu: state => state.sidebarMenu,
}

export default getters