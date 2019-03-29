/* ----- DEPEND -----*/
import Vue from 'vue';
import VueBootstrap from 'bootstrap-vue';
import VueMoment from 'vue-moment';
import VueScrollTo from 'vue-scrollto';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import store from './store/store';
import css from '../src/assets/css/main.scss';
import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';
import AnimateCSS from 'animate.css';
import ElementUI from 'element-ui';


// import 'custom.scss'

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
  // popup: 'animated tada'
}

Vue.use(ElementUI);
Vue.use(AnimateCSS);
Vue.use(VueBootstrap);
Vue.use(VueMoment);
Vue.use(VueSweetalert2, options);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee);
library.add(faCouch);
library.add(faEnvelope);
library.add(faSortDown);
library.add(faComment);
library.add(faVenusMars);
library.add(faWindowClose);
library.add(faQuoteLeft);
library.add(faBriefcase);
library.add(faBook);
library.add(faMapMarkerAlt);
library.add(faLock);
library.add(faUser);
library.add(faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  css,
  render: h => h(App)
}).$mount("#app");
