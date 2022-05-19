const currencyFormatter = new Intl.NumberFormat(undefined,{
    currency: 'usd',
    style: 'currency',
    minimumFractionDigits: 0
})

const formatNumber = number => {
    const  newNumber = currencyFormatter.format(number).replace("$", "");
    return ` ${newNumber}تومان`
}

export { formatNumber }