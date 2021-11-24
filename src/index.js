import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/vars.styl';

if(module.hot){
  module.hot.accept('../src/index', function() {
    setTimeout(
      (async function App() {
        const main = null || document.getElementById('main');
        main.innerHTML = await Template();
      })()
    );
  });
}


(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();