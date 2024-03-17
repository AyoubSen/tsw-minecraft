<template>
  <div
    @click="handleClick(mod)"
    class="card p-5 grid place-items-center gap-5 bg-slate-100 rounded-md cursor-pointer w-md"
  >
    <h2 class="text-2xl font-bold">{{ mod.name }}</h2>
    <img class="w-20 h-20 rounded-full" :src="mod.imgLink" />
  </div>
</template>

<script>
export default {
  name: "ModCard",
  props: {
    mod: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick(mod) {
      window.open(mod.link, "_blank");
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100%;
}

.card:hover {
  background: #e5f0ff;
}
</style>
