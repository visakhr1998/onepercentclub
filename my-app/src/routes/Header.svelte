<!-- Header.svelte -->

<script>
  import { createEventDispatcher } from 'svelte';
  import { page } from '$app/stores';
  import img from './logo.webp';
  import { goto } from '$app/navigation';
  import { faqclick } from './faqclick';

  const dispatch = createEventDispatcher();

  function handleHomeClick() {
    goto('/')
    // dispatch('backToHome'); // Dispatch the event to navigate back to the home page
  }

  function handleFAQClick() {
    goto('/faq')
    // dispatch('toggleFAQ'); // Dispatch the event to navigate to the FAQ page
  }

  function handleaboutusClick() {
    goto('/aboutus')
   // dispatch('toggleAboutUs'); // Dispatch the event to navigate to the About Us page
  }

  function handleClick() {
    faqclick.set(true);
  }
</script>

<header class="bg-white text-black flex items-center justify-between px-4 py-2">
  <div class="flex items-center">
      <img src={img} alt="Logo" class="h-12 mr-2">
      <h1 class="text-xl font-semibold cursor-pointer" on:click={handleHomeClick}>One% Dating Club</h1> <!-- Handle click on the header title -->
  </div>
  <nav class="flex items-center">
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4" on:click={handleFAQClick}>FAQ</button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" on:click={handleaboutusClick}>About Us</button>
  </nav>
</header>
