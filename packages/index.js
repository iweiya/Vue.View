import Button from '..packages/Button';

const components = [
  Button
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install, // 全量引入
  Button
};
