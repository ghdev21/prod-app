import { compose, curry, filter, map, uniq } from 'ramda';
import { DEFAULT_PRIORITY_FILTER } from '../constants/Filters';

export const getUniqueCategory = compose(uniq, map((el) => el[1].category));

export const distributeByLists = curry((globalListFilter, category, el) => {
  const [, task] = el;
  const isTaskEqualCategory = task.category === category;

  return globalListFilter === DEFAULT_PRIORITY_FILTER
    ? isTaskEqualCategory
    : isTaskEqualCategory && task.priority === globalListFilter;
});

export const getCategoriesList = curry((array, globalListFilter, category) => {
  const getGlobalList = filter(distributeByLists(globalListFilter, category), array);

  return { categoryName: category, data: getGlobalList };
});

export const generateConfig = (...values) => {
  const [name, list, filters, active, isShown] = values;

  return {
    name,
    list,
    filters,
    active,
    isShown,
  };
};
