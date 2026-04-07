const mongoose=require('mongoose');
//mongoose.connect("mongodb+srv://test1:2108@cluster0.6nvsayd.mongodb.net/todos?retryWrites=true&w=majority");
mongoose.connect("mongodb://localhost:27017/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}