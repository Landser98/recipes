<script lang="ts" setup>

const { getRequest, loading,postRequest } = RequestsService();
const currentPost: any = ref([]);

const fileInput = ref()

const editPost = async () => {
  await postRequest("https://jsonplaceholder.typicode.com/posts", currentPost.value, fileInput);
}

const handleFileUpload = (el: object) => {
  fileInput.value = el.target.files[0].name;
};

const getCurrentPost = async () => {
  currentPost.value = await getRequest(
    `https://jsonplaceholder.typicode.com/photos/${useRoute().params.id}`
  );
}

onMounted( () => {
  getCurrentPost()
});


    

</script>

<template>
  <div class="current container">
    <div class="row">
      <form @submit.prevent="editPost()" v-if="!loading">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">{{
            $t("text")
          }}</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="currentPost.title"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">{{
            $t("file")
          }}</label>
          <input
            type="file"
            class="form-control"
            id="exampleInputPassword1"
            ref="fileInput"
            @change="handleFileUpload"
          />
        </div>

        <button type="submit" class="btn btn-primary">{{ $t("send") }}</button>
      </form>
      <Loader v-else />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.current {
  margin-top: 20px;

  &__card-img {
    width: 300px;
    height: 300px;
  }

  &__card-text {
    max-width: 300px;
  }
}
</style>