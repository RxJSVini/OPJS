// export const formatCurrency = (value:number) =>{
//     const brValue = new Intl.NumberFormat('pt-BR', {
//         style:'currency', currency:'BRL'
//     }).format(value);

//     return brValue;
// };

export const useFormaPriceLocal =  (value:string | number) =>{
    return value.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });

};
