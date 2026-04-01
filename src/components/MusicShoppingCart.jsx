<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Shopping Cart Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-green-900">
    <h1 class="mt-8 mb-12 text-white text-center text-3xl md:text-5xl font-semibold">
      Shopping Cart Page
    </h1>

    <div
      id="shopping-cart-container"
      class="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-6"
    >
      <div id="products-container" class="flex-1 space-y-6">
        <div class="card max-w-6xl mx-auto text-center relative bg-green-700 text-white ring-2 ring-white p-8 grid grid-rows-[1fr_auto] gap-6 rounded-xl">
          <h2 class="text-lg">Ludwig Supraphonic Snare Drum Chrome</h2>
          <button>-</button>
          <span class="quantity">2</span>
          <button>+</button>
          <p>
            $<span class="price">1398.00</span>
          </p>
          <button class="remove-button bg-red-500 hover:bg-red-600 rounded py-2 px-4">
            Remove
          </button>
        </div>

        <div class="card max-w-6xl mx-auto text-center relative bg-green-700 text-white ring-2 ring-white p-8 grid grid-rows-[1fr_auto] gap-6 rounded-xl">
          <h2 class="text-lg">Shure SM58S Mic With Switch Standard</h2>
          <button>-</button>
          <span class="quantity">1</span>
          <button>+</button>
          <p>
            $<span class="price">119.00</span>
          </p>
          <button class="remove-button bg-red-500 hover:bg-red-600 rounded py-2 px-4">
            Remove
          </button>
        </div>
      </div>

      <div
        id="order-summary-container"
        class="rounded-lg border-2 border-white p-6 h-fit bg-green-800 text-white lg:w-1/3"
      >
        <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
        <p class="mb-4">
          Shipping: <span>Calculated in checkout</span>
        </p>
        <p id="total" class="text-2xl font-bold mb-6">Total:<p id="total-amount">2915.00</p>
        </p>
        <a
          href="#"
          class="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded font-semibold"
        >
          Checkout
        </a>
      </div>
    </div>
  </body>
</html>;
