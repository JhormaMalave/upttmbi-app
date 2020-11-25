import {subjects} from '../data/subjects';
import {trajects} from '../data/trajects';

const getSubjectsByTraject = (id) => {
  const traject = trajects.find((traject) => traject.id === id);
  if(!traject){
    throw new Error('Este trajecto no existe')
  }
  return (subjects.filter(subject => subject.traject === id));
}

export {getSubjectsByTraject}