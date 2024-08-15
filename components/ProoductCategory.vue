<template>
    <section>
        <p class="mb-2">Category</p>
        <section class="flex gap-2 flex-wrap md:flex-nowrap">
            <!-- default -->
            <button @click="changed('')" :class="active == '' ? 'bg-green-500 text-gray-100' : 'text-green-500'" class="btn px-6 border border-green-400 duration-300">All</button>

            <!-- others -->
            <template v-for="category in useProductStore().categories" :key="category">
                <button @click="changed(category)" :class="active == category ? 'bg-green-500 text-gray-100' : 'text-green-500'" class="btn border border-green-400 px-6 duration-300">{{ category }}</button>
            </template>
        </section>
    </section>
</template>

<script setup lang="ts">
// get categories
await useAsyncData('categories', useProductStore().getAllCategories, {
  getCachedData(key, nuxtApp) {
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    if (!data) {
      return null
    }
    const expiration = new Date(data.fetchedAt)
    return expiration.setTime(expiration.getTime() + 5 * 1000) < Date.now() ? null : data
  },
})

const active = ref('')
const changed = (value: string): void => {
  active.value = value
}
watchEffect(() => useProductStore().getProducts(active.value))
</script>
