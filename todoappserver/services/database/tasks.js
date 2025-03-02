const { Tasks } = require('../../models/');
const taskStatus = require('../../utils/taskStatus');

exports.createTask = async (title, description, user_id) => {
  try {
    const task = await Tasks.create({
      title,
      description,
      user_id,
      status: taskStatus.PENDING,
    });
    return task;
  } catch (error) {
    throw new Error(error);
  }
};
