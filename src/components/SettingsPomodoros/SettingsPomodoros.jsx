import React, { Fragment } from 'react';

import SubTitle from '../SubTItle/SubTitle';
import SettingsControls from '../SettingsControls/SettingsControls';

export default (props) => (
  <Fragment>
    <SubTitle subTitle="Pomodoros settings" />
    <SettingsControls />
  </Fragment>
);
