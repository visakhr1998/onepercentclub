<!-- MainPage.svelte -->

<script>
    // Function to handle navigation to FAQ page
    import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function handleBackToHomeClick() {
  dispatch('backToHome'); // Dispatch the event to navigate back to the home page
}

    import img1 from './3.webp';
    import img2 from './4.webp';
</script>
  
<div class="container mx-auto px-16 py-8">
    <div id="cvContent" class="bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
        <div class="bg-white p-6 text-black">
            <h1 class="text-4xl font-semibold text-center mb-4">About Us</h1>
            <div class="flex justify-between items-center">
                <!-- Images section -->
                <div class="flex">
                    <img src={img1} alt="Couple Image 1" class="object-cover w-48 h-auto rounded-lg shadow-lg mr-4"> <!-- Increased width to w-48 -->
                    <img src={img2} alt="Couple Image 2" class="object-cover w-48 h-auto rounded-lg shadow-lg"> <!-- Increased width to w-48 -->
                </div>
                <!-- Text section -->
                <div class="max-w-lg ml-1"> <!-- Reduced margin to ml-2 -->
                    <p class="text-base italic">Unlock the door to a world of elite, ambitious singles with an exclusive dating app. Are you ready to step in? Immerse yourself in a realm populated by the driven, the accomplished, the 1%. Welcome to the One% Dating Club. Time is of the essence, and you're in pursuit of the most efficient route to find your soulmate. With One% Dating Club, we revolutionize the dating game by focusing on quality, not quantity. No more sifting through endless profiles. Our objective is to connect you exclusively with elite singles, ones who are serious about long-term commitments.</p>
                    <!-- Content section -->
                    <p class="mt-4 text-base italic">Gone are the days of aimless swiping and uninspiring matches. At One% Dating Club, we meticulously handpick only the top prospects we believe will spark your interest. Each match is not just a profile, but a potential soulmate, meticulously selected to meet your high standards. At One% Dating Club, we believe in matches that meet you at your level. Engage with the elite, converse with the accomplished, and discover potential soulmates amidst the exceptional. Experience the 1% difference. Embark on the journey towards extraordinary love.</p>
                </div>
            </div>
        </div>
    </div>
</div>

