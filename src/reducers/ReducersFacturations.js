import { ON_CHANGE_FACTURATIONS } from './actions/typesFacturations'

const initState = {
    Prenom: '',
    Nom: '',
    Entreprise: '',
    Ville: '',
    CodePostal: '',
    Adresse: '',
    Pays: ''
}

const reducers = (state = initState, { type, datas }) => {
    switch (type) {
    case ON_CHANGE_FACTURATIONS:
        return Object.assign({}, state, datas)
    default:
        return state
    }
}

export default reducers
