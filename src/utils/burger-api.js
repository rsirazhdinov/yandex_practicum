const API_URL = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
    return res.ok ? res.json(): res.json().then((err) => Promise.reject(err))
}
export const fetchIngredients = () => {
    return fetch(`${API_URL}/ingredients`)
        .then(checkResponse)
        .then(data => {
            if (data?.success){
                return data.data;
            } else {
                return Promise.reject(data)
            }
        })
}