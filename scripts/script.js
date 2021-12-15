var app = new Vue({
    el: '#app',
    data: {
      showPerfil: false,
      message: 'Heelo',
      arrowClass: 'arrow'
    },
    methods: {
        showMenuPerfil() {
            this.showPerfil = true
            this.arrowClass = 'arrow-else'
        },
        hideMenuPerfil() {
            this.showPerfil = false
            this.arrowClass = 'arrow'
        }
    }
  })