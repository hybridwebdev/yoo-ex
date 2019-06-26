import { store } from "@/yoo-ex/"
const $store = new store( )
$store.inject( { key: "$store" } )
$store.subscribe( ( state, a, b, c) => {
    console.log('method watcher', state, a, b, c)
} )
$store.watch( ( state, payload) => {
    console.log('state watcher', state, payload)
} )
$store.extend('test.baz', {
    namespaced: true,
    state: { foo: 'foo' },
    methods: {
        boo( state, a, b, c){
            console.log("boo-method", state, a, b, c)
        }
    }
} )

