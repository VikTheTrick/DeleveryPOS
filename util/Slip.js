/*
{
    "id": 10,
    "companyLogo": "https://i.pinimg.com/originals/a8/71/4c/a8714cadb2358c6a32ce232025eb13fe.png",
    "price": 1900,
    "delevery": true,
    "status": 0,
    "items": [
        {
            "name": "Cheeseburger",
            "price": 700,
            "groups": [
                {
                    "name": "Sauces",
                    "items": [
                        "Ketchup",
                        "Mayonnaise"
                    ]
                },
                {
                    "name": "Added cheeses",
                    "items": [
                        "Emmentaler",
                        "Cheddar"
                    ]
                }
            ]
        },
        {
            "name": "Coca cola",
            "price": 300,
            "groups": []
        },
        {
            "name": "French Fries",
            "price": 600,
            "groups": []
        }
    ]
}
*/
import orderPrice from "./Price";

const LINE = 42;

function condiment_group(group) {
    let res = "";
    let l = "";
    for (let i in group.items) {
        l = "    " + group.items[i];
        res += l;
        for (let j = 0; j < LINE - l.length; j++) {
            res += " ";
        }
        res += "\n";
    }
    return res;
}
export default function orderSlip(order) {
    let res = "Order: " + order.id + "\n";
    res += "------------------------------------------\n";
    let l, r;
    for (let i in order.items) {
        l = "1x" + order.items[i].name;
        r = order.items[i].price.toString();
        res += l;
        for (let j = 0; j < LINE - l.length - r.length; j++) {
            res += " ";
        }
        res += r;
        res += "\n";
        for (let j in order.items[i].groups) {
            res += condiment_group(order.items[i].groups[j])
        }
    }
    res += "------------------------------------------\n";
    l = "Total: "
    r = orderPrice(order).toString();
    res += l;
    for (let i = 0; i < LINE - l.length - r.length; i++)
        res += " ";
    res += r;
    return res;
}