<section id="contato" class="contact">
  <h2>Contato</h2>

  <form>
    <input type="text" placeholder="Seu nome" />
    <input type="email" placeholder="Seu email" />
    <textarea placeholder="Sua mensagem"></textarea>

    <button type="submit">Enviar</button>
  </form>
</section>

<style>
  .contact {
    padding: 4rem 2rem;
    background: #ffffff;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
  }

  button {
    background: #8b0000;
    color: var(--background-color);
    padding: 0.75rem;
  }
</style>
