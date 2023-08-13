import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';  
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row'; 
import Tile from './components/Tile.vue' 
import Tooltip from 'primevue/tooltip';   
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTv } from "@fortawesome/free-solid-svg-icons";  
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTv);

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component('Button', Button);
app.component('Toast', Toast);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Tile', Tile);
app.directive('tooltip', Tooltip);
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app');


