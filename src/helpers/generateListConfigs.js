import { map, compose } from 'ramda';
import { STATUS_FILTERS, PRIORITY_FILTERS, DEFAULT_STATUS_FILTER } from '../constants/Filters';
import { getUniqueCategory, getCategoriesList, generateConfig } from './taskListUtils';

export default (tasks, filterOpts, isGlobalListShow) => {
  const { topListActiveFilter, globalListActiveFilter } = filterOpts;
  const { globalList, dailyList, done } = tasks;

  const topList = topListActiveFilter === DEFAULT_STATUS_FILTER ? dailyList : done;
  const global = compose(
    map(getCategoriesList(globalList, globalListActiveFilter)),
    getUniqueCategory,
  )(globalList);

  return [
    generateConfig('top', topList, STATUS_FILTERS, topListActiveFilter, true),
    generateConfig('global', global, PRIORITY_FILTERS, globalListActiveFilter, isGlobalListShow),
  ];
};
