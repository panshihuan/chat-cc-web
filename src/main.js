import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/router/interceptors.js'


// Toast
// import { showToast } from 'vant';
import 'vant/es/toast/style';
// Dialog
// import { showDialog } from 'vant';
import 'vant/es/dialog/style';
// Notify
// import { showNotify } from 'vant';
import 'vant/es/notify/style';
// ImagePreview
// import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style';


const app = createApp(App)


app.use(createPinia())

app.use(router)

app.mount('#app')
