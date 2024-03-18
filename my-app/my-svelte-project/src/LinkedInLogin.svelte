<!-- LinkedInLogin.svelte -->
<script>
    import { onMount } from 'svelte';
    let loginSuccess = false;

    // Function to handle login with LinkedIn
    async function loginWithLinkedIn() {
        // Call LinkedIn authentication API
        // Upon successful authentication, set loginSuccess to true
        try {
            const response = await fetch('YOUR_LINKEDIN_AUTH_ENDPOINT', {
                method: 'POST',
                // Add necessary headers and body for authentication request
            });

            // Check if authentication was successful
            if (response.ok) {
                loginSuccess = true;
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
        
        loginSuccess = true;
    }
</script>

<div class="container mx-auto mt-8">
    <!-- Login Button -->
    <button on:click={loginWithLinkedIn} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login with LinkedIn
    </button>

    <!-- Show login success message if login is successful -->
    {#if loginSuccess}
        <p class="mt-4 text-green-500">Login Success!</p>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    button {
        background-color: #0077b5;
    }

    button:hover {
        background-color: #005e91;
    }

    button:focus {
        outline: none;
    }

    .text-green-500 {
        color: #4caf50;
    }
</style>

