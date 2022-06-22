// Coleções cEstrutura, Métodos e Set vs Array


colecoes.beforeEnter(entra) {
    console.log('beforeEnter');
},
enter(el, done) {
    console.log('enter');
    done();
},
beforeLeave(el) {
    console.log('beforeLeave');
},
leave(el, done) {
    console.log('leave');
    done();
},