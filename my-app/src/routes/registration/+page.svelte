<!-- RegistrationForm.svelte -->

<script>
    import { writable } from 'svelte/store'; // Import the writable store
    import { form } from './store'; // Import the global store for form details
    
    // Initialize the form data
    let formData = {
        name: '',
        age: '',
        location: '',
        height: '',
        intro: '',
        job: '',
        education: '',
        linkedInVerified: false,
        hobbies: ''
    };
  
    async function handleSubmit() {
        // Submit form data
        console.log('Form submitted:', formData);
        // Save form data to global store
        form.set(formData);
        // You can implement other actions here, such as saving to a database
    }
</script>

<div class="registration-form-container">
    <h1 class="text-2xl font-semibold mb-4">Register</h1>
    <form on:submit|preventDefault={handleSubmit} class="registration-form">
        <label>
            Name:
            <input type="text" bind:value={formData.name} required>
        </label>
        <label>
            Age:
            <input type="number" bind:value={formData.age} required>
        </label>
        <label>
            Location:
            <input type="text" bind:value={formData.location} required>
        </label>
        <label>
            Height (in cm):
            <input type="number" bind:value={formData.height} required>
        </label>
        <label>
            Introduction:
            <textarea bind:value={formData.intro}></textarea>
        </label>
        <label>
            Job:
            <input type="text" bind:value={formData.job}>
        </label>
        <label>
            Education:
            <input type="text" bind:value={formData.education}>
        </label>
        <label>
            LinkedIn Verified:
            <input type="checkbox" bind:checked={formData.linkedInVerified}>
        </label>
        <label>
            Hobbies:
            <input type="text" bind:value={formData.hobbies}>
        </label>
        <button type="submit" class="submit-button">Submit</button>
    </form>
</div>

<style>
    /* Add your styles here */
    .registration-form-container {
        background-color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
    }
    
    .registration-form label {
        display: block;
        margin-bottom: 10px;
    }
    
    .registration-form input,
    .registration-form textarea,
    .registration-form button {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    
    .submit-button {
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    }
    
    .submit-button:hover {
        background-color: #45a049;
    }
</style>
