<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let course;
  export let active = false;

  const dispatch = createEventDispatcher();
</script>

<button
  class="tab {active ? 'active' : ''}"
  style="--tab-color: {course.color}"
  on:click={() => dispatch('select')}
>
  {course.shortTitle}
</button>

<style>
  .tab {
    background: var(--tab-color);
    color: var(--white);
    padding: 0.75rem 1.5rem;
    border-radius: 12px 12px 0 0;
    border: none;
    cursor: pointer;
    font-weight: 800;

    position: relative;
    top: 8px;
  }

  .tab.active {
    opacity: 1;
    top: 0;
    z-index: 3;
  }
</style>
