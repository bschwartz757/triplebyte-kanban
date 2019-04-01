const defaultTodoData = {
  tasks: {
    notStarted: {
      'task-1': { id: 'task-1', content: 'Do laundry' },
      'task-2': { id: 'task-2', content: 'Take out the trash' },
      'task-3': { id: 'task-3', content: 'Cook Food' }
    },
    inProgress: {
      'task-1': { id: 'task-1', content: 'Wash Car' },
      'task-2': { id: 'task-2', content: 'Clean House' },
      'task-3': { id: 'task-3', content: 'Do Dishes' }
    },
    done: {
      'task-1': { id: 'task-1', content: 'Procrastinate' },
      'task-2': { id: 'task-2', content: 'Procrastinate Some More' },
      'task-3': { id: 'task-3', content: 'Play on Phone' }
    },
    prioritized: {
      'task-1': { id: 'task-1', content: 'Sunbathing' },
      'task-2': { id: 'task-2', content: 'Shopping' },
      'task-3': { id: 'task-3', content: 'Get Nails Did' }
    }
  },

  columns: {
    notStarted: {
      id: 'notStarted',
      title: 'Not Started',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    inProgress: {
      id: 'inProgress',
      title: 'In Progress',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    done: {
      id: 'done',
      title: 'Done',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    prioritized: {
      id: 'prioritized',
      title: 'Prioritized',
      taskIds: ['task-1', 'task-2', 'task-3']
    }
  },

  columnOrder: ['notStarted', 'inProgress', 'done', 'prioritized']
};

export default defaultTodoData;
