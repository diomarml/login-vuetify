import { SET_LOADING_LOGIN_BUTTON, SET_LOGGED_USER, SET_SIDEBAR_MENU, SET_TOKEN, SET_USER_EMAIL_LOGIN, SET_USER_PASSWORD_LOGIN, SET_WRONG_USER_PASSWORD } from "../../mutations-types"
import * as User from "../../../api/User";
import decode from 'jwt-decode'
import jwt from 'jsonwebtoken'
import router from '../../../router'
import Vuelidate from 'vuelidate';






const actions = {
    updateUserEmailLogin({ commit }, email) {
        commit(SET_USER_EMAIL_LOGIN, email)
    },
    updateUserPasswordLogin({ commit }, password) {
        commit(SET_USER_PASSWORD_LOGIN, password)
    },
    updateSidebarMenu({ commit }) {
        commit(SET_SIDEBAR_MENU)
    },
    async login({ state, commit }) {
        commit(SET_LOADING_LOGIN_BUTTON, true)
        commit(SET_WRONG_USER_PASSWORD, false)
        await User.login(state.userLogin)
            .then((response) => {
                if (response.status === 200) {
                    commit(SET_WRONG_USER_PASSWORD, false)
                    commit(SET_LOADING_LOGIN_BUTTON, false)
                    commit(SET_USER_EMAIL_LOGIN, null)
                    commit(SET_USER_PASSWORD_LOGIN, null)
                    commit(SET_TOKEN, response.data.token)
                    commit(SET_LOGGED_USER, decode(response.data.token))
                    localStorage.setItem("token", response.data.token)
                    router.push({ name: 'Home' })
                }
            })
            .catch(error => {
                commit(SET_LOADING_LOGIN_BUTTON, false)
                if (error.response.status === 400) {
                    if (error.response.data.msg == "Wrong User/Password") {
                        commit(SET_WRONG_USER_PASSWORD, true)
                    }
                } else {

                }


            })

    },
    autoLogin({ commit }) {

        let token = localStorage.getItem("token")
        if (token) {
            commit(SET_TOKEN, token)
            commit(SET_LOGGED_USER, decode(token))
            router.push({ name: 'Home' })
        }
    },
    logout({ commit }) {
        commit(SET_TOKEN, null)
        commit(SET_LOGGED_USER, null)
        localStorage.removeItem("token")
        router.push({ name: 'login' })
    }

}

export default actions