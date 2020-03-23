import React, { useState } from 'react';
import { connect } from 'react-redux';
import { curry, map } from 'ramda';
import drawTask from '../../helpers/drawTask';
import createGlobalList from '../../helpers/createGlobalList';
import FilterBar from '../UI/Bar/FilterBar';
import generateListConfigs from '../../helpers/generateListConfigs';
import * as action from '../../store/actions';
import { DEFAULT_STATUS_FILTER, DEFAULT_PRIORITY_FILTER } from '../../constants/Filters';
import classes from './Task.module.scss';
import SelectBar from '../UI/Bar/SelectBar';

const Tasks = (props) => {
  const { taskList } = props;
  const [filterOptions, setFilterOptions] = useState(
    { topListActiveFilter: DEFAULT_STATUS_FILTER, globalListActiveFilter: DEFAULT_PRIORITY_FILTER },
  );
  const [isGlobalListShown, setGlobalListVisibility] = useState(false);
  const listsConfig = generateListConfigs(taskList.tasks, filterOptions, isGlobalListShown);
  const getTask = map(drawTask({ ...props }));

  const filterHandler = curry((name, val) => {
    if (name === 'global') {
      setFilterOptions({ ...filterOptions, globalListActiveFilter: val });
    } else {
      setFilterOptions({ ...filterOptions, topListActiveFilter: val });
    }
  });

  return (
    <>
      {listsConfig.map((config) => {
        const {
          name, list, filters, active, isShown,
        } = config;
        const isGlobal = name === 'global';
        const globalListIndicator = isShown
          ? 'icon-global-list-arrow-down'
          : 'icon-global-list-arrow-right';

        const content = isGlobal
          ? map(createGlobalList(getTask), list)
          : getTask(list);

        return (
          <React.Fragment key={name}>
            {
              isGlobal
              && (
                <div className={classes.GlobalListToggle}>
                  <button
                    className={classes.ShowButton}
                    onClick={() => setGlobalListVisibility(!isGlobalListShown)}
                  >
                    <span>Global List</span>
                    <span className={`${classes.ShowListIndicator} ${globalListIndicator}`} />
                  </button>
                </div>
              )
            }
            {
              isShown
              && (
                <div>
                  <div className={classes.BarSection}>
                    {taskList.isDeleteMode
                    && <SelectBar
                      list={isGlobal
                        ? taskList.tasks.globalList
                        : list}
                      onUpdateTrashItem={props.onUpdateTrashItem}
                    />}
                    <FilterBar
                      handler={filterHandler(name)}
                      marks={filters}
                      activeElement={active}
                    />
                  </div>
                  {content}
                </div>
              )
            }
          </React.Fragment>
        );
      })}
    </>
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => ({
  onEditTask: (data) => dispatch(action.editTask(data)),
  onMoveToDaily: (id, data) => dispatch(action.moveToDaily(id, data)),
  onUpdateTrashItem: (id, isSelected) => dispatch(action.updateTrashItem(id, isSelected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
