<script lang="ts">
  import BinderTab from './BinderTab.svelte';
  import BinderContent from './BinderContent.svelte';
  import type { Course } from '../../data/courses';

  export let courses: Course[] = [];

  let activeId: string = courses[0]?.id;

  $: activeCourse = courses.find(c => c.id === activeId);
</script>

<div class="binder">
  <div class="tabs">
    {#each courses as course}
      <BinderTab
        course={course}
        active={course.id === activeId}
        on:select={() => (activeId = course.id)}
      />
    {/each}
  </div>

  {#if activeCourse}
    <BinderContent course={activeCourse} />
  {/if}
</div>
