export class Datastructure{


    constructor(page) {

    this.timeComplexityButton = page.getByRole('link', { name: 'Time Complexity' });

    }

     async clickTimeComplexityButton() {
     await this.timeComplexityButton.click();
  }


}