import React from 'react';
import SubTitle from '../SubTItle/SubTitle';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import SettingsControls from '../SettingsControls/SettingsControls';

export default (props) => (
  <Auxiliary>
    <SubTitle subTitle="Pomodoros settings" />
    <SettingsControls />
  </Auxiliary>
);
