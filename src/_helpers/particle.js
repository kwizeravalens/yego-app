export const CheckoutWave = new Promise((resolve) => {
  let lib = document.createElement("script");
  lib.setAttribute("src", `https://checkout.flutterwave.com/v3.js`);
  lib.setAttribute("id", "particle-lib");
  let scriptExists = document.getElementById("particle-lib");
  if (!scriptExists) {
    document.body.appendChild(lib);
    resolve();
  }
});
