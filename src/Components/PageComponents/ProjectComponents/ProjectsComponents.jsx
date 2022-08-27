import React from 'react'
import {ProjectData} from './ProjectsData'
import Card from '../../UI/Card'
const ProjectsComponents = () => {
  return (
    <div className='grid grid-cols-5 gap-4'>
        {ProjectData?.map((val,i)=>{
            return(
                <div key={i}>
                    {/* <div><img src={val.project} alt=''/></div>
                    <div>{val.liveProject}</div> */}
                    <Card image={val.project} view={val.liveProject}/>
                </div>
            )
        })}
    </div>
  )
}

export default ProjectsComponents