<script lang="ts">
  import Layout from './routes/+layout.svelte';
  import HomePage from './routes/+page.svelte';
  import CursosPage from './routes/cursos/+page.svelte';
  import { onMount } from 'svelte';
  
  let currentPath = '/';
  let currentComponent = HomePage;
  
  function updateRoute() {
    currentPath = window.location.pathname;
    
    if (currentPath === '/' || currentPath === '') {
      currentComponent = HomePage;
    } else if (currentPath === '/cursos' || currentPath.startsWith('/cursos')) {
      currentComponent = CursosPage;
    } else {
      currentComponent = HomePage; // fallback
    }
  }
  
  onMount(() => {
    updateRoute();
    
    window.addEventListener('popstate', updateRoute);
    
    return () => {
      window.removeEventListener('popstate', updateRoute);
    };
  });
</script>

<Layout>
  <svelte:component this={currentComponent} />
</Layout>
