const { forwardTo } = require('prisma-binding');

const Mutation = {
  // async createTask(parent, args, ctx, info) {
  //   const task = await ctx.db.mutation.createTask({ data: args.data }, info);
  //   // console.log(`Task created: ${task}`);
  //   return task;
  // }
  createTask: forwardTo('db')
};

module.exports = Mutation;