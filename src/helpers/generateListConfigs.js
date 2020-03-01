export default (tasks, filterOpts, isGlobalListShow ) => {
  const { topListFilter, globalListFilter} = filterOpts;
  const { globalList, dailyList, done } = tasks;
  const categories = globalList.map((item) => item[1].category);
  const categoryCollection = new Set(categories);
  const topList = topListFilter === 'toDo' ? dailyList : done;
  const data = [...categoryCollection].map((category) => {
    const dataArr = globalList.filter((el) => {
      const [, task] = el;
      const isTaskEqualCategory = task.category === category;

      return globalListFilter === 'All'
        ? isTaskEqualCategory
        : isTaskEqualCategory && task.priority === globalListFilter;
    });

    return { categoryName: category, data: dataArr };
  });

  return [
    {
      name: 'top',
      list: topList,
      filters: ['toDo', 'done'],
      active: topListFilter,
      isShown: true,
    },
    {
      name: 'global',
      list: data,
      filters: ['All', 'Urgent', 'High', 'Middle', 'Low'],
      active: globalListFilter,
      isShown: isGlobalListShow,
    },
  ];
};
