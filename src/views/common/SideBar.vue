<template>
  <div>
    <div>
      <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    </div>
    <div>
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="">
</style>