
// define a function to format a number to currency in VND
const formatCurrency = (number: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}

export { formatCurrency };