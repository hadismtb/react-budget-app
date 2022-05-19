const currencyFormatter = new Intl.NumberFormat(undefined,{
    currency: 'IRR',
    style: 'currency',
    minimumFractionDigits: 0
})

export { currencyFormatter }