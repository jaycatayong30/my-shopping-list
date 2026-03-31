<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Shopping Cart Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>

  <body class="bg-green-900">
    <h1 class="mt-8 mb-12 text-white text-center text-3xl md:text-5xl font-semibold text-gray-900">
      Shopping Cart Page
    </h1>
    <div
      id="shopping-cart"
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div class="max-w-6xl mx-auto text-center relative bg-green-700 text-white ring-2 ring-white p-8 grid grid-rows-[1fr_auto] gap-6 rounded-xl scale-105">
        <div>
          <p>Ludwig Supraphonic Snare Drum Chrome</p>
          <a href="#">-</a>
          <span>2</span>
          <a href="#">+</a>
          <p>$1398.00</p>
          <a href="#">Remove</a>
        </div>
      </div>
      <div>
        <div>
          <p>Shure SM58S Mic With Switch Standard</p>
          <a href="#">-</a>
          <span>1</span>
          <a href="#">+</a>
          <p>$119.00</p>
          <a href="#">Remove</a>
        </div>
      </div>
      <div>
        <div>
          <p>Fender American Professional II Stratocaster</p>
          <a href="#">-</a>
          <span>1</span>
          <a href="#">+</a>
          <p>$1700.00</p>
          <a href="#">Remove</a>
        </div>
      </div>
      <div>
        <div>
          <p>Moog Subsequent 37 Analog Synthesizer</p>
          <a href="#">-</a>
          <span>2</span>
          <a href="#">+</a>
          <p>$1799.00</p>
          <a href="#">Remove</a>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1>Order Summary</h1>
        <p>
          Subtotal:<span>$5,016.00</span>
        </p>
        <p>
          Shipping:<span>Calculated in checkout</span>
        </p>
        <p>
          Total:<span>$5,016.00</span>
        </p>
        <a href="#">Checkout</a>
      </div>
    </div>
  </body>
</html>;
