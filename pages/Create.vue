<script lang="ts" setup>

const {postRequest} = RequestsService();
const fileInput = ref();

const data = reactive({
  title: "",
  file: "",
});

const handleFileUpload = (el: object) => {
  fileInput.value = el.target.files[0].name;
};

const createPost = () => {
  postRequest("https://jsonplaceholder.typicode.com/posts", data, fileInput);
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="createPost">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">{{
          $t("text")
        }}</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="data.title"
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
          required
          @change="handleFileUpload"
        />
      </div>

      <button type="submit" class="btn btn-primary">{{ $t("send") }}</button>
    </form>
  </div>
</template>


