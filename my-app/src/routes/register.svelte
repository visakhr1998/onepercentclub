<!-- RegistrationForm.svelte -->

<script>
  let form = {
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
      console.log('Form submitted:', form);
      // You can implement Supabase integration here to save the form data
  }
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-2xl font-semibold mb-4">Register</h1>
  <form on:submit|preventDefault={handleSubmit}>
      <label>
          Name:
          <input type="text" bind:value={form.name} required>
      </label>
      <label>
          Age:
          <input type="number" bind:value={form.age} required>
      </label>
      <label>
          Location:
          <input type="text" bind:value={form.location} required>
      </label>
      <label>
          Height (in cm):
          <input type="number" bind:value={form.height} required>
      </label>
      <label>
          Introduction:
          <textarea bind:value={form.intro}></textarea>
      </label>
      <label>
          Job:
          <input type="text" bind:value={form.job}>
      </label>
      <label>
          Education:
          <input type="text" bind:value={form.education}>
      </label>
      <label>
          LinkedIn Verified:
          <input type="checkbox" bind:checked={form.linkedInVerified}>
      </label>
      <label>
          Hobbies:
          <input type="text" bind:value={form.hobbies}>
      </label>
      <button type="submit">Submit</button>
  </form>
</div>

<style>
  /* Add your styles here */
</style>
