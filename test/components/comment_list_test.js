import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  beforeEach(()=>{
    const props = {comments:['new','newer']};
    component = renderComponent(CommentList, null, props);
  });
  it('shows an li for ezch comment', () => {
    expect(component.find('li').length).to.equal(2);
  });
  it('shows each comment that is provided', () => {
    expect(component).to.contain('new');
    expect(component).to.contain('newer');
  });
});
