<template>
  <div class="flex">
    <Sidebar />
    <div>
      <Header />
      <div class="mainArea pl-20 pr-20 pb-20">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.mainArea {
  overflow: auto;
  height: calc(100vh - 90px);
  display: flex;
  width: 100%;
  margin-top: 20px;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.flex > div:nth-child(2) {
  flex: 1;
}
</style>
