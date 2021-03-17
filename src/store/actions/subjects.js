import { types } from '../types/types';
import { getSubjectsFetch, postSubjectsFetch } from '../../helpers/subjectHelper';
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

const startNewSubject = () => {
  return async (dispatchEvent, getState) => {
    const { active } = getState().subject;
    const params = active
    const response = await postSubjectsFetch(params);
    console.log(response.json)
    switch (response.status) {
      case 200:
        const subject = await response.json();
        dispatchEvent(loadSubject(subject));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al crear las asignatura'));
        break;
    }
  }
}

const activeSubject = (subject) => ({
  type: types.subjectActive,
  payload: subject,
});

const removeActiveSubject = () => ({
  type: types.subjectRemoveActive,
});

const loadSubject = (subject) => ({
  type: types.subjectLoadAll,
  payload: subject
});

export {
  activeSubject,
  removeActiveSubject,
  startLoadSubjects,
  startNewSubject,
}