<!-- FAQ.svelte -->

<script>
    // You can include any logic if needed
    import { createEventDispatcher } from 'svelte';
    import 'tailwindcss/base.css';
    import 'tailwindcss/components.css';
    import 'tailwindcss/utilities.css';

const dispatch = createEventDispatcher();

function handleBackToHomeClick() {
  dispatch('backToHome'); // Dispatch the event to navigate back to the home page
}
  </script>
  
  <style>
        @tailwind base;
    @tailwind components;
    @tailwind utilities;
    body {
      font-family: Arial, sans-serif;
      background-color: #f3f4f6;
      color: #333;
      margin: 0;
      padding: 0;
    }
  
    header {
      background-color: #1a202c;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
  
    h1 {
      font-size: 2rem;
      margin: 0;
    }
  
    section {
      background-color: #fff;
      margin: 20px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    h2 {
      font-size: 1.5rem;
      color: #1a202c;
      margin-top: 0;
    }
  
    h3 {
      font-size: 1.2rem;
      color: #4a5568;
    }
  
    p {
      line-height: 1.6;
      margin-bottom: 1em;
    }
  
    ol {
      list-style-type: decimal;
      padding-left: 20px;
    }
  
    li {
      margin-bottom: 10px;
    }
  
    a {
      color: #3182ce;
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
    }
  </style>
  
  <header>
      <h1>FAQs</h1>
  </header>
  
  <section>
      <h2>Questions related to Product</h2>
      <h3>In which cities is One% Dating Club available?</h3>
      <p>One% Dating Club is operational across several key cities in India, including New Delhi, Gurugram, 
      Noida, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Pune, Jaipur, and Goa.</p>
      
      <h3>How many matches can I expect that meet my preferences?</h3>
      <p>The number of potential matches you'll receive is directly influenced by the preferences you specify 
      during your application to One% Dating Club, as well as the volume of users in your vicinity who are 
      searching for someone with your characteristics. Narrower preferences may result in fewer daily 
      matches and lower visibility for your profile. Upon setting your preferences at sign-up, we'll inform you 
      if the anticipated number of matches falls below average. However, it's important to remember that 
      finding the right match often only takes one connection.</p>
      
      <h3>How many daily matches will I receive?</h3>
      <p>The number of daily matches you receive depends on your set preferences and the characteristics of 
      the user base in your local area. Opting for very specific preferences can lead to a smaller pool of 
      daily matches and decrease the visibility of your profile, ultimately resulting in fewer matches. 
      Conversely, broader preferences increase your profile's exposure, enhancing your chances of finding 
      matches more quickly.</p>
  </section>
  
  <section>
      <h2>Privacy</h2>
      <h3>Is using my LinkedIn login mandatory?</h3>
      <p>Yes, to gain complimentary Guest access, we do require you to authenticate using your LinkedIn 
      account. This step ensures a seamless integration of professional credentials, enhancing the overall 
      quality and security of our community.</p>
  </section>
  
  <section>
      <h2>Privacy</h2>
      <article>
          <h3>How is my LinkedIn data utilized?</h3>
          <p>Your LinkedIn data is instrumental in crafting your profile on One% Dating Club, where it's used to automatically populate your profile with essential details such as photos, profession, education, birthdate, and gender. Moreover, we strategically use this information to ensure your profile is hidden from your coworkers and first-degree LinkedIn connections. This approach is based on the assumption that if any of these individuals were potential matches for a significant relationship, you might have already explored that possibility. Our goal is to expand your dating pool beyond your existing professional network, providing you with fresh opportunities to meet someone special.</p>
      </article>
      <article>
          <h3>How will my contact information and personal data be used?</h3>
          <p>Your personal data and contact information are utilized strictly for purposes that enhance your experience on One% Dating Club. This includes populating your profile, compiling aggregated reports to improve our service, and facilitating our communication with you. For a comprehensive overview of how we handle your information, including our commitment to your privacy and the specifics of our data usage policies, we encourage you to review our Privacy Policy and Terms of Service available on our website at <a href="http://onepercentdatingclub.com">onepercentdatingclub.com</a>.</p>
      </article>
  </section>
  
  <section>
      <h2>LinkedIn Verification</h2>
      <article>
          <h3>Why is my LinkedIn login required?</h3>
          <p>We require your LinkedIn login for several key reasons: to prevent matches with your coworkers by identifying your current place of employment, to display mutual connections that can enhance trust and compatibility, to swiftly build your profile with verified professional information, and to ensure authenticity by confirming you are who you claim to be. Rest assured; we do not store any contact information from your LinkedIn, nor do we contact any of your connections about your registration with One% Dating Club.</p>
      </article>
      <article>
          <h3>Can you access my LinkedIn contacts' information?</h3>
          <p>No, we do not access detailed information about your LinkedIn contacts. We only retain their names and unique IDs to identify mutual connections, which helps in showcasing them within the app and ensuring they are excluded from your potential matches through our algorithm. We do not gather any email addresses, nor do we notify your contacts in any manner.</p>
      </article>
      <article>
          <h3>Will you post anything to LinkedIn on my behalf?</h3>
          <p>Absolutely not! The use of your LinkedIn credentials is solely to enrich your experience on One% Dating Club. We utilize this information to automatically fill in your profile with your professional and educational details, as well as to prevent your connections and coworkers from coming across your profile, and vice versa.</p>
      </article>
      <article>
          <h3>Do you store my LinkedIn credentials?</h3>
          <p>No, LinkedIn does not grant us access to your username and password, ensuring your security. We use LinkedIn's authorized integration system, which lets you link your profile to our app without ever sharing your login details with us. Therefore, we do not have access to your LinkedIn username and password.</p>
      </article>
  </section>
  <!-- More sections can be added as needed -->


  