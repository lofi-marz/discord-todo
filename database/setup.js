import { createRxDatabase, getRxStoragePouch } from 'rxdb';
const db = await createRxDatabase({
    name: 'heroesdb',           // <- name
    storage: addPouchPlugin(require('pouchdb-adapter-memory')),         // <- storage-adapter
    multiInstance: false
});

const schema = {
    title: 'todo schema',
    description: 'describes a user and their attached todos',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
        },
        todos: {
            type: 'array',
            items: {
                type:'object',
                properties: {
                    title: {
                        type:'string'
                    },
                    content: {
                        type: 'string,
                    }
                }
            }
        }
    },
    required: ['id']
};

const database = await createRxDatabase({
    name: 'mydatabase',
    storage: getRxStoragePouch('memory')
    
});