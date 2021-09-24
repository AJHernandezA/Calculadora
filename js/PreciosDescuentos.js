//  const precioOriginal = 100;
//  const descuento = 15;

//  const PorcentajePrecioConDescuento = 100 - descuento;
//  const precioConDescuento = (precioOriginal*PorcentajePrecioConDescuento)/100;

//  console.log({
//      precioOriginal,
//      descuento,
//      PorcentajePrecioConDescuento,
//      precioConDescuento
//  })



const CalcularPrecioConDescuento = (precio, descuento) =>{
     const PorcentajePrecioConDescuento = 100 - descuento;
     const precioConDescuento = (precio * PorcentajePrecioConDescuento ) / 100;
     return precioConDescuento;
 }

 const valueOfDiscount = (valuePrice, valueDiscount) => {
    const porcerntajeDescontado = 100 - valueDiscount;
    const precioConDescuento = (valuePrice * porcerntajeDescontado) / 100;

    let valorDescontado = valuePrice - precioConDescuento;
    return valorDescontado
};

const verificationCupon = function () {
    const cupons = [10, 25, 50];
    const cupon = document.getElementById("cupons");
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else {
        return 0
    }
}

const calcularDescuentoPrecio = () => {
     const inputPrice = document.getElementById("inputPrice");
     const inputDiscount = document.getElementById("inputDiscount");
     const valuePrice = parseInt(inputPrice.value);
     const valueDiscount = parseInt(inputDiscount.value);

     const verificationCupons = verificationCupon();
     const discountCupon = valueDiscount + verificationCupons;

     const precioConDescuento = CalcularPrecioConDescuento(valuePrice,discountCupon);
     const valorDiscount = valueOfDiscount(valuePrice, discountCupon);


     const resultPrice = document.getElementById("ResultPrice")
     const ahorro = document.getElementById("ahorro")
    
     resultPrice.innerHTML="El precio con descuento es: $ " + precioConDescuento;
     ahorro.innerHTML = "Usted ahorro: $ " + valorDiscount

} 