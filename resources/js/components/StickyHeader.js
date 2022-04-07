export default () => ({
  mobileMenuOpen: false,
  sticky: false,
  attachToTop: true,
  lastPos: window.scrollY + 0,
  scroll() {
    this.attachToTop = window.scrollY <= this.$refs.navbar.offsetHeight;
    this.sticky = !this.attachToTop && this.lastPos > window.scrollY;
    this.lastPos = window.scrollY;
  },
  lockBody() {
    document.getElementById('app').classList.toggle('lock');
  }
})
