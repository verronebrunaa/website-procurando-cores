<script lang="ts">
  import About from "../components/About.svelte";
  import Contact from "../components/Contact.svelte";
  import Hero from "../components/Hero.svelte";
  import Journey from "../components/Journey.svelte";
  import Testimonials from "../components/Testimonials.svelte";
</script>

<main class="home">
  <Hero />

  <section class="paper-section">
    <About />
  </section>

  <section class="paper-section">
    <Journey />
  </section>

  <section class="paper-section">
    <Testimonials />
  </section>

  <section class="paper-section">
    <Contact />
  </section>
</main>

<style>
  .home {
    background: #f3f3f3;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding-bottom: 5rem;
  }

  .paper-section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
</style>
