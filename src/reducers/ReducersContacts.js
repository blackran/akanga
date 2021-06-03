import { ON_CHANGE_CONTACTS } from './actions/typesContacts'

const initState = {
    Prenom: '',
    Nom: '',
    Email: '',
    Tel: ''
}

const reducers = (state = initState, { type, datas }) => {
    switch (type) {
    case ON_CHANGE_CONTACTS:
        return Object.assign({}, state, datas)
    default:
        return state
    }
}

export default reducers
