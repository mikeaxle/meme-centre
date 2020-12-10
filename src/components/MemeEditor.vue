<template>
  <div>
    <b-form>
      <b-form-file
        v-model="form.image"
        class="my-3"
        placeholder="Upload Meme"
        required
      ></b-form-file>

      <b-form-group label="Meme Title" label-for="title">
        <b-form-input id="title" v-model="form.title" required></b-form-input>
      </b-form-group>

      <b-form-group label="Reason this is funny" label-for="description">
        <b-form-input
          id="description"
          v-model="form.description"
          required
        ></b-form-input>
      </b-form-group>

      <b-button
        v-if="this.form.index === undefined"
        variant="success"
        @click="addMeme"
        >Add Meme</b-button
      >
      <b-button v-else type="submit" variant="success" @click="updateMeme"
        >Update Meme</b-button
      >
    </b-form>

    <MemeList @update-meme="populateForm" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getImagebase64 } from "@/shared/util";
import MemeList from "@/components/MemeList.vue";
import Meme from "@/models/Meme";

@Component({
  components: {
    MemeList,
  },
})
export default class MemeEditor extends Vue {
  form: any = {
    image: null,
    title: "",
    description: "",
  };

  async addMeme(event: any) {
    event.preventDefault();

    const newMeme = { ...this.form };

    newMeme.image = await getImagebase64(newMeme.image);

    await this.$store.dispatch("addMeme", newMeme);

    this.resetForm();
  }

  async updateMeme(event: any) {
    event.preventDefault();

    const newMeme = { ...this.form };

    newMeme.image = await getImagebase64(newMeme.image);

    await this.$store.dispatch("updateMeme", newMeme);

    this.resetForm();
  }

  populateForm(value: any) {
    this.form.description = value.meme.description;
    this.form.title = value.meme.title;
    this.form.index = value.index;
    this.form.image = null
  }

  resetForm() {
    // reset form
    this.form = {
      image: null,
      description: "",
      title: "",
    };
  }
}
</script>

<style scoped>
</style>
