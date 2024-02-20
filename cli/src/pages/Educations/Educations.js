import React from 'react'
import './Educations.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from 'react-icons/md'
const Educations = () => {
  return (
    <>
    
        <div className=' education' id='education'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Education Details
        </h2>
        <hr/>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2021-2025"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">BE(CS)</h3>
    <h4 className="vertical-timeline-element-subtitle">JSPM's BSIOTR, SPPU, Pune</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2019-2020"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondry</h3>
    <h4 className="vertical-timeline-element-subtitle">Maharishi Vidya Mandir(CBSE)</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  gray' }}
    date="2017-2018"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Secondry</h3>
    <h4 className="vertical-timeline-element-subtitle">Maharishi Vidya Mandir(CBSE)</h4>
    
  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    
    
    </>
  )
}

export default Educations