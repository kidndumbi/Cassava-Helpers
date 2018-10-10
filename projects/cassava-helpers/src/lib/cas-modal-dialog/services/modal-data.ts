export class ModalDATA {

    private _data: any = null;

    constructor() {

    }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }
}
