import './assets/style.css'
import App from './App.vue'
import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloclient from './ApolloClient';
import router from './routers';
const app = createApp({
    setup() {
      provide(DefaultApolloClient, apolloclient);
    },
    render: () => h(App),
  });
app.use(router);
app.mount('#app')
