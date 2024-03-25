<script>
  // @ts-nocheck
  
    
    import 'tailwindcss/base.css';
    import 'tailwindcss/components.css';
    import 'tailwindcss/utilities.css';
    import TailwindCss from "$lib/TailwindCSS.svelte";
    export let data;
    import MainFeature from "./MainFeature.svelte";
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import Faq from './FAQ.svelte';
    import { createEventDispatcher } from 'svelte';
    import MainPage from './MainPage.svelte';
    import PricingModule from './pricing_module.svelte';
    import AboutMe from './Aboutme.svelte';
    import RegistrationForm from './register.svelte';
    import {loginStatus} from './loginstatusstore';
    import { faqclick } from './faqclick';
	import Aboutme from './Aboutme.svelte';
    const dispatch = createEventDispatcher();
</script>

{#if !faqclick}
<Header/>
<a href="/">Aboutme</a>
<Footer/>
{:else}
<Header/>
<a href="/about">Aboutme</a>
<Footer/>
{/if}

  <style>
  </style>
  