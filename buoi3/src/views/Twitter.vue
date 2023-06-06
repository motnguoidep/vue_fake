<template>
  <div>
    <Textarea v-model="value" rows="5" cols="30" />
    <p class="v">{{ value }}</p>
    <Button label="Submit" @click="createPost" />
  </div>

  <div v-for="post in posts">
    <p class="content">{{ post.content }}</p>
    <Button
        icon="pi pi-heart"
        severity="help"
        text
        rounded
        aria-label="Favorite"
        @click="liked(post)"
    />

    <Button
        icon="pi pi-times"
        severity="del"
        text
        rounded
        aria-label="Cancel"
        @click="delPost(post)"
    />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import {twitterStore} from "@/stores/twitter";
import {mapActions, mapState} from "pinia";
export default defineComponent({
  name: "",
  data() {
    return {
      value: "",
    };
  },
  //ham
  created() {
    this.fetchData();
  },
  computed:{
    ...mapState(twitterStore, ['posts'])
  },
  // tap hop cac phuong thuc
  methods: {
    ...mapActions(twitterStore, ['fetchData','delete','update']),
    async createPost() {
      let post = {
        content: this.value,
        liked: false,
        date: new Date(),
      };
       await twitterStore().create(post);
      this.value = " ";
      await this.fetchData();
    },
    async delPost(post) {
      await this.delete(post.id);
      await this.fetchData();
    },
    async liked(post) {
      post.liked = !post.liked
      await this.update(post);
      await this.fetchData();
    },
  },
});
</script>



