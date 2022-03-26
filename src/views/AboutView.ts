
import './AboutView.scss';
import { Component, Vue } from "vue-property-decorator";
import { ipcRenderer } from 'electron';

@Component({
  components: {
  },

  methods: {
    openWindow: function () {
      console.log('OPEN WINDOW');

      ipcRenderer.send('component.open', [
        {
          component: 'UsuariosComponent',
          win: window.scroll()
        }
      ]);
    }
  }
})
export default class HomeView extends Vue { }
