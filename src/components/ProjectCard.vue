<template>
  <div class="transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-48 w-full object-cover md:w-48" :src="project.image" alt="Project image" />
        </div>
        <div class="p-8">
          <div class="animate-pulse uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ project.name }}</div>
          <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{{ project.description }}</p>
          <a :href="project.link" class="mt-2 text-indigo-500 hover:text-indigo-400 transition ease-in-out duration-150">
            Learn More &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object
  }
}
</script>