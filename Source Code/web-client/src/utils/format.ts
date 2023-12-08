// format money to vnd
const formatNumber = (num = 1000) => {
    let money = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(num);
    return money;
};

export { formatNumber }