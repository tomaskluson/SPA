<template>
  <section class="home">
    <img alt="Vue logo" src="../assets/vuelogo.png" />

    <!-- <tunes-song :song="song" /> -->

    <hello-world msg="Ahoj toto je SPA vyvíjená ve Vue.js" />
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/home/HelloWorld.vue";
/* import TunesSong from "@/components/tunes/TunesSong.vue"; */

export default {
  name: "Home",
  components: {
    HelloWorld
    /* TunesSong */
  }
  /* data() {
    return {
      song: {
        id: 339399242,
        artist: 'Them Crooked Vultures',
        audioFile: 
          'https://audio-ssl.itunes.apple.com/apple-assets-up-std-000001/Music/d2/42/38/mzm.aykywjep.assc.p.m4a',
        cover:
          'https://is1-ss1.mzstatic.com/image/thumb/Music/v4/8b/5b/ea/8b5bea91-f6b0-5255-9d38-3af2cec832ec/source/1',
        name: 'No One Lover Me & Neither Do I',
        album: 'Them Crooked Vultures (Bonus Track Version)'
      }
    }
  }, */
};
</script>

<style scoped lang="scss">
img {
  width: 40%;
}
</style>
