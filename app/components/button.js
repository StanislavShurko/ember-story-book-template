import Component from '@glimmer/component';

export default class ButtonComponent extends Component {
  get onClick() {
    return this.args.onClick ?? (() => {});
  }
}
