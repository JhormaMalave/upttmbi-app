import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadSections } from '../../../store/actions/sections';
import SectionCard from './SectionCard';

const Sections = React.memo(({urlParams}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadSections(urlParams))
  }, [dispatch, urlParams])

  const { sections } = useSelector(state => state.section)

  return (
    <>
      {
        //<h2 className="m-5 font-bold">No se encontraron asignaturas</h2>
      }
      <div className="flex flex-wrap mt-4">
        {
          sections.map(section => <SectionCard key={section.id} {...section} />)
        }
      </div>
    </>
  );
});

export default Sections;
