
const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmedName: ''
        
        };
    },

    methods: {
        confirmInput(event) {
            this.confirmedName = event.target.value;
        },
        textInput(event) {
            this.name = event.target.value;
        },
        showAlert() {
            alert('Practice Alert!');
        }
    }

});

app.mount('#assignment');