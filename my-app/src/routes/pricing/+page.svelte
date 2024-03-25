<!-- pricing_module.svelte -->

<script>
    import { pricingPlans } from "./pricing_plans";
    import 'tailwindcss/base.css';
    import 'tailwindcss/components.css';
    import 'tailwindcss/utilities.css';
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
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  </style>
  

  
  
  

  