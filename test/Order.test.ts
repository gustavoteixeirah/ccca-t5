import Coupon from "../src/Coupon";
import Dimensions from "../src/Dimensions";
import Item from "../src/Item";
import Order from "../src/Order";

test("Deve criar um pedido", function () {
    const order = new Order("935.411.347-80");
    expect(order.cpf.getValue()).toBe("935.411.347-80");
    expect(order.getTotal()).toBe(0);
});

test("Não deve criar um pedido com CPF inválido", function () {
    expect(() => new Order("111.111.111-11")).toThrow(
        new Error("CPF Inválido")
    );
});

test("Deve criar um pedido com 3 itens", function () {
    const order = new Order("935.411.347-80");

    order.addItem(
        new Item(
            1,
            "Instrumentos Musicais",
            "Guitarra",
            1000,
            new Dimensions(10, 10, 10, 7)
        ),
        1
    );
    order.addItem(
        new Item(
            2,
            "Instrumentos Musicais",
            "Amplificador",
            5000,
            new Dimensions(10, 10, 10, 7)
        ),
        1
    );
    order.addItem(
        new Item(
            3,
            "Instrumentos Musicais",
            "Cabo",
            30,
            new Dimensions(10, 10, 10, 7)
        ),
        3
    );

    const total = order.getTotal();

    expect(total).toBe(6090);
});

test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
    const order = new Order("935.411.347-80");

    order.addItem(
        new Item(
            1,
            "Instrumentos Musicais",
            "Guitarra",
            1000,
            new Dimensions(10, 10, 10, 7)
        ),
        1
    );
    order.addItem(
        new Item(
            2,
            "Instrumentos Musicais",
            "Amplificador",
            5000,
            new Dimensions(10, 10, 10, 7)
        ),
        1
    );
    order.addItem(
        new Item(
            3,
            "Instrumentos Musicais",
            "Cabo",
            30,
            new Dimensions(10, 10, 10, 7)
        ),
        3
    );

    const coupon = new Coupon("VALE20", 20);
    order.addCoupon(coupon);

    const total = order.getTotal();

    expect(total).toBe(4872);
});

test("Não deve aplicar cupom de desconto expirado", function () {
    expect(() => new Coupon("VALE10", 20)).toThrow(new Error("Cupom expirado"));
});

test("Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)", function () {
    const order = new Order("935.411.347-80");
    order.addItem(
        new Item(
            1,
            "Instrumentos Musicais",
            "Guitarra",
            1000,
            new Dimensions(100, 30, 10, 3)
        ),
        1
    );

    const frete = order.getFrete(1000);

    expect(frete).toBe(30);
});

test("Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado", function () {
    const order = new Order("935.411.347-80");
    order.addItem(
        new Item(
            1,
            "Instrumentos Musicais",
            "Camera",
            1000,
            new Dimensions(20, 15, 10, 1)
        ),
        1
    );

    const frete = order.getFrete(1000);

    expect(frete).toBe(10);
});
