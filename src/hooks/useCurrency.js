export default function useCurrency(price){
  const formatedPrice = (price).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });
  return formatedPrice;
}
