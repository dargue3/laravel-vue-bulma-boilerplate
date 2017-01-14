<template>
    <div class="container">

        <div class="header">
            <span>Hello World!</span>
        </div>

    </div>
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

.container
    height: 100%
    width: 100%
    display: flex
    justify-content: center
    align-items: center

.header
    font-family: 'Gloria Hallelujah'
    font-size: 45px
    color: $primary

</style>