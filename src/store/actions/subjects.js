import { types } from '../types/types';
import {
  getSubjectFetch,
  getSubjectsFetch,
  postSubjectsFetch,
  updatedSubjectFetch,
} from '../../helpers/subjectHelper';
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

const startLoadSubject = (params = '') => {
  return async (dispatchEvent) => {
    const response = await getSubjectFetch(params);
    switch (response.status) {
      case 404:
        dispatchEvent(setAlert('error', 'El período no fue encontrado'));
        break;
      case 200:
        const subject = await response.json();
        dispatchEvent(activeSubject(subject));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al obtener el período'));
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

const startUpdatedSubject = () => {
  return async (dispatchEvent, getState) => {
    const { active } = getState().subject;
    
    const params = active;
    const response = await updatedSubjectFetch(active.id, params);
    switch (response.status) {
      case 404:
        dispatchEvent(setAlert('error', 'La asignatura no fue encontrada'));
        break;
      case 200:
        const subject = await response.json();
        dispatchEvent(activeSubject(subject));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al actualizar la asignatura'));
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
  startLoadSubject,
  startNewSubject,
  startUpdatedSubject,
}