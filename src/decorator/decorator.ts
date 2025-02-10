// component
interface Component {
  getDetail(): string;
}

// concrete component
class ProductComponent implements Component {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDetail(): string {
    return `${this.name}`;
  }
}

// decorator
abstract class ProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  getDetail(): string {
    return this.component.getDetail();
  }
}

// decorator 1
class ComercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(component: Component, tradename: string, brand: string) {
    super(component);
    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail(): string {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

// playground

// component
const productComponent = new ProductComponent("Helados");
console.log(productComponent.getDetail());

// decorator 1 con component
const comercialInfoProduct = new ComercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(comercialInfoProduct.getDetail());