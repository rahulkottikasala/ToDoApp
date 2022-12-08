import Realm from "realm";


class Trash extends Realm.Object{}



Trash.schema = {
    name:'trash',
    properties:{
        recordId: 'string',
        data:'string',
        time:'string'
    },
    
}

let trash = new Realm({ schema: [Trash], schemaVersion: 4 });


let getAllTrash = () => {
    return trash.objects('trash');
}


let addTrash = (_id, _data, _time) => {
    trash.write(() => {
        trash.create('trash', {
            recordId: _id,
            data: _data,
            time: _time
        })
    })
}

export default trash

export {getAllTrash, addTrash}
