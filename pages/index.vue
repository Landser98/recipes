<script lang="ts" setup>

const { getRequest, loading } = RequestsService();
const postsList: any = ref([]);
const getPosts = async() => {
  postsList.value = await getRequest(
    "https://jsonplaceholder.typicode.com/photos/?_limit=12"
  );
}

onMounted(async () => {
  getPosts()
});

</script>

<template>
  <main class="main">
    <div class="container">
      <h1>{{ $t("title") }}</h1>
      <div class="row">
        <div class="cards" v-if="!loading">
          <nuxt-link
            :to="'/recipe/' + post.id"
            class="card"
            v-for="post in postsList"
            :key="post.id"
          >
            <img :src="post.url" alt="" />
            <div class="card-body">
              <p class="card-text">
                {{ post.title }}
              </p>
            </div>
            <nuxt-link class="card-link" :to="'/recipe/edit/' + post.id">
              <el-button type="warning">{{ $t("edit") }}</el-button>
            </nuxt-link>
          </nuxt-link>
        </div>
        <Loader v-else />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin-top: 50px;
}
.card {
  width: 18rem;
  &-text,
  &-title {
    color: black;
  }
  &-link {
    padding-bottom: 10px;
    padding-left: 10px;
  }
}

.cards {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
}
</style>