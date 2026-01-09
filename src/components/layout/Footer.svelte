<script lang="ts">
  import { Youtube, Twitter, Instagram, Video } from "lucide-svelte";
</script>

<footer class="footer">
  <p>© {new Date().getFullYear()} Juju procurando cores</p>
  <p>Feito com arte, estudo e afeto 🎨</p>
  <div class="socials">
    <a
      href="https://www.youtube.com/@jujuprocurandocores6578/featured"
      target="_blank"
      rel="noopener"
      class="youtube"
      aria-label="YouTube"
    >
      <Youtube />
    </a>
    <a
      href="https://www.tiktok.com/@jujuprocurandocores"
      target="_blank"
      rel="noopener"
      class="tiktok"
      aria-label="TikTok"
    >
      <Video />
    </a>
    <a
      href="https://x.com/Procurandcores"
      target="_blank"
      rel="noopener"
      class="twitter"
      aria-label="Twitter/X"
    >
      <Twitter />
    </a>
    <a
      href="https://www.instagram.com/jujuprocurandocores"
      target="_blank"
      rel="noopener"
      class="instagram"
      aria-label="Instagram"
    >
      <Instagram />
    </a>
  </div>
</footer>

<style>
  .footer {
    background: var(--accent-color);
    color: var(--background-color);
    text-align: center;
    padding: 2rem;
    margin-top: 4rem;
  }
  .socials {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .socials a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: var(--background-color);
    color: var(--accent-color);
    transition:
      background 0.2s,
      color 0.2s;
    font-size: 1.5rem;
    box-shadow: var(--shadow-sm);
  }
  .socials a:hover {
    background: var(--primary-color);
    color: var(--white);
  }
  .socials .youtube:hover {
    background: #8b0000;
  }
  .socials .twitter:hover {
    background: #8b0000;
  }
  .socials .instagram:hover {
   background: #000000;
    color: #ffaf00;
  }
  .socials .tiktok:hover {
    background: #000000;
    color: #ffaf00;
  }
</style>
