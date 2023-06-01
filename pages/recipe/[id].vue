<script lang="ts" setup>

const { getRequest, loading } = RequestsService();
const currentList: any = ref([]);

onMounted(async () => {
  currentList.value = await getRequest(
  `https://jsonplaceholder.typicode.com/photos/${useRoute().params.id}`
  );
});

</script>

<template>
  <div class="current container">
    <div class="row">
      <div class="current__card" v-if="!loading">
        <img class="current__card-img" :src="currentList.url" alt="" />
        <p class="current__card-text">{{ currentList.title }}</p>
      </div>
      <Loader v-else/>
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
    
