<!-- pricing_module.svelte -->

<script>
    import { pricingPlans } from "./pricing_plans";
  
    export let highlightedPlanId = "";
    export let callToAction;
    export let currentPlanId = "free";
    export let center = true;
  
    let planFeatures = [
      {
        name: "Section 1",
        header: true,
      },
      {
        name: "Feature 1",
        freeIncluded: true,
        proIncluded: true,
      },
      {
        name: "Feature 2",
        freeIncluded: false,
        proIncluded: true,
      },
      {
        name: "Feature 3",
        freeString: "3",
        proString: "Unlimited",
      },
      {
        name: "Section 2",
        header: true,
      },
      {
        name: "Feature 4",
        freeIncluded: true,
        proIncluded: true,
      },
      {
        name: "Feature 5",
        freeIncluded: false,
        proIncluded: true,
      },
    ];
  
    // Function to show alert message
    function showAlert() {
      alert('Coming soon');
    }
  </script>
  
  <div
    class="flex flex-col lg:flex-row gap-10 {center
      ? 'place-content-center'
      : ''} flex-wrap"
  >
    {#each pricingPlans as plan}
      <div
        class="flex-none card card-bordered {plan.id === highlightedPlanId
          ? 'border-primary'
          : 'border-gray-200'} shadow-xl flex-1 flex-grow min-w-[260px] max-w-[310px] p-6"
      >
        <div class="flex flex-col h-full">
          <div class="text-xl font-bold">{plan.name}</div>
          <p class="mt-2 text-sm text-gray-500 leading-relaxed">
            {plan.description}
          </p>
          <div class="mt-auto pt-4 text-sm text-gray-600">
            Plan Includes:
            <ul class="list-disc list-inside mt-2 space-y-1">
              {#each plan.features as feature}
                <li class="">{feature}</li>
              {/each}
              <ul></ul>
            </ul>
          </div>
          <div class="pt-8">
            <span class="{plan.id === currentPlanId ? 'text-green-500' : 'text-black'} text-4xl font-bold">{plan.price}</span>
            <span class="text-gray-400">{plan.priceIntervalName}</span>
            <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
              {#if plan.id === currentPlanId}
                <div
                  class="btn btn-outline btn-success no-animation w-[80%] mx-auto cursor-default"
                >
                  Current Plan
                </div>
              {:else}
                <button class="btn btn-primary w-[80%] mx-auto" on:click={showAlert}>Buy</button>
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <style>
    /* Custom styles */
    body {
      background-color: white;
      color: black;
    }
  
    .border-black {
      border-color: black;
    }
  
    .btn-primary {
      background-color: #180042; /* Dark blue */
    }
  
    .btn-primary:hover {
      background-color: white; /* Darker blue */
    }
  </style>
  
  <h1 class="text-2xl font-bold text-center mt-16">Plan Features</h1>
  <h2 class="text-xl text-center text-black mt-1 pb-3">
    Example feature table
  </h2>
  
  <div class="overflow-visible mx-auto max-w-xl mt-4">
    <table class="table">
      <thead class="text-lg sticky top-0 bg-white bg-opacity-50 z-10 backdrop-blur">
        <tr>
          <th></th>
          <th class="text-center border-black">Free</th>
          <th class="text-center border-black">Pro</th>
        </tr>
      </thead>
      <tbody>
        {#each planFeatures as feature}
          {#if feature.header}
            <tr class="bg-white border-black font-bold">
              <td colspan="3" class="bg-blue-200">{feature.name}</td> <!-- Section heading background color -->
            </tr>
          {:else}
            <tr class="relative">
              <td>{feature.name}</td>
              <td class="text-center border-black">
                {#if feature.freeString}
                  {feature.freeString}
                {:else if feature.freeIncluded}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 ml-2 inline text-success"
                  >
                    <use href="#checkcircle" fill="#5cb85c" /> <!-- Green tick mark -->
                  </svg>
                {:else}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[26px] h-[26px] inline text-blue-200"
                  >
                    <use href="#nocircle" fill="#1a365d" />
                  </svg>
                {/if}
              </td>
              <td class="text-center border-black">
                {#if feature.proString}
                  {feature.proString}
                {:else if feature.proIncluded}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 ml-2 inline text-success"
                  >
                    <use href="#checkcircle" fill="#5cb85c" />
                  </svg>
                {:else}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[26px] h-[26px] inline text-blue-200"
                  >
                    <use href="#nocircle" fill="#1a365d" />
                  </svg>
                {/if}
              </td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>
  
  <svg style="display:none" version="2.0">
    <defs>
      <symbol
        id="checkcircle"
        viewBox="0 0 24 24"
        stroke-width="2"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
        />
      </symbol>
    </defs>
  </svg>
  
  <svg style="display:none" version="2.0">
    <defs>
      <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
        />
      </symbol>
    </defs>
  </svg>
   

  