<template>
  <div class="mt-5">
    <b-row class="border-bottom pb-1 font-weight-bold">
      <b-col cols="2">Meme</b-col>
      <b-col cols="2">Title</b-col>
      <b-col cols="6">Reason this is funny</b-col>
      <b-col cols="2">Actions</b-col>
    </b-row>

    <b-row class="p-2" v-for="(meme, index) of memes" :key="index">
      <b-col cols="2">
        <b-img :src="meme.image" fluid alt="meme img"></b-img>
      </b-col>
      <b-col cols="2">{{ meme.title }}</b-col>
      <b-col cols="6">{{ meme.description }}</b-col>
      <b-col cols="2">
        <b-button
          class="mx-1"
          variant="success"
          @click="updateMeme(index, meme)"
          >Edit</b-button
        >
        <b-button class="mx-1" variant="success" @click="removeMeme(index)"
          >Delete</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import Meme from "@/models/Meme";

@Component
export default class MemeList extends Vue {
  get memes(): Meme[] {
    return this.$store.state.memes;
  }

  async removeMeme(index: number) {
    await this.$store.dispatch("removeMeme", index);
  }

  @Emit('update-meme')
  updateMeme(index: number, meme: Meme) {
      return { index, meme }
  
  }
}
</script>

<style scoped>
table {
  width: 100%;
}
th {
  border-bottom: 1px solid grey;
}
</style>