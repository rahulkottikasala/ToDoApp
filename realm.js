import Realm from "realm";

class Todo extends Realm.Object{}

Todo.schema = {
    name:'todo',
    properties: {
        recordId: 'string',
        data:'string',
        checked:'string',
        time:'string',
    },
    primaryKey :'recordId',
}

let realm = new Realm({ schema: [Todo], schemaVersion: 4 });

//getAllTodos
let getAllTodos = () => {
    return realm.objects('todo');
}


//add method

let addTodo = (_id, _data,_checked, _time) => {
    realm.write(() => {
        realm.create('todo', {
            recordId: _id,
            data: _data,
            checked: _checked,
            time: _time
        })
    })
}


//update method

let updateTodo = (_id, _checked) => {
    realm.write(() => {
        let todo = realm.objects('todo').filter(todo => todo.recordId === _id)

        if(todo) {
            todo[0].checked = _checked && _checked === '' ? Cart[0].checked : _checked;
        }
    })
}

//delete 

let deleteTodo = (_id) => {
    realm.write(() => {
        realm.delete(
            realm.objects('todo').filter((todo)=> todo.recordId === _id)
        )
    })
}


export default realm;

export { getAllTodos, addTodo, updateTodo, deleteTodo } 


