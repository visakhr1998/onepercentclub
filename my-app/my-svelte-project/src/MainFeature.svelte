<script>
    let profiles = [
        {
            id: 1,
            name: "John Doe",
            location: "New York, USA",
            age: 30,
            height: "5'10\"",
            intro: "Hi, I'm John. I love hiking and exploring new places.",
            job: "Software Engineer",
            education: "Bachelor's in Computer Science",
            linkedinVerified: true,
            hobbies: ["Hiking", "Traveling", "Reading"]
        },
        {
            id: 2,
            name: "Jane Smith",
            location: "Los Angeles, USA",
            age: 28,
            height: "5'6\"",
            intro: "Hey there! I'm Jane. I enjoy painting and cooking in my free time.",
            job: "Graphic Designer",
            education: "Bachelor's in Fine Arts",
            linkedinVerified: false,
            hobbies: ["Painting", "Cooking", "Photography"]
        },
        // Add more profiles as needed
    ];

    let currentIndex = 0;

    // Function to handle liking a profile
    function likeProfile() {
      //  profiles.shift(); // Remove the current profile
        if (profiles.length === 0) return;
        currentIndex = currentIndex +1; // Update the current index
    }

    // Function to handle rejecting a profile
    function rejectProfile() {
      //  profiles.shift(); // Remove the current profile
        if (profiles.length === 0) return;
        currentIndex = currentIndex +1; // Update the current index
    }
</script>

<!-- HTML code to display profiles and action buttons -->
<div class="container mx-auto mt-8">
    <!-- Profile Display -->
    {#if profiles.length > 0}
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <!-- Profile Image -->
            <img src="profile.jpg" alt="Profile Picture" class="w-full h-64 object-cover">

            <!-- Profile Details -->
            <div class="p-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">{profiles[currentIndex].name}, {profiles[currentIndex].age}</h2>
                <p class="text-gray-600 mb-2">Location: {profiles[currentIndex].location}</p>
                <p class="text-gray-600 mb-2">Height: {profiles[currentIndex].height}</p>
                <p class="text-gray-600 mb-2">Intro: {profiles[currentIndex].intro}</p>
                <p class="text-gray-600 mb-2">Job: {profiles[currentIndex].job}</p>
                <p class="text-gray-600 mb-2">Education: {profiles[currentIndex].education}</p>
                <p class="text-gray-600 mb-2">LinkedIn Status: {profiles[currentIndex].linkedinVerified ? 'Verified' : 'Not Verified'}</p>
                <p class="text-gray-600 mb-2">Hobbies: {profiles[currentIndex].hobbies.join(', ')}</p>

                <!-- Action Buttons -->
                <div class="flex justify-between mt-4">
                    <button on:click={rejectProfile} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Reject
                    </button>
                    <button on:click={likeProfile} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Like
                    </button>
                </div>
            </div>
        </div>
    {:else}
        <p>No more profiles available.</p>
    {/if}
</div>
