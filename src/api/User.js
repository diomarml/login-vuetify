import { http } from './http_service'

export function login(form) {
    return new Promise((resolve, reject) => {
        http().post("/api/auth/login", form)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

