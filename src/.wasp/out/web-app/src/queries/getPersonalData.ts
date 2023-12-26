import { createQuery } from './core'
import { GetPersonalData } from '../../../server/src/queries/getPersonalData'


const query = createQuery<GetPersonalData>(
  'operations/get-personal-data',
  ['User', 'PersonalData'],
)

export default query
