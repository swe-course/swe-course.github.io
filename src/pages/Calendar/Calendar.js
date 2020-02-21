import React from 'react';
import './Calendar.css';
import BasePage from './../BasePage/BasePage';
//import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
//import StarIcon from '@material-ui/icons/Star';
//import DoneAllIcon from '@material-ui/icons/DoneAll';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Calendar extends BasePage {
  constructor(props){
    super(props);
    this.pageName = 'Calendar';
  }

  render() {
    return (
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col">

<VerticalTimeline
  className=""
  animate={ false }
  layout={'2-columns'}
>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020/02/24"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineering - Architecture & Design</h3>
    <h5 className="vertical-timeline-element-subtitle">Alteryx Ukraine, Kyiv, UA</h5>
    <p>
      <h5>4h</h5>
    </p>
    <p>
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
</div>
</div>

    )
  }
}
