import { types } from '../types/types';
import { getSubjectsFetch } from '../../helpers/subjectHelper';
import { setAlert } from './ui'

const startLoadSubjects = (params = '') => {
  return async (dispatchEvent) => {
    const response = await getSubjectsFetch(params);
    switch (response.status) {
      case 200:
        const subject = await response.json();
        dispatchEvent(loadSubject(subject));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al obtener las asignaturas'));
        break;
    }
  }
}

const activeSubject = (subject) => ({
  type: types.periodSchoolActive,
  payload: subject,
});

const removeActiveSubject = () => ({
  type: types.subjectRemoveActive,
});

const loadSubject = (subject) => ({
  type: types.subjectLoadAll,
  payload: subject
});

export {startLoadSubjects}