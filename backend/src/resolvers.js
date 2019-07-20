let idCount = 0;
const tasks = [];

const resolvers = {
  Query: {
    description: () => `This is the API for a todo list application`,
    tasks: () => tasks,
    task: (parent, args) => tasks.find(task => task.id === args.id)
  },
  Mutation: {
    createTask: (parent, args) => {
      const data = args.data || {};
      const task = {
        id: `${idCount++}`,
        parentId: data.parentId || undefined,
        createdAt: data.createdAt || Math.floor(Date.now()/1000),
        status: data.status || undefined,
        progress: data.progress || 0,
        name: data.name || '',
        description: data.description ||  '',
        subTasks: data.subTasks || [],
        dueDate: data.dueDate || undefined,
        tags: data.tags || [],
        priority: data.priority || undefined
      };
      tasks.push(task);
      return task;
    },
    deleteTask: (parent, args) => {
      const idxToDelete = tasks.findIndex(task => task.id === args.id);
      if (idxToDelete > -1) {
        const deleted = tasks.splice(idxToDelete, 1);
        return deleted[0];
      }
      return null;
    },
    updateTask: (parent, args) => {
      const dataToUpdate = args.task;
      const idxToUpdate = tasks.findIndex(task => task.id === dataToUpdate.id);
      if (idxToUpdate > -1) {
        const taskToUpdate = tasks[idxToUpdate];
        let updatedTask = {
          id: taskToUpdate.id,
          parentId: dataToUpdate.parentId || taskToUpdate.parentId,
          createdAt: dataToUpdate.createdAt || taskToUpdate.createdAt,
          status: dataToUpdate.status || taskToUpdate.status,
          progress: dataToUpdate.progress || taskToUpdate.progress,
          name: dataToUpdate.name || taskToUpdate.name,
          description: dataToUpdate.description ||  taskToUpdate.description,
          subTasks: dataToUpdate.subTasks || taskToUpdate.subTasks,
          dueDate: dataToUpdate.dueDate || taskToUpdate.dueDate,
          tags: dataToUpdate.tags || taskToUpdate.tags,
          priority: dataToUpdate.priority || taskToUpdate.priority
        };

        tasks[idxToUpdate] = updatedTask;
        return updatedTask;
      }
      return null;
    }
  }
};

module.exports = resolvers;