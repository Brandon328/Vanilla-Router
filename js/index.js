const ROUTER = new Router(PATHS);

window.addEventListener('hashchange', function () {
  const [, hash] = this.location.hash.split('/');
  ROUTER.load(hash);
});