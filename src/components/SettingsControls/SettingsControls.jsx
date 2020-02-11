import React, { useEffect } from 'react';
import uuid from 'uuid/v1';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SettingsControl from './SettingsControl/SettingsControl';
import TimeLine from '../TimeLine/TimeLine';
import Button from '../UI/Button/Button';
import classes from './SettingsControls.module.scss';
import * as actions from '../../store/actions';
import Spinner from '../UI/Spinner/Spinner';
import { TASK_LIST } from '../../constants/Routes';

const SettingsControls = ({
  settings,
  loading,
  history,
  onInitSettings,
  onSaveSettings,
  onResetSettings,
  onIncrement,
  onDecrement,
}) => {
  useEffect(() => {
    onInitSettings();
    return () => onResetSettings();
  }, [onInitSettings, onResetSettings]);
  const redirectToTasks = () => history.push(`/${TASK_LIST}`);
  const saveSettingsHandler = () => onSaveSettings(settings);
  return (
    !loading
      ? (
        <div>
          <form className={classes.SettingsControlForm} action="/">
            {settings.map((control) => (
              <SettingsControl
                key={uuid()}
                title={control.title}
                name={control.name}
                range={{ min: control.min, max: control.max }}
                value={control.value}
                text={control.text}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            ))}
          </form>
          {settings.length > 0 ? <TimeLine state={settings} /> : null}
          <div className={classes.ButtonWrapper}>
            <Button clickHandler={redirectToTasks} color="Blue">Go to Tasks</Button>
            <Button clickHandler={saveSettingsHandler} color="Green">Save</Button>
          </div>
        </div>
      )
      : <Spinner />
  );
};

const mapStateToProps = ({ settings }) => ({
  settings: settings.settingsArr,
  loading: settings.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onInitSettings: () => dispatch(actions.initSettings()),
  onSaveSettings: (settings) => dispatch(actions.updateSettings(settings)),
  onResetSettings: () => dispatch(actions.resetSettings()),
  onIncrement: (name) => dispatch(actions.incrementSettings(name)),
  onDecrement: (name) => dispatch(actions.decrementSettings(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)((withRouter(SettingsControls)));
