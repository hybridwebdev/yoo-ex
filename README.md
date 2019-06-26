#yoo-ex

Warning!!! This uses proxies, which 9% of browsers do not support. Please keep this in mind if you choose to use
this library. For more information on proxy support, visit  https://github.com/GoogleChrome/proxy-polyfill 

Also be warned, that currently this library is very much in an early experimental stage, and needs some testing. 
At this stage it's more a proof of concept than anything.


An experimental idea for an alternative centralized state management system, like vuex.

Currently this module supports: 

1) Namespaced modules
2) An easy to use extension api, that allows you to register modules much like you would in Vuex.
3) Method and state change watchers via $store.subscribe() and $store.watch() just like vuex.

Roadmap: 

I plan on adding the following features: 

1) Mapping helpers, like vuex uses, to map store methods and state to components. 
2) Computed/Cached getter support. 
3) ??? 
4) Profit!
