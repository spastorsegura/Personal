const app= Vue.createApp({
    data(){
        return{
            titulo:'Mi banco con Vue.js',
            cantidad:1000,
            enlace:'https://bluuweb.github.io/vue-udemy/',
            estado:false,
            servicios:['transferencia','pagos','giros','cheques'],
            desactivar:false
        }
    },
    methods:{
        agregarSaldo(){
            this.cantidad=this.cantidad +100
        },
        disminuirSaldo(valor){
            this.cantidad=this.cantidad - valor
            if (this.cantidad <= 0) {
                this.desactivar=true
                alert('saldo en cero!')
                return
            }
        }
    },
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculaTexto(){
            return this.titulo.toUpperCase()
        }
    }
})
