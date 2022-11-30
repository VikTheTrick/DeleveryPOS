export default function orderPrice(order) {
    return order?.items.map(e => e.price).reduce((p, c) => (p + c), 0);
}