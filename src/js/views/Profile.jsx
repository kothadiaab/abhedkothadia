import React, {Component} from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

class ProfileView extends Component {
  render() {
    return (
      <div className="container container--960">
        <PrimaryHeader
          children="Hello There"
        />
        <div className="padding-top-single-space">
          <p>
            <span className="profile-question"># Who am I professionally?</span> I’m a <b>Front end developer</b>,
            who strongly believe in writing code that is clean, readable, modular and reusable, always keeping in
            mind that my work should be able to <i>outlive</i> me, wheather in its original or utilized contexts.
            I enjoy squabbling code to perfect user experiences and takes pleasure in painstaking finesse
            that goes into design implementation decisions.
          </p>
          <p>
            I’ve spent last 4 years working on various projects to design and deliver the seamless web
            based applications. I’m an intuitive, open-minded learner who is not afraid to be wrong,
            and find it necessary to understand every aspect of something in order to make proper,
            informed decisions.
          </p>
          <p>
            <span className="profile-question"># Who am I outside of work?</span> Frequent flyer,
            music lover, die hard soccer fan (#ViscaBarca), tennis admirer(#RF) and
            a passionate cricket supporter.
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileView;
