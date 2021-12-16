export class Plan {

  constructor(public id: string,
              public name: string,
              public description: string,
              public recommended: boolean,
              public cpuCount: number,
              public ramAmount: number,
              public storageAmount: number,
              public price: number) {}
}
