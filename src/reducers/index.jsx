import { combineReducers } from 'redux'
import ReducersContacts from './ReducersContacts'
import ReducersPositions from './ReducersPositions'
import ReducersFacturations from './ReducersFacturations'

export default combineReducers(
    {
        Contacts: ReducersContacts,
        Positions: ReducersPositions,
        Facturations: ReducersFacturations
    }
)
