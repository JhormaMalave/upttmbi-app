import { apiURL } from "../rails/railsConfig";
import { types } from "../types/types";

const startGetSubjects = () => {
  return (async (dispatchEvent) => {
    const response = await fetch(`${apiURL}/curricular_units`);
    const subjects = response.json();
    getSubjects(subjects)
    console.log(subjects)
  });
}

const getSubjects = (subjects) => ({
  type: types.getSubjects,
  payload: subjects,
});

export {startGetSubjects}