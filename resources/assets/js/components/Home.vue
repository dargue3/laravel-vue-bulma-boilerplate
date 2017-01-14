<template>
    <section class="hero is-fullheight">
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                Brand
              </a>
            </div>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu">
              <a class="nav-item is-active">
                Home
              </a>
              <a class="nav-item">
                Examples
              </a>
              <a class="nav-item">
                Documentation
              </a>
              <span class="nav-item">
                <a class="button is-primary">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </header>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Rule the world with 
            <a class="link laravel" href="http://laravel.com">Laravel</a>, 
            <a class="link vuejs" href="http://vuejs.org">Vue.js</a>, and 
            <a class="link bulma" href="http://bulma.io">Bulma</a>
          </h1>
          <h3 class="subtitle">
            Complete with Webpack + Hot Module Reloading, <i>just hit save</i>
          </h3>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
</template>

<script>
export default  {
  
  name: 'Home',

  props: [],

  data()
  {
    return {
    }
  },

  methods:
  {

  },
};

</script>

<style lang="sass">
@import '~sass_vars'

#app
  height: 100%
  width: 100%

.hero-body .link
  font-weight: 500
  &.laravel
    color: $red
  &.vuejs
    color: $green
  &.bulma
    color: $turquoise

</style>