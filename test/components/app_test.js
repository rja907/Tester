import { renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//Use 'describe' to group together similar tests.
describe('App', () => {
  // ****Starting and learning test format****
  // //Use it to test a single attr of a target.
  // it('shows the correct text', () => {
  //   //Create an instance of App.
  //   const component = renderComponent(App);
  //   //Use 'expect' to make an assertion about a target.
  //   //expect(<thing we want to make an assertion about>).to.have.class('<value we expect>');
  //   expect(component).to.contain('React simple starter');
  // });

  //Actual test to be conducted for the application.
  let component;
  beforeEach(()=>{
    component = renderComponent(App);
  });
  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});
