<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <div>
          <nuxt-link class="navbar-brand" href="/">{{ $t("home") }}</nuxt-link>
          <nuxt-link class="navbar-brand" href="/create">{{ $t("create")}}</nuxt-link>
        </div>

        <select class="form-select" v-model="$i18n.locale">
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </div>
    </nav>
  </header>
</template>


<style scoped>
.form-select {
  max-width: 200px;
}

</style>