import cadastros from '@/components/cadastros.vue';
import formulario from '@/components/formulario.vue';

export const routes = [
    { path: '', component: formulario },
    { path: '/cadastros', component: cadastros }
];