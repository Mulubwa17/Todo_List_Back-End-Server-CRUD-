const Todo = require('./todo');



exports.newTodo = async (req, res, next) => {
  try {
   const { description, priority,responsible, completed } = req.body
   const newTodo = new Todo({ description, priority,responsible, completed  });
   await newTodo.save();
   res.json({
    data: newTodo
   
   })
  } catch (error) {
   next(error)
  }
}

exports.getTodoList = async (req, res, next) => {
    const todos = await Todo.find({});
    res.status(200).json({
      data: todos
    });
  }
  
exports.getTodo = async (req, res, next) => {
    try {
      const { userId } = req.params;
      console.log(req.body)
      // find the todo by id
      const user = await Todo.findOne({ userId: userId });
      console.log(user)
  
      const todo = await Todo.findById(userId);
      if (!user) return next(new Error('Todo does not exist'));
      res.status(200).json({
        data: todo
      });
    } catch (error) {
      next(error)
    }
  }


exports.updateTodo = async (req, res, next) => {
  try {
         const update = req.body
         const userId = req.params.userId;
         await Todo.findByIdAndUpdate(userId, update);
         const todo = await Todo.findById(userId)
         res.status(200).json({
          data: todo,
          message: 'Todo has been updated'
         });
        } catch (error) {
         next(error)
        }
       }

exports.deleteTodo = async (req, res, next) => {

  try {
       
      const userId = req.params.userId;
       
      await Todo.findByIdAndDelete(userId);
       
      res.status(200).json({
       
          data: null,
       
          message: 'Todo has been deleted'
       
         });
       
        } catch (error) {
       
         next(error)
       
        }
       
       }
       
       