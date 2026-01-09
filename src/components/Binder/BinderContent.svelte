<script lang="ts">
  export let course;
</script>

<section
  class="content"
  style="--course-color: {course.color}"
>
  <h2>{course.title}</h2>

  <p class="description">{course.description}</p>

  <div class="grid">
    <div>
      <h3>Para quem é</h3>
      <ul>
        {#each course.audience as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>

    <div>
      <h3>O que inclui</h3>
      <ul>
        {#each course.includes as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="checkout">
    <iframe src={course.checkoutUrl} title="Checkout do curso"></iframe>
  </div>
</section>

<style>
  .content {
    background: var(--course-color);
    padding: 3rem;
    border-radius: 0 16px 16px 16px;
    color: var(--white);
    min-height: 60vh;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 2rem 0;
  }

  .checkout iframe {
    width: 100%;
    height: 480px;
    border: none;
    background: var(--background-color);
    border-radius: 12px;
  }
</style>
