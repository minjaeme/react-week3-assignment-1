import { render } from '@testing-library/react';

import Page from './Page';

describe('Page', () => {
  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();
  const handleClickDeleteTask = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const taskTitle = '테스크';
  const tasks = [{ id: 1, title: '너무 어렵네요' }];

  const { container } = render((<Page
    taskTitle={taskTitle}
    onChangeTitle={handleChangeTitle}
    onClickAddTask={handleClickAddTask}
    tasks={tasks}
    onClickDeleteTask={handleClickDeleteTask}
  />));

  it('page를 렌더링한다', () => {
    expect(container).toHaveTextContent('To-do');
    expect(container).toHaveTextContent('할 일');
    expect(container).toHaveTextContent('추가');
    expect(container).toHaveTextContent('너무 어렵네요');
    expect(container).toHaveTextContent('완료');
  });
});
