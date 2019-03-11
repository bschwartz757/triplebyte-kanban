const defaultTodoData = {
  notStarted: {
    header: 'Not Started',
    todos: [{ text: 'Do laundry' }, { text: 'Take out the trash' }]
  },
  inProgress: {
    header: 'In Progress',
    todos: [{ text: 'Wash Car' }, { text: 'Clean House' }]
  },
  done: {
    header: 'Done',
    todos: [{ text: 'Procrastinate' }, { text: 'Write Poetry' }]
  },
  prioritized: {
    header: 'Prioritized',
    todos: [{ text: 'Sunbathing' }, { text: 'Shopping' }]
  }
};

export default defaultTodoData;
