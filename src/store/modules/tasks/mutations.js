import { SET_LOADING_LOGIN_BUTTON, SET_LOGGED_USER, SET_SIDEBAR_MENU, SET_TOKEN, SET_USER_EMAIL_LOGIN, SET_USER_PASSWORD_LOGIN, SET_WRONG_USER_PASSWORD } from "../../mutations-types"

const mutations = {
    [SET_USER_EMAIL_LOGIN](state, email) {
        state.userLogin.email = email
    },
    [SET_SIDEBAR_MENU](state) {
        state.sidebarMenu = !state.sidebarMenu
    },
    [SET_USER_PASSWORD_LOGIN](state, password) {
        state.userLogin.password = password
    },
    [SET_TOKEN](state, token) {
        state.token = token
    },
    [SET_LOGGED_USER](state, user) {
        state.loggedUser = user
    },
    [SET_WRONG_USER_PASSWORD](state, status) {
        state.wrongUserOrPassword = status
    },
    [SET_LOADING_LOGIN_BUTTON](state, status) {
        state.loadingButtonLogin = status
    }
}
export default mutations