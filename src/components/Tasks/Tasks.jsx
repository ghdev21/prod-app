import React, { useState } from 'react';
import { connect } from 'react-redux';
import { curry, map } from 'ramda';
import Task from './Task';
import FilterBar from '../FilterBar/FilterBar';
import generateListConfigs from '../../helpers/generateListConfigs';
import * as action from '../../store/actions';
import classes from './Task.module.scss';

const Tasks = ({ taskList, onEditTask, onMoveToDaily }) => {
  const [filterOptions, setFilterOptions] = useState(
    { topListFilter: 'toDo', globalListFilter: 'All' },
  );
  const [isGlobalListShow, setGlobalListVisibility] = useState(false);
  const listsConfig = generateListConfigs(taskList.tasks, filterOptions, isGlobalListShow);

  const drawTask = map((item) => {
    const [fireBaseId, obj] = item;
    return (
      <Task
        key={fireBaseId}
        id={fireBaseId}
        taskData={obj}
        onEditTask={onEditTask}
        onMoveToDaily={onMoveToDaily}
      />
    );
  });

  const createGlobalList = (el) => {
    const { categoryName, data } = el;
    let categoryList = null;

    if (data.length && isGlobalListShow) {
      categoryList = (
        <div
          className={`${classes.CategoryList} ${classes[categoryName]}`}
          key={categoryName}
        >
          <span className={`${classes.Circle} ${classes[categoryName]}`} />
          <h3 className={`${classes.Title} ${classes[categoryName]}`}>{categoryName}</h3>
          {drawTask(data)}
        </div>
      );
    }

    return categoryList;
  };

  const filterHandler = curry((name, val) => {
    if (name === 'global') {
      setFilterOptions({ ...filterOptions, globalListFilter: val });
    } else {
      setFilterOptions({ ...filterOptions, topListFilter: val });
    }
  });

  return (
    <>
      {listsConfig.map((config) => {
        const {
          name, list, filters, active, isShown,
        } = config;
        const isGlobal = name === 'global';
        const globalListIndicator = isShown ? 'icon-global-list-arrow-down' : 'icon-global-list-arrow-right';
        let content;

        if (isGlobal) {
          content = map(createGlobalList, list);
        } else {
          content = drawTask(list);
        }
        return (
          <React.Fragment key={name}>
            {
              isGlobal
              && (
                <div className={classes.GlobalListToggle}>
                  <button
                    className={classes.ShowButton}
                    onClick={() => setGlobalListVisibility(!isGlobalListShow)}
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
                  <FilterBar
                    handler={filterHandler(name)}
                    marks={filters}
                    activeElement={active}
                  />
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
  onMoveToDaily: (id, data) => dispatch(action.startMovingToDaily(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
