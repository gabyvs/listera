const { forwardTo } = require('prisma-binding');

const Query = {
  // async tasks (parent, args, ctx, info) {
  //   const tasks = await ctx.db.query.tasks();
  //   // console.log(`All tasks: ${tasks}`);
  //   return tasks;
  // }
  tasks: forwardTo('db')
};

module.exports = Query;