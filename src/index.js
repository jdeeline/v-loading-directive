import './styles.css';

const VueLoading = (el, binding) => {
    el.classList[binding.value ? 'add' : 'remove']('v-loading');
};

export default VueLoading;
