import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import ScrollReveal from './components/ScrollReveal'
import StickyHeader from './components/StickyHeader'

ScrollReveal();

window.Alpine = Alpine

Alpine.data('stickyHeader', StickyHeader)
Alpine.plugin(collapse)
Alpine.start()