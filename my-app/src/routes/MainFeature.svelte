<script>
	import { cubicOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';

    export let details;
    let currentIndex = 0;

    // Determine the direction of the transition based on the current and previous indices
    let transitionDirection = 0;
    let previousIndex = 0;

    // Function to handle navigating to the next profile
    function nextProfile() {
        if (currentIndex < details.length - 1) {
            previousIndex = currentIndex;
            currentIndex++;
            transitionDirection = 500; // Move to the right for next profile
        } else {
            alert("No more profiles available.");
        }
    }

    // Function to handle navigating to the previous profile
    function rejectProfile() {
        if (currentIndex < details.length - 1) {
            previousIndex = currentIndex;
            currentIndex++;
            transitionDirection = -500; // Move to the left for previous profile
        }
    }
</script>

<div class="profile-box" transition:fade>
    <ul>
        {#each details as detail, index}
            {#if index === currentIndex}
                <li transition:fly="{{ x: transitionDirection , duration: 300, easing: cubicOut}}">
                    <!-- Display Image -->
                    <img src={detail.Image} alt="Profile Image" class="profile-image">
                    <!-- Display Other Details -->
                    <p><i class="fas fa-user"></i> Name: {detail.Name}</p>
                    <p><i class="fas fa-birthday-cake"></i> Age: {detail.Age}</p>
                    <p><i class="fas fa-map-marker-alt"></i> Location: {detail.Location}</p>
                    <p><i class="fas fa-ruler-vertical"></i> Height: {detail.Height}</p>
                    <p><i class="fas fa-info-circle"></i> Intro: {detail.Intro}</p>
                    <p><i class="fas fa-briefcase"></i> Job: {detail.Job}</p>
                    <p><i class="fas fa-graduation-cap"></i> Education: {detail.Education}</p>
                    <p><i class="fas fa-heart"></i> Hobbies: {detail.Hobbies}</p>
                </li>
            {/if}
        {/each}
    </ul>

    <!-- Navigation Buttons -->
    <div class="navigation-buttons">
        <!-- Previous Button -->
        <button on:click={rejectProfile} class="button">
            💔
        </button>
        <!-- Next Button -->
        <button on:click={nextProfile} class="button">
            ❤️
        </button>
    </div>
</div>

<style>
    .profile-box {
        background-color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
        padding: 20px;
        border: 2px solid black;
        border-radius: 8px;
        color: black;
        font-family: 'Comic Sans MS', cursive, sans-serif; /* Trendy, cute font */
        text-align: center;
        width: 50%; /* Half of the page size */
        margin: 0 auto; /* Center horizontally */
    }

    .navigation-buttons {
        display: flex;
        justify-content: space-between;
    }

    .button {
        background-color: white;
        color: black;
        font-weight: bold;
        padding: 10px 20px;
        border: 2px solid black;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .button:hover {
        background-color: #f2f2f2;
    }

    .profile-image {
        max-width: 200px;
        display: block;
        margin: 0 auto;
        border: 4px solid black;
        border-radius: 8px;
        margin-bottom: 20px;
    }
</style>
