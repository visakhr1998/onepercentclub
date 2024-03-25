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
    import AboutMe from './Aboutme.svelte';
    import RegistrationForm from './register.svelte';
    import {loginStatus} from './loginstatusstore';

function handleFAQClick() {
  showFAQ = true;
  showAboutUs = false;
}
function handleaboutusClick() {
  showaboutus = true;
  showFAQ = false;
}
function handleBackToHome() {
    showFAQ = false;
    showAboutUs = false; // Set showFAQ to false to navigate back to the home page
  }
  </script>


  <TailwindCss/>
<Header/> <!-- Pass the toggleFAQ event handler to the Header component -->
<MainPage/> <MainFeature details={data.details}/>
<Footer /> <!-- Pass the toggleFAQ event handler to the Header component -->


<style>
  .swipe-holder{
    height: 30vh;
    width: 100%;
  }
  img{
    max-width: 100%;
    height: auto;
  }
</style>