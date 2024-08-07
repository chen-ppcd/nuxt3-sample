<template>

  <Head>
    <Title>Nuxt3 Sample | {{ product?.title }}</Title>
    <Meta name="description" :content="product?.description">
    </Meta>
  </Head>
  <!-- detail -->
  <ProductDetail :product="product"></ProductDetail>
</template>

<script setup lang="ts">

import { Product } from '~/types/product'

// get param ID
const { id } = useRoute().params

// generate URI
const URI: string = `https://fakestoreapi.com/products/${id}`

// fetching detail product
const { data: product }: { data: Ref<Product> } = await useFetch(URI, { key: URI })

// empty fetch result
if (!product.value) {
  throw createError({ statusCode: 404, message: `Product detail with ID ${id} not found` })
}

</script>
