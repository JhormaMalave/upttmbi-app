import { types } from '../types/types';
import {
  getSectionFetch,
  getSectionsFetch,
  postSectionsFetch,
  updatedSectionFetch,
} from '../../helpers/sectionHelper';
import { setAlert } from './ui'

const startLoadSections = (params = '') => {
  return async (dispatchEvent) => {
    const response = await getSectionsFetch(params);
    switch (response.status) {
      case 200:
        const section = await response.json();
        dispatchEvent(loadSection(section));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al obtener las secciones'));
        break;
    }
  }
}

const startLoadSection = (params = '') => {
  return async (dispatchEvent) => {
    const response = await getSectionFetch(params);

    switch (response.status) {
      case 404:
        dispatchEvent(setAlert('error', 'La seccion no fue encontrada'));
        break;
      case 200:
        const section = await response.json();
        dispatchEvent(activeSection(section));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al obtener las secciones'));
        break;
    }
  }
}

const startNewSection = (active) => {
  return async (dispatchEvent) => {
    const params = {
      section: {
        name: active.name,
        trimester: active.trimester,
        shift_id: active.shift.id,
        school_period_id: active.school_period.id,
        course_id: active.course.id,
      }
    };
    const response = await postSectionsFetch(params);
    switch (response.status) {
      case 200:
        const section = await response.json();
        dispatchEvent(loadSection(section));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al crear la sección'));
        break;
    }
  }
}

const startUpdatedSection = (active) => {
  return async (dispatchEvent) => {    
    const params = {
      section: {
        id: active.id,
        name: active.name,
        trimester: active.trimester,
        shift_id: active.shift.id,
        school_period_id: active.school_period.id,
        course_id: active.course.id,
      }
    };
    const response = await updatedSectionFetch(active.id, params);
    switch (response.status) {
      case 404:
        dispatchEvent(setAlert('error', 'La sección no fue encontrada'));
        break;
      case 200:
        const section = await response.json();
        dispatchEvent(activeSection(section));
        break;
      default:
        dispatchEvent(setAlert('error', 'Ocurrió un error al actualizar la asignatura'));
        break;
    }
  }
}

const activeSection = (section) => ({
  type: types.sectionActive,
  payload: section,
});

const removeActiveSection = () => ({
  type: types.sectionRemoveActive,
});

const loadSection = (section) => ({
  type: types.sectionLoadAll,
  payload: section
});

export {
  activeSection,
  removeActiveSection,
  startLoadSections,
  startLoadSection,
  startNewSection,
  startUpdatedSection,
}