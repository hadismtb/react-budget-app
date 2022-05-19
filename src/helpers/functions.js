const currencyFormatter = new Intl.NumberFormat(undefined,{
    currency: 'irr',
    style: 'currency',
    minimumFractionDigits: 0
})

const formatNumber = number => {
    currencyFormatter.format(number).replace("IRR", "");
    return ` ${number}تومان`
}

export { formatNumber }