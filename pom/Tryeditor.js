export class Tryeditor{

     constructor(page) {

        this.runButton = page.getByRole('button', { name: 'Run' });
     }

     async clickRunButton() {
    await this.runButton.click();
}
}





