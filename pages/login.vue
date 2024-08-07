<template>
  <section class="mt-6 bg-white p-10 shadow-sm border rounded md:w-5/12">
    <span class="text-center text-green-500">
      <h1 class="text-xl font-medium mb-2">Nuxt3 Sample</h1>
      <h1 class="text-4xl font-medium mb-2">Login</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, libero!</p>
    </span>

    <form class="mt-6" @submit.prevent="login">
      <!-- username -->
      <div class="form--wrapper">
        <label class="form--label" for="username">Username</label>
        <input v-model="username" class="form--input" type="text" name="username" id="username" required
          placeholder="Type your username here">
      </div>

      <!-- password -->
      <div class="form--wrapper">
        <label class="form--label" for="password">Password</label>
        <input v-model="password" class="form--input" type="password" name="password" id="password" required
          placeholder="Type your username here">
      </div>

      <!-- action -->
      <button ref="button" type="submit" class="btn btn-primary w-full mb-6">Login</button>

      <!-- not have account -->
      <p class="mb-5 text-sm text-gray-500">Not have account ? <button @click="getRandomUser" type="button"
          class="text-green-500">Click here</button> to get random user credential</p>
    </form>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: [
    async (to: any, from: any) => {
      // get session
      if(useAuthInfo()) {
        return navigateTo({ path: '/' })
      }
    }
  ]
})
// composables
const { $notyfError, $notyfSuccess } = useNuxtApp()
const router = useRouter()

// body
const username = ref('')
const password = ref('')
const id = ref()

// DOM Element
const button = ref<HTMLButtonElement | null>(null)

// form handler
const login = async () => {

  // disabled submit button
  button!.value!.innerText = 'Please wait ...'
  button!.value!.disabled = true

  // try to login
  const { data, error } = await useAuthLogin({
      username: username.value,
      password: password.value,
      id: id.value
  })
console.log(data)
  if (data.value) {
    $notyfSuccess('Login successfully!')
    router.push('/')
  } else {
    $notyfError(`Login failed! ${error.value}`)
  }

  // enabled
  button!.value!.innerText = 'Submit'
  button!.value!.disabled = false
}

// randoming user
const getRandomUser = async (evt: MouseEvent) => {

  const targetElement = evt.target as HTMLButtonElement

  targetElement.innerText = 'getting ...'
  targetElement.disabled = true

  const { data: user } = await useUserRepo().getRandomUser()

  // auto fill
  if (user.value) {

    username.value = user.value.username
    password.value = user.value.password
    id.value = user.value.id
  }

  $notyfSuccess('get a random user successfully!')

  targetElement.innerText = 'Click here'
  targetElement.disabled = false
}

</script>