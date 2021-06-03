import { ON_CHANGE_POSITIONS } from './actions/typesPositions'
// import pays from '../../src/components/clients/principal/layouts/popup/layouts/positions/pays'

const initState = {
    Prenom: '',
    Nom: '',
    Entreprise: '',
    Ville: '',
    CodePostal: '',
    Adresse: '',
    Pays: '',
    Message: 'Mon metier est: \nMon projet est: \nMes Objectifs sont: \nMon budget de formation est de: \nJe souhaite etre recontacte aux dates et horaires suivants: '
}

const reducers = (state = initState, { type, datas }) => {
    switch (type) {
    case ON_CHANGE_POSITIONS:
        return Object.assign({}, state, datas)
    default:
        return state
    }
}

export default reducers
