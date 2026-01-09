<script lang="ts">
  import Binder from "../../components/Binder/Binder.svelte";
  import { courses } from "../../data/courses";


</script>

<section class="courses-page">
  <header class="courses-header">
    <h1>O que eu ofereço</h1>
    <p>
      Cursos, guias e acompanhamentos para estudar história da arte
      de forma sensível, organizada e possível.
    </p>
  </header>

  <Binder {courses} />
</section>

<style>
  .courses-page {
    background: #f3f3f3;
    padding: 4rem 1.5rem 6rem;
    min-height: 100vh;
  }

  .courses-header {
    max-width: 900px;
    margin: 0 auto 4rem;
    text-align: center;
  }

  h1 {
    color: #8b0000;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #000949;
    font-size: 1.1rem;
  }
</style>
