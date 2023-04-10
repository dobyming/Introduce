import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date = "2016.01 - 2018.01"
         iconStyle = {{background:'#3e497a', color:'#fff'}}
         icon = {<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'> 
            Gocheok High School - Seoul, Korea
          </h3>
          <p> High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date = "2018.03 - 2019.06"
         iconStyle = {{background:'#3e497a', color:'#fff'}}
         icon = {<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'> 
            Dongguk DUICA - Seoul, Korea
          </h3>
          <h4>Certi</h4>
          <p>Computer Science Engineering </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date = "2022.08 - 2022.12"
         iconStyle = {{background:'#e9d35b', color:'#fff'}}
         icon = {<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'> 
          Front-End Developer Intern Hanjin Corp 
          </h3>
          <h4>Seoul, Korea</h4>
          <p>-DevOps based project by performing troubleshooting with feedback from field workers.</p>
          <p>-Develop New Web page in front-end part as requested by PO.</p>
          <p>-Construct Mobile web environment and enhance mobile UX and troubleshooting Bugs.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
         className='vertical-timeline-element--education'
         date = "2020.03 - 2023.02"
         iconStyle = {{background:'#3e497a', color:'#fff'}}
         icon = {<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'> 
            Inha University - Incheon, Korea
          </h3>
          <h4>Bachelor of Science in Engineering</h4>
          <p>Computer Engineering</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience