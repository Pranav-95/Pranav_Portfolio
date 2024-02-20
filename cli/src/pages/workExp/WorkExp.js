import React from 'react'
import './WorkExp.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BiLogoMicrosoft} from 'react-icons/bi'

const WorkExp = () => {
  return (
    <>
        <div className='work' id='work'>
        <div className='container work-exp'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Work Experience
        </h2>
        <hr/>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#138781', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2022 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<BiLogoMicrosoft />}
  >
    <h3 className="vertical-timeline-element-title">Management Associate</h3>
    <h4 className="vertical-timeline-element-subtitle">MLSC BSIOTR(2022-23)</h4>
    <p>
      Managing the technical events including technical things too
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#138781', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2023 - present"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<BiLogoMicrosoft />}
  >
    <h3 className="vertical-timeline-element-title">Technical Executive</h3>
    <h4 className="vertical-timeline-element-subtitle">CESA, BSIOTR(2023)</h4>
    <p>
      Managing the technical things regarding the CS department 
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>

        </div>
        
        </div>
    </>
  )
}

export default WorkExp