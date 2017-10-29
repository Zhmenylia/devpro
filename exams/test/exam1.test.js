const student = require('../exam1/halas.yevheniia');

describe(`Exam 1 of ${student.firstName} ${student.secondName}`, () => {

  it(`should check valid values`, () => {
    const {task: func} = student;

    expect(func(-1, 300)).toBe(false);
    expect(func(300, 1)).toBe(false);
    expect(func('1', '300')).toBe(false);
  });

  it(`should check empty values`, () => {
    const {task: func} = student;

    expect(func(1, 1)).toEqual([]);
    expect(func(284, 500)).toEqual([]);
  });

  it(`should check correct values`, () => {
    const {task: func} = student;

    expect(func(1, 300)).toEqual([[220, 284]]);
    expect(func(1, 10000)).toEqual([[220, 284], [1184, 1210], [2620, 2924], [5020, 5564], [6232, 6368]]);
    expect(func(500, 5000)).toEqual([[1184, 1210], [2620, 2924]]);

  });
});

