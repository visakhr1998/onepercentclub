<!-- MainPage.svelte -->

<script>
    // Function to handle navigation to FAQ page

    import { createEventDispatcher } from 'svelte'; // Import the createEventDispatcher function
    import img1 from './couple1.jpg';
    import img2 from './couple2.jpg';
    import img3 from './couple3.jpg';
    import RegistrationForm from './register.svelte';
	import AboutMe from './Aboutme.svelte';
	import Register from './register.svelte';
// Create an event dispatcher
const dispatch = createEventDispatcher();

    function navigateToRegistration() {
    // Navigate to the registration page
  }


  </script>
  
  <div class="container mx-auto px-4 py-8">
    <div id="cvContent" class="bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
        <div class="bg-white p-6">
            <h1 class="text-4xl font-semibold text-center text-black mb-4">Welcome to the club</h1>
            <p class="text-lg font-medium text-center text-black mb-4">What if job rhymed with love? </p>
            <p class="text-lg font-medium text-center text-black mb-8">Open all your possibilities</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray-100 p-6">
                    <h2 class="text-xl font-semibold mb-4">Find Your Match</h2>
                    <p class="text-sm mb-4">Discover like-minded individuals who share your interests and values.</p>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">Browse Profiles</button>
                </div>
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray-100 p-6">
                    <h2 class="text-xl font-semibold mb-4">Create Your Profile</h2>
                    <p class="text-sm mb-4">Craft your unique profile to showcase your personality and attract potential matches.</p>
                    <button on:click={navigateToRegistration} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">Get Started</button>
                </div>
            </div>

            <div class="mt-8">
                <p class="text-center text-sm text-gray-600">Already a member? <a href="#" class="text-blue-500 hover:underline">Sign in here</a></p>
            </div>
        </div>
        <div class="p-6 bg-black">
            <h2 class="text-2xl font-semibold mb-4 text-center">Success Stories</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray-100 p-4">
                    <h3 class="text-lg font-semibold mb-2">John & Emily</h3>
                    <p class="text-sm mb-4">"We met on this platform and instantly connected. Thank you for bringing us together!"</p>
                    <img src={img1} alt="John and Emily" class="w-full h-auto rounded-lg">
                </div>
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray-100 p-4">
                    <h3 class="text-lg font-semibold mb-2">Dorian & Sarah</h3>
                    <p class="text-sm mb-4">"Never thought I'd find my soulmate online, but here we are, happier than ever!"</p>
                    <img src={img2} alt="Dorian and Sarah" class="w-full h-auto rounded-lg">
                </div>
                <div class="rounded-lg overflow-hidden shadow-lg bg-gray-100 p-4">
                    <h3 class="text-lg font-semibold mb-2">Alex & Anna</h3>
                    <p class="text-sm mb-4">"Our love story began with a simple message. Thank you for helping us find each other."</p>
                    <img src={img3} alt="Alex and Anna" class="w-full h-auto rounded-lg">
                </div>
            </div>
        </div>
    </div>
</div>